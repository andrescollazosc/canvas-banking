import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './pages/headers/headers.component';
import { TextsComponent } from './pages/texts/texts.component';

const routes: Routes = [
  {path: 'text', component: TextsComponent},
  {path: 'headers', component: HeadersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }