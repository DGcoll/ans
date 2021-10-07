import { Component, OnInit } from '@angular/core';

// services
import { NutritionAnalysisService } from "./nutrition-analysis.service";

// PopUp Bootstrap
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nutrition-analysis',
  templateUrl: './nutrition-analysis.component.html',
  styleUrls: ['./nutrition-analysis.component.scss']
})
export class NutritionAnalysisComponent implements OnInit {

  // #region declare variables
  analysisData: any;
  closeResult: any;
  analysisResult: any = "ahmed";
  constructor(
    public nutritionAnalysisService: NutritionAnalysisService,
    public  modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  
    // #region Add Book
    addBook(analysis: any) {

      this.getBookId(analysis.split('\n'));
    }
    //#endregion


    // #region API ID Number Book
    getBookId(analysis: any) {
      this.nutritionAnalysisService.getBookId(analysis).subscribe((result)=> {
          this.analysisResult = result;  
        console.log(result.ingredients[0].parsed[0].foodMatch);
        });
    }

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

 }