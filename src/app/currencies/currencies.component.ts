import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  onClick(value : number, name : string) : void {
    console.log("clicked " + value + " " + name);
  }

  ngOnInit() {

    console.log(" initializing currencies component");

  }

}
