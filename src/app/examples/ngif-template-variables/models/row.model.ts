export interface Row {
  name: string;
  editable: boolean;
  type?: 'text' | 'number';
  value: any;
}
