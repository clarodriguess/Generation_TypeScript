import { Ciclista } from "./ICiclista";
import { Corredor } from "./ICorredor";
import { Nadador } from "./INadador";
import { Pessoa } from "./Pessoa";

export class TriAtleta extends Pessoa implements Nadador, Corredor, Ciclista{
    public cansar(): void {
        throw new Error("Method not implemented.");
    }
        
    public aquecer(): void {
        throw new Error("Method not implemented.");
    }
    
    public pedalar(): void {
        throw new Error("Method not implemented.");
    }
    public correr(): void {
        throw new Error("Method not implemented.");
    }
    public nadar(): void {
        throw new Error("Method not implemented.");
    }
    
}