import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderandfooterComponent } from './components/headerandfooter/headerandfooter.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { TextsComponent } from './pages/texts/texts.component';

const routes: Routes = [
  {path: 'text', component: TextsComponent},
  {path: 'headerandfooter', component: HeaderandfooterComponent},
  {path: 'secondaryheader', component: SecondaryHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
