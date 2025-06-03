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
    standalone: false
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

  decode(content: string, password: string, algo: string): string {
    // because this variable is scoped in other component
    const decodeBase64 = (content: string) => {
      const parsedWordArray = enc.Base64.parse(content);
      const parsedStr = parsedWordArray.toString(enc.Utf8);
      return parsedStr;
    };

    const jwtSplitted = content.split('.');
    if (jwtSplitted.length === 3) {
      const head = decodeBase64(jwtSplitted[0]);
      const headPretty = JSON.stringify(JSON.parse(head),null,2);
      const body = decodeBase64(jwtSplitted[1]);
      const bodyPretty = JSON.stringify(JSON.parse(body),null,2);
      const signature = jwtSplitted[2];
      return `${headPretty}\n${bodyPretty}\n${signature}`;
    }
    const parsedStr = decodeBase64(content);
    return parsedStr;
  }
}
