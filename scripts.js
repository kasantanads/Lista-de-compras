const itemAddInput = document.getElementById("item-add")
const buttonAdd = document.getElementById("submit-btn")
const list = document.getElementById("list")
const bins = document.querySelectorAll(".bin")

buttonAdd.addEventListener("click", adicionarItem)

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarItem()
    }
})

function adicionarItem() {

    const item = itemAddInput.value.trim() // Impedir que o usuário adicione um item vazio
    if (item === "") return

    const li = document.createElement("li")
    li.classList.add("item")

    const divCheck = document.createElement("div")
    divCheck.classList.add("check")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const span = document.createElement("span")
    span.textContent = item

    divCheck.appendChild(checkbox)
    divCheck.appendChild(span)

    const divImg = document.createElement("div")
    const img = document.createElement("img")
    img.classList.add("bin")
    img.src = "assets/bin.svg"
    img.alt = "Excluir"
    divImg.appendChild(img)

    li.appendChild(divCheck)
    li.appendChild(divImg)
    list.appendChild(li)

    itemAddInput.value = ""
    itemAddInput.focus()
}

list.addEventListener("click", (event) => { // Observa os eventos da ul inteira
    if (event.target.classList.contains("bin")) { // Verifica se o alvo do clique foi um elemento com classe bin

        const item = event.target.closest("li.item"); // Sobe do elemento bin até encontrar uma li com a classe item

        if (item) {
            item.remove(); // Remove o <li> inteiro
        }

        display = document.getElementById("display")
        display.classList.remove("display-none")
        
        setTimeout(() => { // Depois de 3 segundos (3000 milissegundos), adiciona a classe de novo
            display.classList.add("display-none");
        }, 1500); // 1500 ms = 1.5 segundos
    }
})