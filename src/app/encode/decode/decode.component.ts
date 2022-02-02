import { Component, OnInit } from '@angular/core';
import {
  Algorithm,
  InputConfiguration,
} from '@crypto/shared/common-form/input-configuration';
import { enc } from 'crypto-js';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.scss'],
})
export class DecodeComponent implements OnInit {
  inputConfiguration: InputConfiguration;

  constructor() {
    this.inputConfiguration = {
      downloadFileButtonClasses: ['fas', 'fa-lock'],
      downloadFilePostfix: 'decoded',
      downloadFileButtonText: 'Download decoded file',
      revealHereClasses: ['fas', 'fa-lock'],
      revealHereText: 'Reveal decoded text here',
      supportedAlgorithms: [Algorithm.BASE_64],
      requiredPassword: false,
    };
  }

  ngOnInit(): void {}

  encode(content: string, password: string, algo: string): string {
    const parsedWordArray = enc.Base64.parse(content);
    const parsedStr = parsedWordArray.toString(enc.Utf8);
    return parsedStr;
  }
}
