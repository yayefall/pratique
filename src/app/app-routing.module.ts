import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBienComponent} from './bien/list-bien/list-bien.component';
import {AddBienComponent} from './bien/add-bien/add-bien.component';
import {DetailBienComponent} from './bien/detail-bien/detail-bien.component';
import {ReservationsBienComponent} from './bien/reservations-bien/reservations-bien.component';
import {DetailReservationComponent} from './bien/reservations-bien/detail-reservation/detail-reservation.component';
import {EditReservationComponent} from './bien/reservations-bien/edit-reservation/edit-reservation.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {ErrorsComponent} from './errors/errors.component';
import {BienResolverService} from './bien-resolver.service';
import {ConexionComponent} from './conexion/conexion.component';

const appRoute: Routes = [
  {path: '', redirectTo: '/bien', pathMatch: 'full' },
  {path: 'bien', component: ListBienComponent },
  {path: 'bien/add', component: AddBienComponent },
  {path: 'bien/:id', component: DetailBienComponent , resolve: {bien: BienResolverService}},
  {path: 'login', component: ConexionComponent},
  {
    path: 'reservations',
    canActivateChild: [AuthGuardService],
   component: ReservationsBienComponent,
    children: [
           {path: ':id', component: DetailReservationComponent},
           {path: ':id/edit', component: EditReservationComponent},
       ]
   },
  // can Activete guard

  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorsComponent, data: {message: 'page introuvable!'}},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
