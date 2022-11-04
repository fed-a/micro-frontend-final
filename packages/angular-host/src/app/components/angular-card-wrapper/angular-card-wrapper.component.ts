import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-angular-card-wrapper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularCardWrapperComponent implements AfterViewInit {
  constructor(private hostRef: ViewContainerRef) {}

  async ngAfterViewInit(): Promise<void> {
    const Component = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    }).then((m) => m['AppComponent']);
    console.log(Component);
    const componentRef = this.hostRef.createComponent(Component);
    componentRef.changeDetectorRef.detectChanges();
  }
}
