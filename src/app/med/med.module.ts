import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {SharedModule} from '@shared/shared.module';
import {MedRoutingModule} from '@med/med-routing.module';
import {MedComponent} from '@med/med.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    MedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MedRoutingModule
  ]
})
export class MedModule { }
