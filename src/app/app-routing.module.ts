import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagerComponent } from './components/book-manager/book-manager.component';

const routes: Routes =  ([
  {
    path: "",
    component: BookManagerComponent,
    children: [],
  }
]) as any;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
