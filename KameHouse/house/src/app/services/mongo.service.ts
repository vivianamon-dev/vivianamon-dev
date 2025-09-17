import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  private url="http://10.0.204.209:8080/api";

  constructor(private http: HttpClient) { }

  public getElementos(): Observable<any> {
    return this.http.get<any>(this.url+"/elemento");
  }
  public updateElemento(id:any, body: any){
    return this.http.put(this.url+"/elemento/"+id,body);
  }
  public getDatos():Observable<any>{
    return this.http.get<any>(this.url+"/datos");
  }

}
