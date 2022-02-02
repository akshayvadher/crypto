import { Component, OnInit } from '@angular/core';
import { AES } from 'crypto-js';
import { Algorithm, InputConfiguration } from '@crypto/shared/common-form/input-configuration';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss'],
})
export class EncryptComponent implements OnInit {
  inputConfiguration: InputConfiguration;

  constructor() {
    this.inputConfiguration = {
      downloadFileButtonClasses: ['fas', 'fa-lock'],
      downloadFilePostfix: 'encrypted',
      downloadFileButtonText: 'Download encrypted file',
      revealHereClasses: ['fas', 'fa-lock'],
      revealHereText: 'Reveal encrypted text here',
      supportedAlgorithms: [Algorithm.AES],
      requiredPassword: true
    };
  }

  ngOnInit(): void {}

  encrypt(content: string, password: string, algo: string): string {
    return AES.encrypt(content, password).toString();
  }
}
