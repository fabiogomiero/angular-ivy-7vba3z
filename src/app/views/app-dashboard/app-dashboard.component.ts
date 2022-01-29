import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RouteExtended } from '../../app.model';
import { features } from '../../features';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'app-dashboard.component.html',
  styleUrls: ['app-dashboard.component.css'],
})
export class AppDashboardComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private rowNumber: number = 3;
  public items$: BehaviorSubject<Array<RouteExtended>> = new BehaviorSubject(
    []
  );

  public ngOnInit(): void {
    this.subscription.add(
      of(features)
        .pipe(
          tap((features) => (this.rowNumber = Math.ceil(features.length / 3))),
          tap((features) => this.items$.next(features))
        )
        .subscribe()
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public get rowTemplate(): any {
    return { 'grid-template-rows': `repeat(${this.rowNumber}, 200px)` };
  }
}
