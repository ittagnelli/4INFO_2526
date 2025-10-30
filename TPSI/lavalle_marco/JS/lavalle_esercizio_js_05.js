
        function mediaStudente() {
            const table = document.getElementById("tab");
            const nome = document.getElementById("nome").value;
            const media = document.getElementById("media").value;
            const tr = document.createElement("tr");
            tr.innerHTML = "<td>" + nome + "</td><td>" + media +    "</td>";
            table.append(tr);
            console.log("linea creato");
        }

        function colori() {
            const tabella = document.getElementById("tab");
            const righe = tabella.getElementsByTagName("tr");
            for (let i = 0; i < righe.length; i++) {
                if (i % 2 === 0) {
                    righe[i].style.backgroundColor = "blue";
                } else {
                    righe[i].style.backgroundColor = "red";
                }
            }
        }

    