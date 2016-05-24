import { Component } from '@angular/core';
import { HelloService } from './hello.service';
import { HiDirective } from './hi.directive';

@Component({
    selector: 'hello-world',
    template: `<h1>Hello world my name is {{name.value}}, from service
              <p *hi="name">
                  Name is right.
              </p>
              </h1>`,
    directives: [HiDirective]
})
export class HelloWorld {

    name: string;

    constructor(helloService: HelloService) {
        this.name = helloService.getName();
    }
}
