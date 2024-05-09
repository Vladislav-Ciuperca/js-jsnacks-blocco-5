const ortaggi = [
    {
        nome: "Filippo",
        cilindrata: "13cm",
        peso: "10kg",
    },
    {
        nome: "Fiovanni",
        cilindrata: "12cm",
        peso: "13kg",
    },
    {
        nome: "Ftanislav",
        cilindrata: "23cm",
        peso: "45kg",
    },
    {
        nome: "Francesco",
        cilindrata: "3cm",
        peso: "60kg",
    },
    {
        nome: "Foberto",
        cilindrata: "11cm",
        peso: "2kg",
    },
    {
        nome: "Foris",
        cilindrata: "42cm",
        peso: "5kg",
    },
    {
        nome: "Figor",
        cilindrata: "30cm",
        peso: "11kg",
    },
    {
        nome: "Fartyom",
        cilindrata: "18cm",
        peso: "19kg",
    },
]

/*=============================esercizio 1 ============================*/

let somma = 0

const elementi = document.getElementById("elementi")

for (const elemento of ortaggi) {
    console.log(elemento.peso)
    //stampo in pagina tutti i pesos
    elementi.innerHTML = elementi.innerHTML + elemento.peso
    somma = somma + parseInt(elemento.peso)
}
console.log(somma)


const risultato = document.getElementById("risultato")

risultato.innerHTML = "la somma di tutti gli ortaggi ze " + somma + "kg"


/*=============================esercizio 2 ============================*/


const smallCar = document.getElementById("small")
const bigBoy = document.getElementById("big")


const autoDellaNonna = []

const overCompensate = []

for (const elemento of ortaggi) {
    console.log(elemento.cilindrata)
    if (parseInt(elemento.cilindrata) < 15) {
        autoDellaNonna.push(elemento)
        smallCar.innerHTML = smallCar.innerHTML + elemento.nome + " = " + elemento.cilindrata + ", "
    }
    else {
        overCompensate.push(elemento)
        bigBoy.innerHTML = bigBoy.innerHTML + elemento.nome + " = " + elemento.cilindrata + ", "
    }
}

console.log(autoDellaNonna)
console.log(overCompensate)


/*=============================esercizio 2 ============================*/

function inverti(parola) {
    // inverto la parola
    let reversed = parola.split('').reverse().join('');
    return reversed
}

const bottone = document.getElementById("inverti")
const parola = document.getElementById("parola").value
const esito = document.getElementById("esito")

bottone.addEventListener("click", function () {

    // esito.innerHTML = ""

    // let parolaInvertita = inverti(parola)

    // esito.innerHTML = esito.innerHTML + parolaInvertita

})