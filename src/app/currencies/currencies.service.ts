import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICurrencies } from './currencies.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CurrenciesService {
    constructor(private http: HttpClient) { }

    currenciesUrl = 'assets/currencies.json';

    getCurrencies(): Observable<ICurrencies> {

        // return  [
        //     { "name": "eur", "sign": "€", "value": "1" },
        //     { "name": "usd", "sign": "$", "value": "2" },
        //     { "name": "btc", "sign": "Btc", "value": "3" },
        //     { "name": "eth", "sign": "Eth", "value": "4" },
        //     { "name": "ltc", "sign": "Ltc", "value": "5" },
        //     { "name": "iota", "sign": "Iota", "value": "6" }
        //   ];

        return this.http.get<ICurrencies>(this.currenciesUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = '${err.error.message}';
        } else {
            errorMessage = '${err.status} ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}
