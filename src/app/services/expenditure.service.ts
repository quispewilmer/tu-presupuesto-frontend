import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expenditure } from '../expenditure';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  private myAppUrl = "https://localhost:44309/";
  private myApiUrl = "api/expenditure/";
  constructor(private http:HttpClient) { }

  getListExpenditures(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteExpenditures(id:number) {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveExpenditure(expenditure:Expenditure[]):Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, expenditure[0], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  updateExpenditure(id:number, expenditure:Expenditure):Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, expenditure, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
}
