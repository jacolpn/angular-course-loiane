import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'dataBinding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  dataBindingDiv: boolean = false;
  interpolacao: string = "{{ variável }}";
  propertyBinding: string = "<button [class]='alert'>";
  eventBinding: string = "<button (click)='botaoClicado()'>";
  twoBinding: string = "<button [(ngModel)]='nome'>";
  twoBindingImport: string = "import { FormsModule } from '@angular/forms';";
  valorInput: number = 0;

  @Input('inputProperty') inputProperty: string = '';
  @Output() outputProperty = new EventEmitter();
  @ViewChild('campoInput') campoValorInput: ElementRef;

  openSection() {
    this.dataBindingDiv = !this.dataBindingDiv;
  }

  incrementaInput() {
    this.campoValorInput.nativeElement.value++;
    this.outputProperty.emit(
      { novoValor: this.valorInput }
    );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
