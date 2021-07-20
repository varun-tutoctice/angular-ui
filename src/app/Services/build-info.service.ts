import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BuildInfoService {

  serviceUrl = environment.serviceUrl;
  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get(`${this.serviceUrl}?filter[where][type]=BuildDeployment`)
  }
}
