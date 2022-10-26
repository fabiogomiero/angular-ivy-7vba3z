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
  {
    link: ['../', 'ng-if-template-vars'],
    name: 'Esempio di ngIf template',
    title: 'Esempio di ngIf con template e variabili',
    path: 'ng-if-template-vars',
    loadChildren: () =>
      import('./ngif-template-variables/ngif-template-variables.module').then(
        (m) => m.NgifTemplateVariablesModule
      ),
  },
  {
    link: ['../', 'reactive-form-tests'],
    name: "Un po' di test con reactive form",
    title: 'Una collezione di test con reactive-form',
    path: 'reactive-form-tests',
    loadChildren: () =>
      import('./reactive-form-test/reactive-form-test.module').then(
        (m) => m.ReactiveFormTestModule
      ),
  },
];
