import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pessoas',
  standalone: true,
  imports: [ReactiveFormsModule , JsonPipe],
  templateUrl: './form-pessoas.component.html',
  styleUrl: './form-pessoas.component.scss'
})
export class FormPessoasComponent {

  
  constructor(private _fb: FormBuilder){}



  //formulario
  public barbecue = this._fb.group({
    adultos: ['', Validators.required],
    criancas: ['',Validators.required],
    cortesBovinos: this._fb.group({
      picanha: [false],
      alcatra: [false],
      contraFile: [false],
      cupim: [false],
      fileMignon: [false],
    }),
    cortesSuinos: this._fb.group({
      costelaSuina: [false],
      lomboSuina: [false],
      picanhaSuina: [false],
      maminhaSuina: [false],
      carreSuina: [false],
    }),
    cortesFrango: this._fb.group({
      coracaoFrango: [false],
      sobrecoxa: [false],
      linguicaFrango: [false],
      asinhaFrango: [false],
    }),
    acompanhamentos: this._fb.group({
      arroz: [false],
      feijaoTropeiro: [false],
      mandioca: [false],
      paoDeAlho: [false],
    }),
    bebidas: this._fb.group({
      agua: [false],
      refrigerante: [false],
      cerveja: [false],
      suco: [false],
    })
  })

  //calculos

  valorAdultos = '';
  valorCriancas = '';
  processedData?: any;
  
  qtdAdultos(value: string){
    this.valorAdultos = value;
  }
  
  qtdCriancas(value: string){
    this.valorCriancas = value;
    
  }
  

  onSubmit() {
    if(this.barbecue.invalid){
      return; //se nao for valido nao e feito o submit no form
    }
    
    var formData = this.barbecue.value
    this.processData(formData)
    console.log(formData);
  }

  processData(data: any){
    this.processedData = {
      adultos: data.adultos,
      criancas: data.criancas
    }
    console.log('Dados processados: ', this.processedData);
    
  }


}
