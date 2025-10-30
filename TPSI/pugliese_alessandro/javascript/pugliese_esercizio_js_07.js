/* DEMOLISCI TUTTI — version
   Features: matrix bg, CRUD, fuzzy search, sort, export/import CSV,
   undo delete, copy phone, localStorage, shortcuts, confetti, toast.
*/

window.addEventListener('load', ()=> {
  // matrix canvas
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth, h = canvas.height = innerHeight;
  const letters = "01";
  const fontSize = 12;
  let cols = Math.floor(w / fontSize);
  let drops = Array(cols).fill(1);
  function matrix(){
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0,0,w,h);
      ctx.fillStyle = "rgba(0,255,153,0.7)";
      ctx.font = fontSize+"px monospace";
      for(let i=0;i<drops.length;i++){
          ctx.fillText(letters.charAt(Math.random()*letters.length|0), i*fontSize, drops[i]*fontSize);
          if(drops[i]*fontSize > h && Math.random() > 0.975) drops[i]=0;
          drops[i]++;
      }
      requestAnimationFrame(matrix);
  }
  matrix();
  addEventListener('resize', ()=> { w=canvas.width=innerWidth; h=canvas.height=innerHeight; cols=Math.floor(w/fontSize); drops=Array(cols).fill(1); });

  // DOM
  const inputCognome = document.getElementById('cognome');
  const inputNome = document.getElementById('nome');
  const inputIndirizzo = document.getElementById('indirizzo');
  const inputTelefono = document.getElementById('telefono');
  const btnCerca = document.getElementById('btnCerca');
  const btnSalva = document.getElementById('btnSalva');
  const btnClearAll = document.getElementById('btnClearAll');
  const contactsBody = document.getElementById('contactsBody');
  const toast = document.getElementById('toast');
  const globalSearch = document.getElementById('globalSearch');
  const btnExport = document.getElementById('btnExport');
  const btnImport = document.getElementById('btnImport');
  const fileImport = document.getElementById('fileImport');
  const btnUndo = document.getElementById('btnUndo');
  const themeToggle = document.getElementById('themeToggle');

  // state
  const STORAGE_KEY = 'rubrica_demolisci_v1';
  let contacts = loadContacts();
  let selectedIndex = null;
  let deleteStack = []; // for undo

  // initial seed if empty
  if(!contacts.length){
      contacts = [
          {cognome:'Marconi', nome:'Guglielmo', indirizzo:'Via Spalato 33', telefono:'3332545434'},
          {cognome:'Linus', nome:'Torvalds', indirizzo:'strada Kernel 6', telefono:'432323432'}
      ];
      saveContacts();
  }

  // helpers
  function toastShow(txt){
      toast.textContent = txt;
      toast.classList.add('show');
      clearTimeout(toast._t);
      toast._t = setTimeout(()=> toast.classList.remove('show'), 2300);
  }
  function saveContacts(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts)); }
  function loadContacts(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY))||[] }catch(e){return[]} }
  function clearInputs(){ [inputCognome,inputNome,inputIndirizzo,inputTelefono].forEach(i=> i.value=''); selectedIndex=null; highlightSelection(); }

  // render
  function render(filtered = null){
      const list = filtered || contacts;
      contactsBody.innerHTML = '';
      list.forEach((c, i) => {
          const tr = document.createElement('tr');
          tr.className = 'contact-row';
          tr.dataset.index = i;
          tr.innerHTML = `
              <td>${escapeHtml(c.cognome)}</td>
              <td>${escapeHtml(c.nome)}</td>
              <td>${escapeHtml(c.indirizzo)}</td>
              <td>${escapeHtml(c.telefono)}</td>
              <td><button class="btn copy">Copia</button></td>
              <td><button class="btn remove">Rimuovi</button></td>
          `;
          // select row
          tr.addEventListener('click', (ev)=>{
              if(ev.target.classList.contains('copy')||ev.target.classList.contains('remove')) return;
              selectRow(Number(tr.dataset.index), tr);
          });
          // copy
          tr.querySelector('.copy').addEventListener('click', (ev)=>{
              navigator.clipboard?.writeText(c.telefono).then(()=> toastShow('Numero copiato 💾')).catch(()=> toastShow('Copia non supportata'));
              ev.stopPropagation();
          });
          // remove
          tr.querySelector('.remove').addEventListener('click', (ev)=>{
              const idx = Number(tr.dataset.index);
              deleteContact(idx);
              ev.stopPropagation();
          });
          contactsBody.appendChild(tr);
      });
      highlightSelection();
  }

  function escapeHtml(s){ return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

  function selectRow(idx, tr){
      selectedIndex = idx;
      inputCognome.value = contacts[idx].cognome;
      inputNome.value = contacts[idx].nome;
      inputIndirizzo.value = contacts[idx].indirizzo;
      inputTelefono.value = contacts[idx].telefono;
      highlightSelection();
  }

  function highlightSelection(){
      contactsBody.querySelectorAll('tr').forEach(r=> r.classList.remove('selected'));
      if(selectedIndex!==null){
          const row = contactsBody.querySelector(`tr[data-index="${selectedIndex}"]`);
          if(row){ row.classList.add('selected'); row.scrollIntoView({behavior:'smooth', block:'center'}); }
      }
  }

  function deleteContact(idx){
      const removed = contacts.splice(idx,1)[0];
      deleteStack.push({item:removed, index:idx});
      saveContacts();
      render();
      toastShow('Contatto rimosso 🗑️ (Undo disponibile)');
  }

  // undo
  btnUndo.addEventListener('click', ()=>{
      const last = deleteStack.pop();
      if(!last) { toastShow('Niente da annullare'); return; }
      contacts.splice(last.index,0,last.item);
      saveContacts();
      render();
      toastShow('Delete annullato ✅');
  });

  // save (new or update)
  btnSalva.addEventListener('click', ()=>{
      const c = inputCognome.value.trim(), n = inputNome.value.trim(), i = inputIndirizzo.value.trim(), t = inputTelefono.value.trim();
      if(!c||!n||!i||!t){ toastShow('Completa tutti i campi ⚠️'); return; }
      if(selectedIndex!==null){
          contacts[selectedIndex] = {cognome:c, nome:n, indirizzo:i, telefono:t};
          toastShow('Contatto aggiornato ✅');
          burstConfetti(30);
      } else {
          contacts.push({cognome:c, nome:n, indirizzo:i, telefono:t});
          toastShow('Contatto salvato ✅');
          burstConfetti(50);
      }
      saveContacts();
      render();
      clearInputs();
  });

  // fuzzy search by cognome/nome/telefono
  function fuzzyMatch(term, obj){
      term = term.toLowerCase();
      return Object.keys(obj).some(k => String(obj[k]).toLowerCase().includes(term));
  }
  btnCerca.addEventListener('click', ()=>{
      const term = inputCognome.value.trim() || inputTelefono.value.trim() || globalSearch.value.trim();
      if(!term){ toastShow('Metti cognome o telefono o usa la barra in alto 🔎'); return; }
      const found = contacts.filter(c => fuzzyMatch(term, c));
      if(!found.length){ toastShow('Nessun risultato'); return; }
      render(found);
      toastShow(`Trovati ${found.length} risultato(i) ✨`);
  });

  // live global search filtering
  let globalTimer = 0;
  globalSearch.addEventListener('input', ()=>{
      clearTimeout(globalTimer);
      globalTimer = setTimeout(()=>{
          const t = globalSearch.value.trim();
          if(!t) render();
          else render(contacts.filter(c => fuzzyMatch(t, c)));
      }, 150);
  });

  // clear all
  btnClearAll.addEventListener('click', ()=>{
      if(!confirm('Sei sicuro? Cancella tutta la rubrica.')) return;
      deleteStack.push({item:contacts.slice(), index:0, all:true}); // push snapshot
      contacts = [];
      saveContacts();
      render();
      clearInputs();
      toastShow('Rubrica azzerata 💥');
  });

  // export CSV
  btnExport.addEventListener('click', ()=>{
      if(!contacts.length){ toastShow('Rubrica vuota'); return; }
      const header = ['cognome','nome','indirizzo','telefono'];
      const csv = [header.join(',')].concat(contacts.map(c => header.map(h=> `"${String(c[h]).replace(/"/g,'""')}"`).join(','))).join('\n');
      const blob = new Blob([csv], {type:'text/csv'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download='rubrica_export.csv'; a.click();
      URL.revokeObjectURL(url);
      toastShow('Export fatto ✅');
  });

  // import CSV
  btnImport.addEventListener('click', ()=> fileImport.click());
  fileImport.addEventListener('change', (ev)=>{
      const f = ev.target.files[0];
      if(!f) return;
      const reader = new FileReader();
      reader.onload = (e)=>{
          const text = e.target.result;
          const rows = text.split(/\r?\n/).map(r=> r.trim()).filter(r=> r);
          const parsed = [];
          for(let i=1;i<rows.length;i++){
              // basic CSV parse (quotes safe)
              const row = rows[i].match(/("([^"]|"")*"|[^,]+)(?=\s*,|\s*$)/g);
              if(!row) continue;
              const cleaned = row.map(cell => cell.replace(/^"|"$/g,'').replace(/""/g,'"'));
              parsed.push({cognome:cleaned[0]||'', nome:cleaned[1]||'', indirizzo:cleaned[2]||'', telefono:(cleaned[3]||'').replace(/[^\d+]/g,'')});
          }
          if(parsed.length){
              contacts = contacts.concat(parsed);
              saveContacts();
              render();
              toastShow(`Importati ${parsed.length} contatti ✅`);
          } else toastShow('Nessun contatto valido nel CSV');
      };
      reader.readAsText(f);
      fileImport.value = '';
  });

  // sort on header click (toggles)
  let sortState = {key:null, dir:1};
  document.querySelectorAll('th.sortable').forEach(h=>{
      h.addEventListener('click', ()=>{
          const key = h.dataset.key;
          if(sortState.key === key) sortState.dir = -sortState.dir; else { sortState.key = key; sortState.dir = 1; }
          contacts.sort((a,b)=> a[key].localeCompare(b[key], undefined, {numeric:true}) * sortState.dir);
          render();
          toastShow(`Ordinato per ${key} ${sortState.dir>0?'↑':'↓'}`);
      });
  });

  // keyboard shortcuts
  addEventListener('keydown', (ev)=>{
      if((ev.ctrlKey||ev.metaKey) && ev.key.toLowerCase()==='s'){ ev.preventDefault(); btnSalva.click(); return; }
      if((ev.ctrlKey||ev.metaKey) && ev.key.toLowerCase()==='f'){ ev.preventDefault(); btnCerca.click(); return; }
      if(ev.key === 'Delete' || ev.key === 'Backspace'){
          if(selectedIndex!==null){
              if(confirm('Rimuovere contatto selezionato?')) { deleteContact(selectedIndex); clearInputs(); }
          }
      }
  });

  // double click on phone to copy
  contactsBody.addEventListener('dblclick', (ev)=>{
      const tr = ev.target.closest('tr'); if(!tr) return;
      const idx = Number(tr.dataset.index); if(isNaN(idx)) return;
      const phone = contacts[idx]?.telefono; if(phone) { navigator.clipboard?.writeText(phone).then(()=> toastShow('Numero copiato 💾')); }
  });

  // sanitize phone input
  inputTelefono.addEventListener('input', ()=> inputTelefono.value = inputTelefono.value.replace(/[^\d+]/g,''));

  // theme toggle
  themeToggle.addEventListener('change', (e)=>{
      if(e.target.checked){ document.documentElement.style.setProperty('--neon','#88f0ff'); document.documentElement.style.setProperty('--accent','#9affff'); toastShow('Cyber Light ✨'); }
      else { document.documentElement.style.setProperty('--neon','#00ff99'); document.documentElement.style.setProperty('--accent','#00ffaa'); toastShow('Hacker Dark 🕶️'); }
  });

  // confetti simple burst (canvas overlay)
  function burstConfetti(n=30){
      const c = document.createElement('canvas'), ctx=c.getContext('2d');
      c.style.position='fixed'; c.style.left=0; c.style.top=0; c.width=innerWidth; c.height=innerHeight; c.style.zIndex=9999;
      document.body.appendChild(c);
      const particles=[];
      for(let i=0;i<n;i++){
          particles.push({x:innerWidth/2,y:innerHeight/3,vx:(Math.random()-0.5)*8,vy:(Math.random()-1.5)*8,r:2+Math.random()*4,color:`hsl(${Math.random()*360} 90% 60%)`});
      }
      let t=0;
      function frame(){
          t++;
          ctx.clearRect(0,0,c.width,c.height);
          particles.forEach(p=>{
              p.vy += 0.2; p.x+=p.vx; p.y+=p.vy;
              ctx.fillStyle=p.color; ctx.fillRect(p.x,p.y,p.r,p.r*2);
          });
          if(t<120) requestAnimationFrame(frame); else { c.remove(); }
      }
      frame();
  }

  // utility escape & render initial
  function escapeHtml(s){ return String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
  render();

  // click outside -> deselect
  addEventListener('click', (ev)=> { if(!ev.target.closest('table')) { selectedIndex=null; highlightSelection(); } });

});
