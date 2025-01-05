const errorMsg = document.getElementById("generate-error");
function generateError(){
    errorMsg.textContent = "*Passwords do not match";
    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "14px";
}
document.querySelector(".sign-up-button").addEventListener("click", (e) => {
    const pass = document.getElementById("pass").value;
    const cnfPass = document.getElementById("cnf-pass").value;

    if (pass !== cnfPass) {
        console.log("pass not equal");
        generateError();
        console.log("fnc performed");
    }

    if(pass ===cnfPass){
        console.log("pass equal");
        errorMsg.textContent = "";
        console.log("error msg removed");
    }

    if(pass==="" && cnfPass===""){
        errorMsg.textContent = "*Password cannot be blank";
        errorMsg.style.color = "red";        
        errorMsg.style.fontSize = "14px";        
    }
});
