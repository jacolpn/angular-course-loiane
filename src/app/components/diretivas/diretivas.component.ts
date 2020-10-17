import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  ngIf: String[] = [
    "<p *ngIf='variavel.length > 0'></p>"
  ];

  // ngSwitch: String = 'One';
  ngSwitch: String[] = [
    "<div class='container' [ngSwitch]='ngSwitch'>",
    "<p *ngSwitchCase=''Two''>Modo two.</p>",
    "<p *ngSwitchDefault>Mode one.</p>",
    "</div>"
  ];

  // ngFor: String[] = [
  //   "Angular",
  //   "vueJS"
  // ]
  ngFor: String[] = [
    "<li *ngFor='let ngfor of ngFor, let i = index'>"
  ];

  // ngClass: boolean = false;
  ngClass: String[] = [
    "<div class='circle' [ngClass]='{'blue' : !ngClass, 'green' : ngClass}'></div>"
  ]

  // ngStyle: boolean = false;
  // tamanhoFonte: number = 14;
  ngStyle: String[] = [
    "<button [ngStyle]='{'backgroundColor': (ngStyle ? 'blue' : 'gray')>"
  ]

  elvis: String[] = [
    "{{ tarefa.responsavel?.usuario?.nome }}"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
