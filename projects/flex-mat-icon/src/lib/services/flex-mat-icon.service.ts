import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Injectable } from "@angular/core";

/**
 * Service for loading icons from assets
 */
@Injectable({
  providedIn: 'root'
})
export abstract class FlexMatIconService {

  /**
   * Icon names without extensions
   */
  protected abstract icons: string[]

  /**
   * Path to icons
   */
  protected abstract assetsPath: string

  constructor(
    protected matIconRegistry: MatIconRegistry,
    protected domSanitizer: DomSanitizer
  ) { }

  public registerIcons(): void {
    this.loadIcons(this.icons, this.assetsPath);
  }

  public getRegisteredIcons(): string[] {
    return this.icons
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach(key => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });
  }
}
