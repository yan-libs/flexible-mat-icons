import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { FlexMatIcon } from "./components/f-mat-icon.component";

@NgModule({
  declarations: [
    FlexMatIcon
  ],
  imports: [
    MatIconModule
  ],
  exports: [
    FlexMatIcon
  ]
})
export class FlexMatIconModule { }
