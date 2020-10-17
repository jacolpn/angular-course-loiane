import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  aba: string = 'introduction';
  inputPropertyText: string = `
    Cria uma variável com @Input('inputProperty') para poder
    passar informações de um componente para outro.
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
