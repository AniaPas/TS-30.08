import {ciezar} from './elements.enum';
import {dlugosc} from './elements.enum';
import {szerokosc} from './elements.enum';
import {max_speed} from './elements.enum';
import {typ} from './elements.enum';
import {naped} from './elements.enum';
import {iloscPasazerów} from './elements.enum';
import engine from './engine.interface';


class Lokomotywa implements engine {
    ciezar: number
    dlugosc?: number
    szerokosc: number
    max_speed?: number
    typ: string
    naped: string
    iloscPasazerow?: number
    
    
    constructor(ciezar: number, szerokosc: number, typ: string, naped: string, dlugosc?: number,  max_speed?: number, iloscPasazerow?: number) {
        this.ciezar = ciezar
        this.szerokosc = szerokosc
        this.typ = typ
        this.naped = naped
        this.dlugosc = dlugosc
        this.max_speed = max_speed
        this.iloscPasazerow = iloscPasazerow

    }

}

const newEngine = new Lokomotywa(ciezar.weight1, szerokosc.width1, typ.type1, naped.drive1, dlugosc.length15, iloscPasazerów.nOp1) 
console.log(newEngine)