import { Routes } from '@angular/router';
import { CardComponent } from './AngularmMaterial/card/card/card.component';
import { FormComponent } from './AngularmMaterial/Form/form/form.component';
import { TableComponent } from './AngularmMaterial/table/table/table.component';
import { ProjectComponent } from './AngularmMaterial/project/project/project.component';
import { PrimeFormComponent } from './primeNG/prime-form/prime-form/prime-form.component';
import { PrimeNGCardComponent } from './primeNG/prime-card/primeNGCard/prime-ngcard/prime-ngcard.component';
import { PrimeTableComponent } from './primeNG/prime-table/prime-table/prime-table.component';
import { PrimeProjectComponent } from './primeNG/primeProject/prime-project/prime-project.component';
import { TableProjectComponent } from './AG-Gird/table-project/table-project/table-project.component';

export const routes: Routes = [
  // File Angular Material
  { path: 'card', component: CardComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'project', component: ProjectComponent },

  // File primeNG
  { path: 'primeForm', component: PrimeFormComponent },
  { path: 'primeCard', component: PrimeNGCardComponent },
  { path: 'primeTable', component: PrimeTableComponent },
  { path: 'primeProject', component: PrimeProjectComponent },

  // File AG Gird
  { path: 'Project', component: TableProjectComponent },
];
