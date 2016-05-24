import { Component } from '@angular/core';
import { HelloWorld } from './hello-world.component';

@Component({
  selector: 'my-app',
  template: `<h1><hello-world [name]="myname"></hello-world></h1>`,
  directives: [HelloWorld]
})
export class AppComponent {

  myname:string = 'Mario Romano';
}
