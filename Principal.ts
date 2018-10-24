declare function require (msg:string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {STA} from "./Sta";
import {Terceirizado} from "./Terceirizado";

function dividirBonus(funcionarios : Funcionario[],bonus: number) : void{
    let b = (bonus/funcionarios.length);
    for(let f of funcionarios){
        f.setBonus(b);
    }
}


let funcionarios : Array<Funcionario> = [];
let bonus : number = 0;
let comando : string = "";
while(comando != "stop"){
    comando = readline.question("Digite um comando: ");

    if (comando == "addProff") {
        let n : string = readline.question("Digite o nome do professor: ");
        let c : string = readline.question("Digite a Classe: ");
        let prof : Professor = new Professor(n, 0, bonus, c);
        funcionarios.push(prof);
        dividirBonus(funcionarios, bonus);
        
    }

    else if(comando == "addSTA"){
        let n : string = readline.question("Digite o nome do servidor: ");
        let nv : number = readline.question("Digite o nível: ");
        let sta : STA = new STA (n, 0, bonus, nv); 
        funcionarios.push(sta);
        dividirBonus(funcionarios, bonus);
        
    }
    else if(comando == "addTer"){
        let n : string = readline.question("Digite o nome do terceirizado: ");
        let h : number = readline.question("Digite as horas trabalhadas: ");
        let insalubre : string = readline.question("É insalubre? ");
        let ter : Terceirizado = new Terceirizado(n, 0, bonus, h, true);
        if(insalubre == "nao"){
            ter.setInsalubre(false);
        }
        funcionarios.push(ter);
        dividirBonus(funcionarios, bonus);
        
    }
    else if(comando == "show"){
        let mostra : string = readline.question("Digite o nome do funcionario: ");
        let f : Funcionario | undefined = undefined;
        for(let i of funcionarios){
            if(i.getNome() == mostra){
                f = i;
            }
        }if (f == undefined){
            console.log("Não encontrado.");
        }else{
            if(f instanceof Professor){
                let prof : Professor = f;
                console.log(prof.toString());
            }
            if(f instanceof STA){
                let stas : STA = f;
                console.log(stas.toString());
            }
            if (f instanceof Terceirizado){
                let ter : Terceirizado = f;
                console.log(ter.toString());
            }
        }
    }

    else if (comando == "bonus"){
        bonus = parseFloat(readline.question("Digite o valor do bonus: "));
        let b : number = (bonus/funcionarios.length);
        for(let f of funcionarios){
            f.setBonus(b);
        }
    }

    else if (comando == "removFuncionario"){
        let rm : string = readline.question("Digite o nome do funcionaro: ")
        for (let i : number = 0; i < funcionarios.length ; i +=1 ){
            if( funcionarios[i].getNome() == rm){
                funcionarios.splice(i, 1);
                dividirBonus(funcionarios, bonus);
            }
        }
    }
}











