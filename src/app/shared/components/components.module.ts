import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../directives/directives.module';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { SortIconComponent } from './sort-icon/sort-icon.component';

@NgModule({
  declarations: [
    CustomCheckboxComponent,
    SortIconComponent,
  ],
  exports: [
    CustomCheckboxComponent,
    SortIconComponent,
  ],
  imports: [
    FontAwesomeModule,
    DirectivesModule,
    CommonModule,
  ],
})
export class ComponentsModule {}
