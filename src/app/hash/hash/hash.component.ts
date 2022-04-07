import { Component, OnInit } from '@angular/core';
import {
  Algorithm,
  InputConfiguration,
} from '@crypto/shared/common-form/input-configuration';
import { MD5, enc } from 'crypto-js';

@Component({
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss'],
})
export class HashComponent implements OnInit {
  inputConfiguration: InputConfiguration;

  constructor() {
    this.inputConfiguration = {
      downloadFileButtonClasses: ['fas', 'fa-lock'],
      downloadFilePostfix: 'hash',
      downloadFileButtonText: 'Download hashed file',
      revealHereClasses: ['fas', 'fa-lock'],
      revealHereText: 'Reveal hashed text here',
      supportedAlgorithms: [Algorithm.MD5, Algorithm.BCRYPT],
      requiredPassword: false,
    };
  }

  ngOnInit(): void {}

  hash(content: string, password: string, algo: string): string {

    console.log({content, password, algo})
    if (algo == Algorithm.MD5) {
      return MD5(content).toString();
    }
    return "base64";
  }
}
