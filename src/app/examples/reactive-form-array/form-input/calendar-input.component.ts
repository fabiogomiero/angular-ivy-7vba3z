import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Calendar } from '../models/calendar.model';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar-input.component.html',
  styleUrls: [`calendar-input.component.css`],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CalendarInputComponent,
    },
  ],
})
export class CalendarInputComponent implements OnDestroy, ControlValueAccessor {
  private controlValue: Calendar;
  private isDisabled: boolean = false;
  private onChangeSubs: Subscription[] = [];
  public calendarForm: FormGroup;

  constructor() {
    this.calendarForm = new FormGroup({
      hours: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\d,?]+$/),
      ]),
    });
  }

  private onTouched = () => {};

  public ngOnDestroy(): void {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }

  public get description() {
    return this.controlValue.desc;
  }

  public get disabled() {
    return this.isDisabled;
  }

  public writeValue(obj: Calendar): void {
    if (obj) {
      this.controlValue = obj;
      this.calendarForm.setValue(
        { hours: obj.hourEntry },
        { emitEvent: false }
      );
    }
  }

  public registerOnChange(onChange: any): void {
    const sub = this.calendarForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((value: { hours: string }) => {
          if (this.calendarForm.valid) {
            return {
              ...this.controlValue,
              hourEntry: value.hours.split(',').map(Number),
            };
          } else {
            return { ...this.controlValue };
          }
        })
      )
      .subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
