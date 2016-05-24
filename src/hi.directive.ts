import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({selector: '[hi]'})
export class HiDirective {

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

    @Input() set hi(name: string) {
        if (name === 'Mario Romano') {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
