// angular modules
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class NutritionAnalysisService {

    // #region constructor

    constructor(private http: HttpClient) {
    }
     headers = new HttpHeaders({'Content-Type':'application/json', 'accept': '*/*'});
    // #endregion

    // #region Add Book

    getBookId(ingr: any) {
        const url = `https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92`;
        return this.http.post<any>(url, JSON.stringify({ingr : ingr}), {headers: this.headers});
    }
    //#endregion

}
