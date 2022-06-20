function gerar() {
	sorte = 120;
	let quantia = document.getElementById("quantia").value;
	senha = [];
	for (let i = 0; i < quantia; i++) {
		var aleatorio = Math.random() * 100;
		aleatorio = Math.floor(aleatorio);
		par = aleatorio % 2 === 0;

		if (par) {
			console.log("Sorte par");

			aleatorio = Math.random() * 10;
			aleatorio = Math.floor(aleatorio);
			resto = aleatorio % 2;
			if (resto === 0) {
				if (aleatorio < 33) {
					while (aleatorio < 33) {
						aleatorio = (Math.random()) * sorte;
						aleatorio = Math.floor(aleatorio);
						console.log(aleatorio);
					}
					senha[i] = String.fromCharCode(aleatorio);
				} else {    
					senha[i] = String.fromCharCode(aleatorio);
				}
			} else {
				senha[i] = aleatorio;
			}
		} else {
			console.log("Sorte impar");
			aleatorio = Math.random() * 10;
			aleatorio = Math.floor(aleatorio);
			resto = aleatorio % 2;
			if (resto !== 0) {
				if (aleatorio < 33) {
					while (aleatorio < 33) {
						aleatorio = (Math.random()) * sorte;
						aleatorio = Math.floor(aleatorio);
						console.log(aleatorio);
					}
                    
					senha[i] = String.fromCharCode(aleatorio);
				} else {
					senha[i] = String.fromCharCode(aleatorio);
				}
			} else {
				senha[i] = aleatorio;
			}
		}
	}
    var final= ""

    for(let i = 0; i < quantia; i++){
        
     final += senha[i]
    }
	// let final = senha.join("");

	document.getElementById("password").innerHTML = final;
}


// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }


// for (let  i =0; i <1000; i++){

    
//     if(randomIntFromInterval(33, 126) === 33){
//         console.log("33")

//     }
// }
