document.querySelector("#activate-flight").addEventListener("click", function () {
    document.getElementById("flight").classList.remove("disabled");
    document.getElementById("flight").classList.add("enabled");

})

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    document.getElementById("mindreading").classList.remove("disabled");
    document.getElementById("mindreading").classList.add("enabled");

})

document.querySelector("#activate-xray").addEventListener("click", function () {
    document.getElementById("xray").classList.remove("disabled");
    document.getElementById("xray").classList.add("enabled");


})

function activateAll() {
    let x = document.querySelectorAll(".disabled");

    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("disabled")
        x[i].classList.add("enabled")
    }
}

function deactivateAll(){
    let y = document.querySelectorAll(".enabled");

    for (let i = 0; i < y.length; i++) {
        y[i].classList.remove("enabled")
        y[i].classList.add("disabled")
    }

}
