import { Component, OnInit, Injectable } from '@angular/core';
import { CurrenciesService } from './currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies = [
    { name: 'eur', sign: '€', value: '' },
    { name: 'usd', sign: '$', value: '' },
    { name: 'btc', sign: 'Btc', value: '' },
    { name: 'eth', sign: 'Eth', value: '' },
    { name: 'ltc', sign: 'Ltc', value: '' },
    { name: 'iota', sign: 'Iota', value: '' }
  ];

  @Injectable()
  constructor(private currenciesServce: CurrenciesService) { }

  onClick(value: number, name: string): void {
   
    this.currenciesServce.getCurrencies()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });

    console.log('clicked ' + value + ' ' + name);
  }

  ngOnInit() {

    console.log(' initializing currencies component');

  }

}
