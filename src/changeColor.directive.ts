import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[changeColor]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class ChangeColorDirective {
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    onMouseEnter() {
        this.el.style.backgroundColor = '#ff2323'
    }

    onMouseLeave() {
        this.el.style.backgroundColor = '#232323'
    }

}
