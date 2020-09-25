import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dataBinding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  dataBindingDiv: boolean = false;

  openSection() {
    this.dataBindingDiv = !this.dataBindingDiv;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
