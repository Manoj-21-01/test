import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { HomeComponent } from 'src/home/home.component';
import { ManagetaskComponent } from 'src/managetask/managetask.component';
import { ViewComponent } from 'src/view/view.component';

const routes: Routes = [
  {
    path: "addtask",
    component: ManagetaskComponent
  },
  {
    path: "updatetask/:id",
    component: ManagetaskComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "view/:id",
    component: ViewComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
