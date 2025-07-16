import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorBtn]'
})
export class ErrorBtn implements OnInit {

  hostEl = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(){
    this.hostEl.classList.add('error');
  }
  constructor() { }

}
