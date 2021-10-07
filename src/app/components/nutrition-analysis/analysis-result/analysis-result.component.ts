import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analysis-result',
  templateUrl: './analysis-result.component.html',
  styleUrls: ['./analysis-result.component.scss']
})
export class AnalysisResultComponent implements OnInit {

  @Input() analysisResult: any;
  constructor() { }

  ngOnInit(): void {
  }

}
