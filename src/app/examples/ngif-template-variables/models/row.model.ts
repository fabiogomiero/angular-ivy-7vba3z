import { FormControl } from '@angular/forms';

export interface Row {
  name: string;
  editable: boolean;
  form?: FormControl;
  type?: 'text' | 'number';
  value: any;
}
