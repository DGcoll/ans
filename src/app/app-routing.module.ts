import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionAnalysisComponent } from './components/nutrition-analysis/nutrition-analysis.component';

const routes: Routes =  ([
  {
    path: "",
    component: NutritionAnalysisComponent,
    children: [],
  }
]) as any;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
