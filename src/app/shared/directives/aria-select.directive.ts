import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appAriaSelect]'
})
export class AriaSelectDirective {
  constructor(private el: ElementRef) { }

  @Output() ariaSelect: EventEmitter<any> = new EventEmitter();
  @Output() ariaEnter: EventEmitter<any> = new EventEmitter();
  @Output() ariaSpace: EventEmitter<any> = new EventEmitter();

  isFocused = false;

  @HostListener('window:keyup', ['$event'])
  onkeyup(event: { keyCode: string | number; }): void {
    // Space key up
    if ((this.el.nativeElement === document.activeElement || this.isFocused)
      && event.keyCode === 32)  {
      this.ariaSelect.emit();
      this.ariaSpace.emit();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onkeydown(event: { keyCode: string | number; }): void {
    // Enter key down
    if ((this.el.nativeElement === document.activeElement || this.isFocused)
      && event.keyCode === 13) {
      this.ariaSelect.emit();
      this.ariaEnter.emit();
    }
  }

  @HostListener('focus', ['$event'])
  onFocus(): void {
    this.isFocused = true;
  }
  @HostListener('blur', ['$event'])
  onblur(): void {
    this.isFocused = false;
  }
}
