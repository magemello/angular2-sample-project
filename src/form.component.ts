import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Validators, Control } from '@angular/common';

@Component({
    selector: 'form-component',
    template: `
     <form (ngSubmit)="onSubmit()" [ngFormModel]="angularForm">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" id="name" ngControl="name"  #name="ngForm" required/>
        <div [hidden]="name.valid">Required</div>
      </div>
      <div class="form-group">
        <label for="">Surname</label>
        <input type="text" id="surname" ngControl="surname"  #surname="ngForm" required/>
        <div [hidden]="surname.valid">Wrong Surname</div>
      </div>
        <button type="submit" class="btn btn-default" [disabled]="!angularForm.valid" >Submit</button>
    </form>`
})
export class FormComponent {

    angularForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.angularForm = fb.group({
            'name': ['Mario', Validators.required],
            'surname': ['Romano', this.rightSurname]
        });
    }

    rightSurname(c: Control) {
        if (c.value !== 'Romano') {
            return {wrongsurname: false};
        }
    }

    onSubmit(): void {
        console.log(this.angularForm.value);
    }
}