import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResComponent } from './add-res-Med-amine-hamrouni/add-res.component';
import { UpdateResComponent } from './update-res-med-amine-hamrouni/update-res.component';
import { ListResComponent } from './list-res-med-amine-hamrouni/list-res.component';
import { HomeComponent } from './home-med-amine-hamrouni/home.component';
import { DetailesResComponent } from './detailes-res-Med-amine-hamrouni/detailes-res.component';
import { DeleteComponent } from './delete-Med-Amine-Hamrouni/delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ListResComponent },
  { path: 'add-residence', component: AddResComponent },
  { path: 'residence-details/:id', component: DetailesResComponent },
  { path: 'update-residence/:id', component: UpdateResComponent },
  { path: 'delete-residence/:id', component: DeleteComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



