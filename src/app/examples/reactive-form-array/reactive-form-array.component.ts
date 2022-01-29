import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form-array',
  templateUrl: 'reactive-form-array.component.html',
  styleUrls: ['reactive-form-array.component.css'],
})
export class ReactiveFormArrayComponent implements OnInit {
  public form: FormGroup;

  public ngOnInit(): void {
    this.buildForm();
  }

  public get dateIntervals() {
    return this.form.get('dateIntervals') as FormArray;
  }

  public addIntervals(): void {
    this.dateIntervals.push(this.createOneDateIntervalFormGroup());
  }

  public getHours(i: number) {
    return this.dateIntervals.controls[i].get('hours') as FormArray;
  }

  public get debugValue() {
    return {
      formValid: this.form.valid,
      dateIntervals: this.dateIntervals.value,
    };
  }

  private buildForm(): void {
    let randomcolor = Math.floor(Math.random() * 16777215).toString(16);

    const group = {
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, null),
      isPublic: new FormControl(true, null),
      typology: new FormControl(null, Validators.required),
      place: new FormControl(null, null),
      placeSlug: new FormControl(null, null),
      indirizzo: new FormControl(null, null),
      latitude: new FormControl(null, null),
      longitude: new FormControl(null, null),
      instanceFormId: new FormControl(null, null),
      slotUnit: new FormControl(15, Validators.required),
      //daysBeforeDel: new FormControl(1, Validators.required),
      daysCanBook: new FormControl(1, Validators.required),
      // maxBook: new FormControl(1, Validators.required),
      // maxSlotToView: new FormControl(100, Validators.required),
      // confimationEnabled: new FormControl(false, null),
      canaleFisico: new FormControl(false, null),
      canaleTelefonico: new FormControl(false, null),
      videoconferenza: new FormControl(false, null),
      labelColor: new FormControl('#' + randomcolor, null),
      permissions: new FormControl(null, null),
      dateIntervals: new FormArray([this.createOneDateIntervalFormGroup()]), //questo è un array di form control per gli intervalli di date
      inheritsPermits: new FormControl(null, null),
    };
    this.form = new FormGroup(group);

    this.form.controls['permissions'].setValue({
      users: [],
      roles: [],
      organizations: [],
    });
  }

  private createOneDateIntervalFormGroup(): FormGroup {
    const endDateDefault = new Date();
    endDateDefault.setSeconds(0);
    endDateDefault.setFullYear(endDateDefault.getFullYear() + 30); //fine risorsa tra 30 anni
    const startDateDefault = new Date();
    startDateDefault.setSeconds(0);
    return new FormGroup({
      enabledDateStart: new FormControl(
        startDateDefault.toISOString().slice(0, 16)
      ),
      enabledDateEnd: new FormControl(
        endDateDefault.toISOString().slice(0, 16)
      ),
      hours: new FormArray([
        new FormControl({
          day: 1,
          desc: 'Lunedì',
          hourEntry: [],
        }),
        new FormControl({
          day: 2,
          desc: 'Martedì',
          hourEntry: [],
        }),
        new FormControl({
          day: 3,
          desc: 'Mercoledì',
          hourEntry: [],
        }),
        new FormControl({
          day: 4,
          desc: 'Giovedì',
          hourEntry: [],
        }),
        new FormControl({
          day: 5,
          desc: 'Venerdì',
          hourEntry: [],
        }),
        new FormControl({
          day: 6,
          desc: 'Sabato',
          hourEntry: [],
        }),
        new FormControl({
          day: 0,
          desc: 'Domenica',
          hourEntry: [],
        }),
      ]),
    });
  }
}
