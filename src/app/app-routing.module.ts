import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';


const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'nav', component: NavComponent },
  { path: 'product', component: FeaturesComponent},
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
