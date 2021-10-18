/**
 * El Objeto player deberia tener las siguientes propiedades:
 * - Que tema musical/musica esta reproduciendo
 * - Deberia el estado del musica (play, pause, etc)
 * - deberia saber el volumen
 * - Deberia saber cuanto dura el tema musical/musica
 * 
 * El objeto, debe permitir interactuar con el de la siguiente:
 * - Carga de musica
 * - Reproducir la musica
 * - Pausarla
 * - Detenerla
 * 
 */

export default class Player {

    constructor(){
        this.state = "stopped";
        this.render();
    }

    load(){

    }

    play(){
        this.state = "playing";
    }

    pause(){
        this.state = "paused";
    }

    stop(){
        this.state = "stopped";
    }

    get state() {
        return this._state;
    }

    set state(newState) {
        if ( newState !== ""){
            this._state = newState;
        }
    }

    render(){
        // Nos puede permitir escribir en el DOM
    }
}
