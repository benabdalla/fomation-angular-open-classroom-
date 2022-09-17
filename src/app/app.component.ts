import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formaton Angular Open ClassRoom';
  isauth=false;
  constructor(){
    setTimeout(
    ()=>{
      this.isauth=true;

    },4000
    );
  }

  onAllumer(){
    console.log(this.isauth);
  }

}
