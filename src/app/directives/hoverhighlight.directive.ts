import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[hoverhighlight]'
})
export class HoverhighlightDirective {

  @Input('hoverhighlight') highlightColor: string;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
      this.hover(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.hover(null);
  }

  private hover(color:string) {
      this.renderer.setElementStyle(this.el.nativeElement, 'background', color);
  }
}
