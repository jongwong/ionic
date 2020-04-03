import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';



@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [
  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ]
})
export class ShareModule { }
