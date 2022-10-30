import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { DisconnectComponent } from './disconnect/disconnect.component';
import { LegalComponent } from './legal/legal.component';
import { ToysFactoryComponent } from './toys-factory/toys-factory.component';

const routes: Routes = [
  { path: 'toysFactory', component: ToysFactoryComponent, title: 'Toys Factory' },
  { path: 'delivery', component: DeliveryComponent, title: 'Delivery' },
  { path: 'legal', component: LegalComponent, title: 'Legal' },
  { path: 'disconnect', component: DisconnectComponent, title: 'Disconnect' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
