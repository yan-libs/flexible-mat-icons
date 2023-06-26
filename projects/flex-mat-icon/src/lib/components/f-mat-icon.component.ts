import { Component, inject, OnInit } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { FlexMatIconService } from "../services/flex-mat-icon.service";

@Component({
  template: '<ng-content></ng-content>',
  selector: 'f-mat-icon'
})
export class FlexMatIcon extends MatIcon implements OnInit {

  private flexMatIconService = inject(FlexMatIconService)

  override ngOnInit() {
    const icon = this._elementRef.nativeElement.textContent
    if (
      this.flexMatIconService
        .getRegisteredIcons()
        .some(registeredIcon => registeredIcon === icon)
    ) {
      this.svgIcon = icon
    }

    super.ngOnInit()
  }
}
