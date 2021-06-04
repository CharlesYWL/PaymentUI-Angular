import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}
  centToDollar(cents: string) {
    let i = parseInt(cents);
    return '$' + i / 100 + '.' + String(i % 100).padEnd(2, '0');
  }
  objectKeysLen(obj: any) {
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length;
    } else return 0;
  }
}
