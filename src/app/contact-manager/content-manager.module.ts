import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    ],
})
export class ContentManagerModule {
}
