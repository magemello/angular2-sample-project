import { Component } from '@angular/core';

@Component({
    selector: 'form-component',
    template: `
     <form (ngSubmit)="onSubmit()" #angularForm="ngForm">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" class="form-control" required  #name="ngForm"
          [(ngModel)]="model.name" ngControl="name" pattern="[A-Za-z]{5}">
        <div [hidden]="name.valid || name.pristine" >
          Name is required
        </div>
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" class="form-control" required minlength="3"
          [(ngModel)]="model.surname" ngControl="surname"  #surname="ngForm" >
        <div [hidden]="surname.valid || surname.pristine" >
          Name is required
        </div>
        
        <button type="submit" class="btn btn-default" [disabled]="!angularForm.form.valid">Submit</button>
      </div>
    </form>`
})
export class FormComponent {

    model: Model = new Model('Mario', 'Romano');

    onSubmit() {
        console.log(this.model);
    }
}

export class Model {
    constructor(public name: string,
                public surname: string) {
    }
}