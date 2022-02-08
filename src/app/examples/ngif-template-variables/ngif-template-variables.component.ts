import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Row } from './models/row.model';

@Component({
  selector: 'ngif-template-variables',
  templateUrl: `./ngif-template-variables.component.html`,
  styleUrls: [`./ngif-template-variables.component.css`],
})
export class NgifTemplateVariablesComponent {
  public form: FormGroup;
  public user: { name: string; lastName: string };
  public rows: Array<Row>;

  public initUser(): void {
    this.user = { name: 'Name', lastName: 'Last Name' };
  }

  public initForm(): void {
    const size = this.getSize(3, 5);
    this.rows = [];
    const controls = {};
    for (let i = 0; i < size; i++) {
      const editable = Math.random() < 0.5;
      const isNumber = Math.random() < 0.5;
      const row: Row = {
        editable,
        name: `id-${i + 1}`,
        value: this.getString(isNumber, 12),
      };
      if (editable) {
        const formControl = new FormControl(row.value, [Validators.required]);
        row.form = formControl;
        row.type = isNumber ? 'number' : 'text';
        controls[row.name] = formControl;
      }
      this.rows.push(row);
    }

    this.form = new FormGroup(controls);
  }

  public get debugValue() {
    return {
      formValid: this.form?.valid,
      rows: this.rows?.map((r) => ({
        name: r.name,
        value: r.value,
        editable: r.editable,
        type: r.type,
      })),
    };
  }

  private getSize(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getString = (numeric: boolean, length: number): string => {
    const allCapsAlpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const allLowerAlpha = [...'abcdefghijklmnopqrstuvwxyz'];
    const allUniqueChars = [...'~!@#$%^&*()_+-=[]{}|;:\'",./<>?'];
    const allNumbers = [...'0123456789'];

    /*
    const base = [
      ...allCapsAlpha,
      ...allNumbers,
      ...allLowerAlpha,
      ...allUniqueChars,
    ];
    */
    let base;
    if (numeric) {
      base = [...allNumbers];
    } else {
      base = [...allCapsAlpha, ...allNumbers];
    }

    const generator = (base, len) => {
      return [...Array(len)]
        .map((i) => base[(Math.random() * base.length) | 0])
        .join('');
    };
    return generator(base, length);
  };
}
