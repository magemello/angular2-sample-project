import { Component } from '@angular/core';
import { HiDirective } from './hi.directive';

@Component({
    selector: 'hello-world',
    template: `<h1>Hello world my name is {{name}}, from service
                      <p *hi="name">
                          Name is right.
                      </p>
              </h1>
              <input (keyup)="onKey($event)">`,
    directives: [HiDirective]
})
export class HelloWorld {

    name: string;

    onKey(event: KeyboardEvent) {
        this.name = (<HTMLInputElement>event.target).value;
    }

}
