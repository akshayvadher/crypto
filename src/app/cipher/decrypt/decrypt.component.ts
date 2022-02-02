import { Component, OnInit } from '@angular/core';
import {
  Algorithm,
  InputConfiguration
} from '@crypto/shared/common-form/input-configuration';
import { AES, enc } from 'crypto-js';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss'],
})
export class DecryptComponent implements OnInit {
  inputConfiguration: InputConfiguration;

  constructor() {
    this.inputConfiguration = {
      downloadFileButtonClasses: ['fas', 'fa-unlock'],
      downloadFilePostfix: 'decrypted',
      downloadFileButtonText: 'Download decrypted file',
      revealHereClasses: ['fas', 'fa-unlock'],
      revealHereText: 'Reveal decrypted text here',
      processErrorMessage:
        'Could not decrypt.Multliple possibilites, file is not encrypted, encrypted with different algorith, file is corrupted, file is blank.',
      supportedAlgorithms: [Algorithm.AES],
      requiredPassword: true
    };
  }

  ngOnInit(): void {}

  decrypt(content: string, password: string, algo: string): string {
    const bytes = AES.decrypt(content, password);
    return bytes.toString(enc.Utf8);
  }
}
