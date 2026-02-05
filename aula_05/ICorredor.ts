import { Atleta } from "./IAtleta";

export interface Corredor extends Atleta{

    correr():void;

}
//interface nao tem atributo, nem construtor
// tds os metodos dentro da interface sao abstratos
// interface nao tem limite, pode ser implementadas qts interfacer quiser numa classe
//usar implements