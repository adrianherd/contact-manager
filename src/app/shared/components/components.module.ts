import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../directives/directives.module';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';

@NgModule({
  declarations: [
    CustomCheckboxComponent,
  ],
  exports: [
    CustomCheckboxComponent,
  ],
  imports: [
    FontAwesomeModule,
    DirectivesModule,
  ],
})
export class ComponentsModule {}
