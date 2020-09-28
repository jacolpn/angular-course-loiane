import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputPropertyText: string = `
    Cria uma variável com @Input('inputProperty') para poder
    passar informações de um componente para outro.
  `;
}
