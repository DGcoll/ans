// angular modules
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class BookManagerService {

    // #region constructor

    constructor(private http: HttpClient) {
    }

    // #endregion

    // #region Add Book

    getBookId(bookId: any) {
        const url = `https://openlibrary.org/api/books?bibkeys=OLID:${bookId}&jscmd=details&format=json`;
        return this.http.get<any>(url);
    }

    //#endregion

}
