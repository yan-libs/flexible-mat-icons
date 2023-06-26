import { FlexMatIconService } from "flex-mat-icon";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppMatIconService extends FlexMatIconService {

  /**
   * Icon names without extensions
   */
  protected override icons = ['assignment_turned_in']

  /**
   * Path to icons
   */
  protected override assetsPath = 'assets/images/icons'
}
