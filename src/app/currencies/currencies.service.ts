import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrenciesService {
    constructor(private http: HttpClient) { }

    currenciesUrl = 'assets/currencies.json';

    getCurrencies() {
        return this.http.get(this.currenciesUrl);
    }

}
