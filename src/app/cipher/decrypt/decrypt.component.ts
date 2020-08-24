import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AES, enc } from 'crypto-js';
import { PasswordPolicy } from 'password-sheriff';
import { saveAs } from 'file-saver';
import { InputConfiguration } from '@crypto/shared/common-form/input-configuration';

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
    };
  }

  ngOnInit(): void {}

  // async onSubmit(): Promise<any> {
  //   try {
  //     const content = await this.readFileAndDownload();
  //     const decryptedContent = this.decryptContent(content);
  //     if (decryptedContent) {
  //       this.downloadFile(decryptedContent);
  //     } else {
  //       this.error();
  //     }
  //   } catch (e) {
  //     this.error();
  //   }
  // }
  // error(): void {
  //   alert(
  //
  //   );
  // }
  //
  decrypt(content: string, password: string, algo: string): string {
    const bytes = AES.decrypt(content, password);
    return bytes.toString(enc.Utf8);
  }
}
