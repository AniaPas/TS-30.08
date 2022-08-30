
import {ciezar} from './elements.enum';
import {dlugosc} from './elements.enum';
import {szerokosc} from './elements.enum';
import {max_speed} from './elements.enum';
import {typ} from './elements.enum';
import {naped} from './elements.enum';
import {iloscPasazerów} from './elements.enum';

export default interface engine {
    ciezar: number,
    dlugosc?: number,
    szerokosc: number,
    max_speed?: number,
    typ: string,
    naped: string,
    iloscPasazerow?: number
}