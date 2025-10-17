const savedMeds = JSON.parse(localStorage.getItem("meds")) || [];

const medList = document.getElementById("medList");

if (savedMeds.length === 0){
    medList.innerHTML = "<li>No medication added yet</li>";
        const startBtn = document.createElement("button");
        startBtn.textContent = "Start Now!";
        startBtn.addEventListener("click", () => {
             window.location.href = "Registeration/Registration.html";
        });
        medList.appendChild(startBtn);
} else {
    savedMeds.forEach((med) => {
        const li = document.createElement("li");
        li.textContent = `${med.medName}\n${med.dosage}\n${med.time}`;
        medList.appendChild(li);
    });
}