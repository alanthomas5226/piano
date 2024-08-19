//declaracion 
const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.check__key');
const switcher = document.querySelector('.switcher');
const keysSelection = document.querySelector('.piano__keys');

/*rrow function toma el argumento note del dom y luego se declara audio 
donde tiene el objeto audio que busca la nota musical previamente
en la ruta y mediante a la concatenacion de la
variable note se reproducira*/
debugger
const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

//arrow function toma el argumento key del dom
const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

/* declaracion condicion, mira que clases con el nombre black tiene
el elemento key si esta condicon se cumple devuelve tru, agrega una 
nueva clase llamada black--pressed y el return finaliza la ejecucion
de la funcion*/
    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
        
    }
}
