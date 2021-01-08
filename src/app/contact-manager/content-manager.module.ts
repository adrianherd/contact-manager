import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../shared/components/components.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ContactManagerComponent } from './contact-manager.component';

@NgModule({
  declarations: [
    ContactManagerComponent,
  ],
  exports: [
    ContactManagerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
    ComponentsModule,
    NgbDropdownModule,
  ],
})
export class ContentManagerModule {
}
