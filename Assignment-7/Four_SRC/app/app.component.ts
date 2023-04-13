import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass1';

  public data="Marvellous Infosystem"

  public upper(){
    
    this.data= this.data.toUpperCase();
    return this.data;
    
  }

  public lower(){
     this.data="Marvellous Infosystem";
     this.data= this.data.toLowerCase();
    return this.data;
    
  }
}
