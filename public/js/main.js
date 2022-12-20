console.log(1 == 1);
console.log(1 === 1);

let prenom = prompt("Entrez votre prénom");
if(prenom.length < 5){
    alert("Ton nom est trop court");
}

let nombre1 = Math.round(Math.random()*10);
let nombre2 = Math.round(Math.random()*10);
let addition = prompt(`${nombre1} + ${nombre2} =`);
if(nombre1 + nombre2 == addition){
    alert("Félicitations");
} else{
    alert("C'est incorrect");
}