import { RouteExtended } from './app.model';

export const features: Array<RouteExtended> = [
  {
    name: 'Esempi',
    title: 'Vai alla sezione esempi',
    description: 'Una sezione dedicata a degli esempi su Angular',
    link: ['/examples'],
    path: 'examples',
    loadChildren: () =>
      import('./examples/examples.module').then((m) => m.ExamplesModule),
  },
];
