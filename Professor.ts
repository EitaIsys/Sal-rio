import { Funcionario } from "./Funcionario";

export class Professor extends Funcionario{
    private clasSalarial : string;

    public constructor(nome : string, diaria : number, bonus : number, clasSalarial : string){
        super(nome, diaria, bonus);
        this.clasSalarial = clasSalarial;
    }

    public getClasSalarial() : string{
        return this.clasSalarial;
    }
    public setClasSalarial(clasSalarial : string ) : void{
        this.clasSalarial = clasSalarial;
    }


    public calculoSalario() : number {
        if(this.clasSalarial == "A"){
            return 3000 + (this.getDiaria() *100);
        }else if(this.clasSalarial == "B"){
            return 5000 + (this.getDiaria() *100);
        }else if(this.clasSalarial == "C"){
            return 7000 + (this.getDiaria() *100);
        }else if(this.clasSalarial == "D"){
            return 9000 + (this.getDiaria() *100);
        }else if(this.clasSalarial == "E"){
            return 11000 + (this.getDiaria() *100);
        }
        else{
            return -1;
        }
    }
    public addDiarias() : boolean{
        if(this.getDiaria() < 2){
            this.setDiaria(this.getDiaria() +1);
            return true;
        } else {
            return false;
        }
    }
    public toString() : string {
        let prof : string = super.toString();
        prof += "Classe: " + this.clasSalarial + "\n";
        
        return prof;
    }
    
}
