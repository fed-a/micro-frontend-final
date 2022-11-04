import { loadRemoteModule } from "@angular-architects/module-federation";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
} from "@angular/core";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

@Component({
  selector: "app-react-widget-wrapper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactWidgetWrapperComponent implements AfterViewInit {
  constructor(private hostRef: ViewContainerRef) {}

  async ngAfterViewInit(): Promise<void> {
    const ReactMFEModule = await loadRemoteModule({
      remoteEntry: "http://localhost:3000/remoteEntry.js",
      remoteName: "reactWidget",
      exposedModule: "./App",
    }).then((m) => m["default"]);
    const hostElement = this.hostRef.element.nativeElement;
    const root = ReactDOM.createRoot(hostElement);
    root.render(<ReactMFEModule />);
  }
}
