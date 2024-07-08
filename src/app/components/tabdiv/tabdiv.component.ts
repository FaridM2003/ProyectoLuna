import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoadingscreenService } from '../services/loadingscreen.service';
import { Observable, tap } from 'rxjs';
import * as Popper from "@popperjs/core"
@Component({
  selector: 'app-tabdiv',
  standalone: true,
  imports: [RouterLink,RouterOutlet,],
  templateUrl: './tabdiv.component.html',
  styleUrl: './tabdiv.component.css'
})
export class TabdivComponent implements OnInit{
  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(
  private loadingService: LoadingscreenService,
  private router: Router) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
  }
}
