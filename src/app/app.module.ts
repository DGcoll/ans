import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NutritionAnalysisComponent } from './components/nutrition-analysis/nutrition-analysis.component';
import { AnalysisResultComponent } from './components/nutrition-analysis/analysis-result/analysis-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionAnalysisComponent,
    AnalysisResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
