let heroi1 = "Adriano"
let heroi2 = "Evandro"
let heroi3 = "Andre"
let heroi4 = "Robertinho"
let heroi5 = "Betinho"
let heroi6 = "Davi"
let heroi7 = "Brenno"
let heroi8 = "Nicollas"

let xp1 = 850
let xp2 = 1200
let xp3 = 2500
let xp4 = 6000
let xp5 = 7200
let xp6 = 8500
let xp7 = 9100
let xp8 = 10500

let listaNomes = [heroi1, heroi2, heroi3, heroi4, heroi5, heroi6, heroi7, heroi8]
let listaXps = [xp1, xp2, xp3, xp4, xp5, xp6, xp7, xp8]

for (let contador = 0; contador < listaNomes.length; contador++) {
    let nome = listaNomes[contador]
    let xp = listaXps[contador]
    let nivel = ""

        if (xp <= 1000) {
        nivel = "Ferro"
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze"
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata"
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro"
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina"
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal"
    } else if (xp >= 10001) {
        nivel = "Radiante"
    }
    
    console.log("O Herói de nome " + nome +  " está no nível de " + nivel)
}
