const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", function () {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = textoTarefa;

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";

    inputTarefa.focus();
});

listaTarefas.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

inputTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnAdicionar.click();
    }
});