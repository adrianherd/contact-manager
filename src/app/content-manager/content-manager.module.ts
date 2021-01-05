import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentManagerComponent } from './content-manager.component';

@NgModule({
  declarations: [
    ContentManagerComponent,
  ],
  exports: [
    ContentManagerComponent,
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
})
export class ContentManagerModule {
}
