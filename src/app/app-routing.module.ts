import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddEditComponent } from './users/add-edit.component';
import { LayoutComponent } from './users/layout.component';
import { ListComponent } from './users/list.component';



const routes: Routes = [

    {
      path: '', component: LayoutComponent,
      children: [
          { path: '', component: ListComponent },
          { path: 'add', component: AddEditComponent },
          { path: 'edit/:id', component: AddEditComponent }
      ]
  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
