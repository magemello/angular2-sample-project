import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello world my name is {{name}}</h1>`
})
export class HelloWorld {
  @Input()
  name: string;
}
