import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStealth]',
  standalone: true
})
export class StealthDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.hideElement();
    
  }

  @HostListener('mouseover') onMouseOver() {
    this.showElement();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideElement();
  }

  private hideElement() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  }

  private showElement() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }
  
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
