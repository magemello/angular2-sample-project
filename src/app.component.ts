import { Component } from '@angular/core';
import { HelloWorld } from './hello-world.component';

@Component({
  selector: 'my-app',
  template: `<h1><hello-world></hello-world></h1>`,
  directives: [HelloWorld]
})
export class AppComponent {
}
