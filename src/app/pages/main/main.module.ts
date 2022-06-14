
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/modules/shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    Ng2SearchPipeModule,
  ]
})
export class MainModule { }
