import { Component, OnInit } from '@angular/core';

// services
import { BookManagerService } from "./book-manager.service";

// PopUp Bootstrap
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss']
})
export class BookManagerComponent implements OnInit {

  // #region declare variables
  bookIdNumber: any;
  bookData: any;
  listBook : any = [];
  sortOrder: any;
  title = 'appBootstrap';
  closeResult: any;

  // Form Var Eddit
  edditBook = {
      id : " ",
      title : " ",
      author : " ",
      published: " ",
      description: " "
  }

  constructor(
    public bookManagerService: BookManagerService,
    public  modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  
    // #region Add Book
    addBook(bookId: any) {
      let ee = this.listBook.find((e: any) => e.olid === bookId);
      console.log(bookId);
      if(ee == undefined){
        this.getBookId(bookId);
      }else if(ee.olid == bookId ){
        alert("the book added already ");
      }if(bookId == undefined){
        alert("set ID Book OLID");
      }
    }
    //#endregion


    // #region API ID Number Book
    getBookId(bookId: any) {
      this.bookManagerService.getBookId(bookId).subscribe((result : any) => {
          Object.keys(result).forEach( key =>{
            let keyIdBook = {
              orderAdded: this.listBook.length,
              olid : bookId,
              value: result[key].details,
            };
            this.listBook.push(keyIdBook);
            console.log(this.listBook);
        });

      });
    }
    //#endregion

    onChangeSort(typeSort: any) {

        this.sorBooks(typeSort);

    }

    sorBooks(typeSort: any = "add"){
      if(typeSort == "add"){
        this.listBook.sort((a: any, b:any) => {
          return a.orderAdded - b.orderAdded;
        });
      }else if(typeSort == "title"){
        this.listBook.sort((a: any, b:any) =>{
          let nameA = a.value.title.toUpperCase();
          let nameB = b.value.title.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    }
    
    open(content:any, book: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      
      this.edditBook.id = book.olid;
      this.edditBook.title = book.value.title;
      this.edditBook.published = book.value.publish_date;
      this.edditBook.author = book.value.by_statement;
      this.edditBook.description = book.value.subtitle;
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
    
    edditBookNew(edditBook: any){
      let ee = this.listBook.find((e: any) => e.olid === this. edditBook.id);
      ee.value.title = edditBook.title;
      ee.value.publish_date = edditBook.published;
      ee.value.by_statement = edditBook.author;
      ee.value.subtitle= edditBook.description;
    }
}



