import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `<h1 (click)="emitEvent()">Hello world my name is {{name}}</h1>`
})
export class HelloWorld {
    @Input()
    name: string;

    @Output()
    event: EventEmitter = new EventEmitter();

    emitEvent():void {
        this.event.emit("you clicked the HelloWorldComponent");
    }
}
