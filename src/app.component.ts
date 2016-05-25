import { Component } from '@angular/core';
import { HelloWorld } from './hello-world.component';

@Component({
    selector: 'my-app',
    template: `<h1>
                    <hello-world [name]="myname" (event)="updateFromComponent($event)"></hello-world>
               </h1>
               <hr>
               <b>{{nameComponent}}</b>`
    ,
    directives: [HelloWorld]
})
export class AppComponent {

    myname: string = 'Mario Romano';

    nameComponent: string = ''

    updateFromComponent(nameComponent): void {
        this.nameComponent = nameComponent;
    }
}
