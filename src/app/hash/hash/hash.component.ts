import { Component, OnInit } from '@angular/core';
import {
  Algorithm,
  InputConfiguration,
} from '@crypto/shared/common-form/input-configuration';
import { MD5, SHA1, SHA256, SHA512, SHA3 } from 'crypto-js';

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
      supportedAlgorithms: [
        Algorithm.MD5,
        Algorithm.SHA1,
        Algorithm.SHA256,
        Algorithm.SHA512,
        Algorithm.SHA3,
      ],
      requiredPassword: false,
    };
  }

  ngOnInit(): void {}

  hash(content: string, password: string, algo: string): string {
    if (algo == Algorithm.MD5) {
      return MD5(content).toString();
    }
    if (algo == Algorithm.SHA1) {
      return SHA1(content).toString();
    }
    if (algo == Algorithm.SHA256) {
      return SHA256(content).toString();
    }
    if (algo == Algorithm.SHA512) {
      return SHA512(content).toString();
    }
    if (algo == Algorithm.SHA3) {
      return SHA3(content).toString();
    }
    return 'not supported';
  }
}
