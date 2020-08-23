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

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss'],
})
export class DecryptComponent implements OnInit {
  form = this.formBuilder.group({
    inputSelection: [{ value: 'file', disabled: true }, [Validators.required]],
    fileInputName: ['', Validators.required],
    algo: [{ value: 'AES', disabled: true }],
    password: ['', [this.passwordValidator]],
  });

  file: File;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  async onSubmit(): Promise<any> {
    try {
      const content = await this.readFileAndDownload();
      const decryptedContent = this.decryptContent(content);
      if (decryptedContent) {
        this.downloadFile(decryptedContent);
      } else {
        this.error();
      }
    } catch (e) {
      this.error();
    }
  }
  error(): void {
    alert(
      'Could not decrypt.Multliple possibilites, file is not encrypted, encrypted with different algorith, file is corrupted, file is blank.'
    );
  }

  onFileChange($event: Event): void {
    const target = $event.target as HTMLInputElement;
    this.file = target.files[0];
    this.form.get('fileInputName').setValue(this.file ? this.file.name : '');
  }

  readFileAndDownload(): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const content = event.target.result.toString();
        resolve(content);
      };
      fileReader.onerror = () => reject();
      fileReader.readAsText(this.file);
    });
  }

  decryptContent(content: string): string {
    const bytes = AES.decrypt(content, this.form.get('password').value);
    return bytes.toString(enc.Utf8);
  }

  downloadFile(content: string): void {
    const blob = new Blob([content], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, `${this.file.name}-decrypted.txt`);
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const lengthPolicy = new PasswordPolicy({ length: { minLength: 6 } });
    const passwordValue = control.value;
    const isValid = lengthPolicy.check(passwordValue);
    return isValid ? null : { notValid: true };
  }
}
