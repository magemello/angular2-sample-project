import { Component } from '@angular/core';
import { HelloWorld } from './hello-world.component';
import { StreamComponent } from './stream.component';

@Component({
  selector: 'my-app',
  template: `<stream-conponent></stream-conponent>`,
  directives: [HelloWorld, StreamComponent]
})
export class AppComponent {
}
