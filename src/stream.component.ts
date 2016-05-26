import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Component({
    selector: 'stream-conponent',
    template: `
      <b>Angular 2 Component Using Observables!</b>
      <div>Values: {{values.toString()}}</div>
      <div>Errors? {{anyErrors}}</div>
      <div>Finished? {{finished}}</div>
    `
})
export class StreamComponent {

    private data: Observable<number>;
    private values: Array<number> = [];
    private anyErrors: boolean;
    private finished: boolean;

    constructor() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next('HI');
            }, 1000);

            setTimeout(() => {
                observer.next('Hello');
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);
        });

        this.data.subscribe(
            value => this.values.push(value),
            error => this.anyErrors = true,
            () => this.finished = true
        );
    }

}