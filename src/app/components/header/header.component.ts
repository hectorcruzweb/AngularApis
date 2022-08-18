import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name="hector";
  visitas=0;
  constructor() { 
    console.log(this.name);
  }

  addName(){
    this.visitas++;
    console.log(this.visitas);
  }
  ngOnInit(): void {
  }

}
