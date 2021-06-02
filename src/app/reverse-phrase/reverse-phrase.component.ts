import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-phrase',
  templateUrl: './reverse-phrase.component.html',
  styleUrls: ['./reverse-phrase.component.sass'],
})
export class ReversePhraseComponent implements OnInit {
  text = ''
  reversedText = '';

  constructor() {}

  ngOnInit(): void {}
  onClickReverse() {
    this.reversedText = this.text.split('').reverse().join('');
  }

  onInputText(e: any) {
    if (e) this.text = e.target.value;
  }
}
