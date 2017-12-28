import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[Underline]'
})
export class UnderlinedirectiveDirective {

  constructor(private el: ElementRef,
          private renderer: Renderer) { }
  @HostListener('mouseenter') onMouseEnter() {
      this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.hover(false);
  }

  hover(shouldUnderline: boolean) {
      if(shouldUnderline) {
          this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
      } else {
          this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
      }
  }
}
