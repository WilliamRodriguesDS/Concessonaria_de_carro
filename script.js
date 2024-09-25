let carros = [{"Marca": "Ferrari", "Modelo": "F40", "Ano": 1987}, {"Marca": "Ford", "Modelo": "GT500", "Ano": 1966}];

let msg = "";

for(let i = 0; i < carros.length; i++){
    msg += "Marca: " + carros[i].Marca + "<br>";
    msg += "Modelo: " + carros[i].Modelo + "<br>";
    msg += "Ano " + carros[i].Ano + "<br>";
    msg += "<p>" + "</p>"
}

function descrever(){
    for(let i = 0; i < carros.length; i++){
        msg = "Esse carro é um(a) " + carros[i].Marca + "modelo " + carros[i].Modelo + "ano: " + carros[i].Ano;
    }
    return msg;
}

document.querySelector("#output").innerHTML = msg
document.querySelector("#output").innerHTML += descrever()