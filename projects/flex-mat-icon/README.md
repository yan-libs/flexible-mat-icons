# flex-mat-icon
Makes it possible to use custom svg icons as simple as default angular material icons

## Installation
#### NPM
```
npm install flex-mat-icon
```

#### Import the module and register your icons
```ts
import { FlexMatIconModule } from "flex-mat-icon";

@NgModule({
  declarations: [
   //some declarations
  ],
  imports: [
    //some imports
    FlexMatIconModule
  ],
  providers: [
    //some providers
    {provide: FlexMatIconService, useClass: AppMatIconService}
  ]
})
export class AppModule {
  constructor(
    private iconService: AppMatIconService
  ) {
    this.iconService.registerIcons();
  }
}
```

#### Where AppMatIconService it is service for load your icons. You have to extend FlexMatIconService and override some properties like this(see demo for details):
```ts
@Injectable({
  providedIn: 'root'
})
export class AppMatIconService extends FlexMatIconService {
  protected override icons = ['...list your icons without extensions']
  
  protected override assetsPath = 'path to your icons(can be relative)'
}
```

And now you can use icon like this:
```html
<f-mat-icon>icon name</f-mat-icon>
```

## Demo
You can try out a demo by [clicking here](https://yan-libs.github.io/flexible-mat-icons/).

## Source
https://github.com/yan-libs/flexible-mat-icons/tree/develop/projects/flex-mat-icon
