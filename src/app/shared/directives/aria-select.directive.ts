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
  onkeyup(event: { keyCode: string | number; }): boolean {
    // Space key up
    if ((this.el.nativeElement === document.activeElement || this.isFocused)
      && event.keyCode === 32)  {
      this.ariaSelect.emit();
      this.ariaSpace.emit();

      // prevent browser's default page actions for pressing space (scrolls to bottom otherwise)
      return false;
    }
    return true;
  }

  @HostListener('window:keydown', ['$event'])
  onkeydown(event: { keyCode: string | number; }): boolean {
    // Enter key down
    if ((this.el.nativeElement === document.activeElement || this.isFocused)
      && event.keyCode === 13) {
      this.ariaSelect.emit();
      this.ariaEnter.emit();
      // prevent browser's default page actions for pressing enter
      return false;
    }
    return true;
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
