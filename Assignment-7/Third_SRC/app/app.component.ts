import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass1';
  public data="Marvellous Infosystems"
  public fun(){
    return this.data="Educating for better tomarrow !!"
  }
}
