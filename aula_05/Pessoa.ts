export abstract class Pessoa{

    private _nome: string;

    //construtor
    constructor(nome: string){
        this._nome = nome;
    }

    //get e set
	public get nome(): string {
		return this._nome;
	}

	public set nome(nome: string) {
		this._nome = nome;
	}

    //metodo abstrato so pode ser declarado dentro de classe abstrada
    //qnd um metodo abstrado é declarado é obrigatorio implementa-lo na subclasse
    public abstract cansar():void;

    public visualizar():void{
        console.log(`Nome: ${this.nome}`);
    }
}