import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrencies } from './currencies.interface';

@Injectable({
    providedIn: 'root'
})
export class CurrenciesService {
    constructor(private http: HttpClient) { }

    currenciesUrl = 'assets/currencies.json';

    getCurrencies(): ICurrencies {

        return  [
            { "name": "eur", "sign": "€", "value": "1" },
            { "name": "usd", "sign": "$", "value": "2" },
            { "name": "btc", "sign": "Btc", "value": "3" },
            { "name": "eth", "sign": "Eth", "value": "4" },
            { "name": "ltc", "sign": "Ltc", "value": "5" },
            { "name": "iota", "sign": "Iota", "value": "6" }
          ];

        // return this.http.get(this.currenciesUrl);
    }

}
