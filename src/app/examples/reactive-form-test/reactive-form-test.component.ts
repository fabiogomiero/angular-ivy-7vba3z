import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { pairwise, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { upperFirst } from '../../shared/utils';

@Component({
  selector: 'reactive-form-test',
  templateUrl: 'reactive-form-test.component.html',
  //styleUrls: ['reactive-form-test.component.css'],
})
export class ReactiveFormTestComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private addressFormControl = new FormControl(null);

  public form: FormGroup;

  public emitEvent = true;
  public onlySelf = false;

  public ngOnInit(): void {
    this.buildMainForm();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onButtonClicked(
    event: Event,
    controlName: string,
    action: string
  ): void {
    this[`on${upperFirst(action)}`](event, controlName);
  }

  private buildMainForm(): void {
    this.form = new FormGroup({
      address: this.addressFormControl,
      city: new FormControl(null),
    });

    this.subscriptions.add(
      this.addressFormControl.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe(() => {
          console.log(`Componente valueChanges`);
          this.addressFormControl.setValue(`Address: ${Date.now()}`);
        })
    );

    this.subscriptions.add(
      this.form.valueChanges
        .pipe(pairwise())
        .subscribe(([prev, curr]: [any, any]) => {
          console.log(`Triggered form valueChanges`);
          console.log(`----Prev:`, prev);
          console.log(`----Curr:`, curr);
        })
    );

    this.subscriptions.add(
      this.form.get('address').valueChanges.subscribe((_) => {
        console.log(`Triggered "address" control valueChanges`);
      })
    );
  }

  private onUpdateValue(event: Event, controlName: string): void {
    console.log(`Update value of`, controlName);
    this.form.get(controlName).setValue(`Address ${event.timeStamp}`, {
      onlySelf: this.onlySelf,
      emitEvent: this.emitEvent,
    });
  }

  private onToggleStatus(event: Event, controlName: string): void {
    console.log(`Toggle status of`, controlName);
    const status = this.form.get(controlName).enabled;
    if (status) {
      this.form
        .get(controlName)
        .disable({ onlySelf: this.onlySelf, emitEvent: this.emitEvent });
    } else {
      this.form
        .get(controlName)
        .enable({ onlySelf: this.onlySelf, emitEvent: this.emitEvent });
    }
  }

  public get debugValue() {
    return {
      config: {
        onlySelf: this.onlySelf,
        emitEvent: this.emitEvent,
      },
      formValid: this.form.valid,
      values: this.form.value,
    };
  }
}
