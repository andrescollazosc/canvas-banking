import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextsComponent } from './pages/texts/texts.component';

const routes: Routes = [{
  path: 'text', component: TextsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
