import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CooperadoServiceService } from 'src/app/services/cooperado-service.service';
declare var $: any;

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent implements OnInit {
  cpf: string = '896.133.550-22';
  cooperado: any;


  constructor(private service: CooperadoServiceService, private message: MatSnackBar) { }

  ngOnInit(): void {
      const cpfInput = $("#cpfInput");
      cpfInput.mask('000.000.000-00', {reverse: true});
  }

  consultarCooperado(){
    this.cooperado = null;
    if(!this.validarCPF()) {
      this.message.open('Campo de CPF inválido', 'OK', { duration: 3000})
      return;
    }

    this.service.consultarCooperadoPorCPF(this.cpf).subscribe((data: Array<any>)=> {
      if(!data.length) {
        this.message.open('CPF não encontrado', 'OK', { duration: 3000})
      }
      this.cooperado = data[0];
    });
  }

  validarCPF(){
    let soma = 0;
    let resto;
    var inputCPF = this.cpf.trim().split('.').join('').replace('-','');

    if(inputCPF == '00000000000') return false;
    for(let i=1; i<=9; i++) {
      soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;
    for(let i = 1; i <= 10; i++) {
      soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    }
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(10, 11))) return false;
    return true;
  }

}
