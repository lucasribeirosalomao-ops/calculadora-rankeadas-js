let nomeHeroi = "Luczao";
console.log (nomeHeroi);

let pontosXp = 10000;

if (pontosXp >= 1 && pontosXp <= 1000){  
console.log ("o " +nomeHeroi + " está no rank Ferro!"); 
}
else if (pontosXp >= 1001 && pontosXp <= 2000){
    console.log ("o " +nomeHeroi + " está no rank Prata!"); 
}
else if (pontosXp >= 2001 && pontosXp <= 3000){
    console.log ("o" +nomeHeroi + " está no rank Ouro!"); 
}
else if (pontosXp >= 3001 && pontosXp <= 4000){
    console.log ("o " +nomeHeroi + " está no rank Ak!"); 
}
else if (pontosXp >= 4001 && pontosXp <= 5000){
    console.log ("o " +nomeHeroi + " está no rank Ak cruzada!"); 
}
else if (pontosXp >= 5001 && pontosXp <= 6000){
    console.log ("o " +nomeHeroi + " está no rank Xerife!"); 
}
else if (pontosXp >= 6001 && pontosXp <= 7000){
    console.log ("o " +nomeHeroi + " está no rank Aguia!"); 
}
else if (pontosXp >= 7001 && pontosXp <= 8000){
    console.log ("o " +nomeHeroi + " está no rank Aguia 2!"); 
}
else if (pontosXp >= 8001 && pontosXp <= 9000){
    console.log ("o " +nomeHeroi + " está no rank Supremo!"); 
}
else if (pontosXp >= 9001){
    console.log ("o " +nomeHeroi + " está no rank Global!"); 
}
else{  
    console.log("o " +nomeHeroi + " nao tem rank! ");
}