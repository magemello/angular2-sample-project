import { Component } from '@angular/core';
import { HelloService } from './hello.service';
import { HiDirective } from './hi.directive';
import { ChangeColorDirective } from './changeColor.directive';

@Component({
    selector: 'hello-world',
    template: `<div changeColor >
                <h1>Hello world my name is {{name.value}}, from service
                      <p *hi="name">
                          Name is right.
                      </p>
                </h1>
              </div>`,
    directives: [HiDirective, ChangeColorDirective]
})
export class HelloWorld {

    name: string;

    constructor(helloService: HelloService) {
        this.name = helloService.getName();
    }
}
