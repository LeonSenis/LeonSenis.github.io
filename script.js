fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const idInput = document.getElementById("UseridInput");
        const filterButton = document.getElementById("filterButton");
        const deleteButton = document.getElementById("deleteButton");
        const outputDiv = document.getElementById("output");

 
//filter 

filterButton.addEventListener("click", () => {
    const Userid = parseInt(idInput.value);
    const filteredData = data.filter(item => item.userId === Userid);

    if (filteredData.length > 0) {
  
        outputDiv.innerHTML = ""; 
        filteredData.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `
                <p>ID:${item.id}</p>
                <p>UserID:${item.userId}</p>
                <p>Titel:${item.title}</p>
                <p>Fertig ja/nein:${item.completed}</p>
                <hr>
            `;
            outputDiv.appendChild(itemDiv);
        });
    } else {
        outputDiv.textContent = "Diese UserID ist nicht da.";
    }
});

        // löschen 

        deleteButton.addEventListener("click", () => {
            const userId = parseInt(idInput.value);

            if (!userId) {
                outputDiv.textContent = "Bitte geben Sie eine gültige userId ein.";
                return;
            }

            const deleteID = data.length;
            data = data.filter(item => item.userId !== userId);

            if (data.length === deleteID) {
                outputDiv.textContent = `Kein Eintrag mit der ID ${userId} gefunden.`;
            } 
        });
    }) 
