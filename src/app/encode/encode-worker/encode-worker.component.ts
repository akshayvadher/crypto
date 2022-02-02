import { Component, OnInit } from '@angular/core';
import {
  Algorithm,
  InputConfiguration,
} from '@crypto/shared/common-form/input-configuration';
import { enc } from 'crypto-js';

@Component({
  selector: 'app-encode-worker',
  templateUrl: './encode-worker.component.html',
  styleUrls: ['./encode-worker.component.scss'],
})
export class EncodeWorkerComponent implements OnInit {
  inputConfiguration: InputConfiguration;

  constructor() {
    this.inputConfiguration = {
      downloadFileButtonClasses: ['fas', 'fa-lock'],
      downloadFilePostfix: 'encoded',
      downloadFileButtonText: 'Download encoded file',
      revealHereClasses: ['fas', 'fa-lock'],
      revealHereText: 'Reveal encoded text here',
      supportedAlgorithms: [Algorithm.BASE_64],
      requiredPassword: false,
    };
  }

  ngOnInit(): void {}

  encode(content: string, password: string, algo: string): string {
    const wordArray = enc.Utf8.parse(content);
    const base64 = enc.Base64.stringify(wordArray);
    return base64;
  }
}
