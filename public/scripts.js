function onOff(){
    document.querySelector("#modal").classList.toggle("hide")
    document.querySelector("body").classList.toggle("hideScroll")
    document.querySelector("#modal").classList.toggle("addScroll")
}

function checkFields(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find((value) => {

        const checkIfIsString = typeof event.target[value].value === "string";  // verificando se é uma string
        const checkIfIsEmpty = !event.target[value].value.trim();               // verificando se é vazio

        if (checkIfIsString && checkIfIsEmpty){
            return true
        }
    })

    if(isEmpty){
        event.preventDefault() // não executa o evento padrão (post)
        alert('Por favor preencha todos os campos')
    }
}