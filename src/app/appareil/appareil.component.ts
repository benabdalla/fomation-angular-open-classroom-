import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
appareillName  ="machine à laver" ;
appareillStatus  ="éteint";


  constructor() { }

  ngOnInit(): void {
  }
getStatus()
{
  return this.appareillStatus;
}

}
