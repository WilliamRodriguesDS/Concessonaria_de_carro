let carros = [{"Marca": "Ferrari", "Modelo": "F40", "Ano": 1987}, {"Marca": "Ford", "Modelo": "GT500", "Ano": 1966}, {"Marca": "Nissan", "Modelo": "GTR Skyline R34", "Ano": 1998}, {"Marca": "Lamborghini", "Modelo": "Aventador", "Ano": 2011}];

let msg = "";

function descrever(carros){
    return "Descrição: "  + "A marca deste carro é " + carros.Marca + ", além disso, o seu modelo é " + carros.Modelo + " e o seu ano de fabricação foi em " + carros.Ano; 
}

for(let i = 0; i < carros.length; i++){
    msg += "Marca: " + carros[i].Marca + "<br>";
    msg += "Modelo: " + carros[i].Modelo + "<br>";
    msg += "Ano: " + carros[i].Ano + "<br>";
    msg += descrever(carros[i]) + "<br>";
    msg += "<p>" + "</p>"
}

document.querySelector("#output").innerHTML = msg