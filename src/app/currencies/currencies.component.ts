import { Component, OnInit, Injectable } from '@angular/core';
import { CurrenciesService } from './currencies.service';
import {ICurrencies} from './currencies.interface';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: ICurrencies = [
    { name: 'eur', sign: '€', value: '' },
    { name: 'usd', sign: '$', value: '' },
    { name: 'btc', sign: 'Btc', value: '' },
    { name: 'eth', sign: 'Eth', value: '' },
    { name: 'ltc', sign: 'Ltc', value: '' },
    { name: 'iota', sign: 'Iota', value: '' }
  ];

  constructor(private currenciesService: CurrenciesService) { }

  onClick(value: number, name: string): void {

    this.currencies = this.currenciesService.getCurrencies();
    // this.currenciesService.getCurrencies()
    //   .subscribe((data: Currencies) => this.currencies = data);

      console.log('clicked ' + value + ' ' + name);
  }

  ngOnInit() {

    console.log(' initializing currencies component');

  }

}
