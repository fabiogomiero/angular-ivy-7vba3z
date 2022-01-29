import { RouteExtended } from '../app.model';

export const navigation: Array<RouteExtended> = [
  {
    link: ['../', 'form-array'],
    name: 'Esempio di form-array',
    title: 'Esempio di form con form array',
    path: 'form-array',
    loadChildren: () =>
      import('./reactive-form-array/reactive-form-array.module').then(
        (m) => m.ReactiveFormArrayModule
      ),
  },
];
