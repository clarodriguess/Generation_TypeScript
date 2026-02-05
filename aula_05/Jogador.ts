import { Corredor } from "./ICorredor";
import { Pessoa } from "./Pessoa";

export class Jogador extends Pessoa implements Corredor{
    public cansar(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(nome: string){
        super(nome);
    }
    correr(): void {
        throw new Error("Method not implemented.");
    }

      public aquecer(): void {
        console.log("o jogador aqueceu")
    }

}