import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciaListComponent],
  declarations: [ConferenciaListComponent, ConferenciaDetailComponent]
})
export class ConferenciaModule { }
