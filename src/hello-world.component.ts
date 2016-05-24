import { Component, Input } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
    selector: 'hello-world',
    template: `<h1>Hello world my name is {{name}}, from service</h1>`
})
export class HelloWorld {
    
    name: string;

    constructor(helloService: HelloService) {
        this.name = helloService.getName();
    }
}
