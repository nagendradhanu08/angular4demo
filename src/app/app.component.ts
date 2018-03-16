import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	myArr = ['him','hers','yours','theirs'];
   	myArrr = true;
    angularLogo = 'http://cometdigisol.com/images/logo-dark.png';
    myEvent(event) {
   	 	console.log(event);
   	 	alert("aaa");
  	}
}
