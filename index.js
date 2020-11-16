window.onload = () => {
    console.log("Hola excusa");
    let who = ["El perro", "Mi tortuga", "Mi gato", "Mi abuela", "Mi hermano"];
    let what = ["se comió", "se robó", "me quitó", "me escondió", "me botó"];
    let when = ["antes de clase.", "cuando almorzaba.", "mientras dormía.", "mientras iba al supermercado.", "el día del examen."];
    
    let whoRandomNumber = Math.floor(Math.random() * who.length);
    let whatRandomNumber = Math.floor(Math.random() * who.length);
    let whenRandomNumber = Math.floor(Math.random() * who.length);
    
    let excuse = "insertar excusa";

    excuse = who[whoRandomNumber] + " " + what[whatRandomNumber] + " " + "mi tarea";
    excuse = excuse + " " + when[whenRandomNumber];


    document.querySelector("#excuse").innerHTML = excuse;
}
