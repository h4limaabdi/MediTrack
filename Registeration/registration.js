alert("This is a prototype!");

const medForm = document.getElementById("form");
const addbtn = document.getElementById("add");
const submitBtn = document.getElementById("submit");

let meds = [];

addbtn.addEventListener("click", (event) =>{
    const medName = document.getElementById("medName").value;
    const dosage = document.getElementById("dosage").value;
    const  time = document.getElementById("time").value;

    if (medName && dosage && time){
        const med = {medName, dosage, time};
        meds.push(med);
        alert(`Added: ${medName}  ${dosage} ${time}`);
    } else {
        alert("Fill in all the fields");
    }
});

submitBtn.addEventListener("click", (event) =>{
    localStorage.setItem("meds", JSON.stringify(meds));
    window.location.href = "Dashboard/index.html";
});