import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class SharedModule { }
