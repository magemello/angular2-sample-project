import { Component } from '@angular/core';
import { HiDirective } from './hi.directive';
import { ChangeColorDirective } from './changeColor.directive';

@Component({
    selector: 'hello-world',
    template: `<div changeColor >
                <h1>Hello world my name is {{name}}, from service
                      <p *hi="name">
                          Name is right.
                      </p>
                </h1>
              </div>
              <input (keyup)="onKey($event)">`,
    directives: [HiDirective, ChangeColorDirective]
})
export class HelloWorld {

    name: string;

    onKey(event: KeyboardEvent) {
        this.name = (<HTMLInputElement>event.target).value;
    }

}
