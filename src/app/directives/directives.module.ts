import { NgModule } from '@angular/core';
import { AriaSelectDirective } from './aria-select.directive';

@NgModule({
  declarations: [
    AriaSelectDirective,
  ],
  exports: [
    AriaSelectDirective,
  ],
})
export class DirectivesModule {}
