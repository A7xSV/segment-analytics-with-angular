import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'segment-analytics-with-angular'
  routerEventSubscription: Subscription | undefined;

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this.routerEventSubscription = this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        analytics.page(event.url)
      }
    });
  }

  public ngOnDestroy(): void {
    this.routerEventSubscription?.unsubscribe()
  }
}
