import { Funcionario } from "./Funcionario";

export class STA extends Funcionario{
    private nivel : number;

    public constructor (nome : string, diaria : number, bonus : number, nivel : number){
        super(nome, diaria, bonus);
        this.nivel = nivel;
    }
    public getNivel() : number{
        return this.nivel;
    }
    public setNivel (nivel : number) : void{
        this.nivel = nivel;
    }

    public calculoSalario() : number{
        return 3000+(300*this.nivel) + (this.getDiaria()*100);
    }

    public addDiarias() : boolean{
        if(this.getDiaria() < 1){
            this.setDiaria(this.getDiaria() +1);
            return true;
        } else {
            return false;
        }

    }
    public toString() : string {
        let sta : string = super.toString();
        sta += "Nivel: " + this.nivel + "\n";
        
        return sta;
    }
}