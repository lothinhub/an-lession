import { Directive, Renderer2 ,ElementRef,Input  } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: Element, private render: Renderer2) { }
 

}
