import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class TodoModule { }
