import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
appareillName  ="machine" ;
appareillStatus  ="éteint";
@Input() name2:String =""


  constructor() { }

  ngOnInit(): void {
  }
getStatus()
{
  return this.appareillStatus;
}

}
