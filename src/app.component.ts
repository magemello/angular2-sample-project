import { Component } from '@angular/core';
import { HelloWorld } from './hello-world.component';
import { FormComponent } from './form.component';

@Component({
  selector: 'my-app',
  template: `<form-component></form-component>`,
  directives: [HelloWorld, FormComponent]
})
export class AppComponent {
}
