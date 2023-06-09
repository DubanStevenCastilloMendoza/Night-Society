import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddingPageComponent } from './routes/ladding-page/ladding-page.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "/laddig-page"},
  {path: "ladding-page", component: LaddingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
