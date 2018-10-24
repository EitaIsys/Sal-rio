import { Funcionario } from "./Funcionario";

export class Terceirizado extends Funcionario{
    private horas : number;
    private insalubre : boolean;

    public constructor (nome : string, diaria : number,bonus : number, horas : number, insalubre : boolean){
        super(nome, diaria, bonus);
        this.horas = horas;
        this.insalubre = insalubre;
        
    }
    public getHoras() : number{
        return this.horas;
    }
    public setHoras(horas : number ) : void{
        this.horas = horas;
    }
    public isInsalubre() : boolean{
        return true;
    }
    public setInsalubre (insalubre : boolean) : void{
        this.insalubre = insalubre;
    }
    public calcularSalario(): number{
    	let salario: number = (this.getHoras() *4) ;
    	if (this.insalubre){
    		salario = salario + 500;
    	}
    	return salario;
    }  
    public toString() : string {
        let ter : string = super.toString();
        ter += "Horas: " + this.horas + "\n";
        ter += "Insalubre: " + this.insalubre + "\n";
        
        return ter;
    } 
}