import { Component, OnInit } from '@angular/core';

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

  openSection() {
    this.dataBindingDiv = !this.dataBindingDiv;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
