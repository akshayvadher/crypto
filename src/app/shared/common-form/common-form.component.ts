import { Component, OnInit, Input } from '@angular/core';
import {
  Validators,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { PasswordPolicy, charsets } from 'password-sheriff';

import { saveAs } from 'file-saver';
import { InputConfiguration } from './input-configuration';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss'],
})
export class CommonFormComponent implements OnInit {
  @Input() inputConfiguration: InputConfiguration;
  @Input() process: (content: string, password: string, algo: string) => string;

  form: FormGroup;
  file: File;
  revealedContent: string;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      inputSelection: [
        { value: 'file', disabled: true },
        [Validators.required],
      ],
      fileInputName: ['', Validators.required],
      algo: [{ value: 'AES', disabled: true }],
      password: ['', [this.passwordValidator]],
    });
  }

  ngOnInit(): void {}

  onDownloadFileClick(): void {
    this.readFileAndDownload();
  }
  onRevealHereClick(): void {
    this.readFileAndReveal();
  }

  async readFileAndDownload(): Promise<any> {
    try {
      const content = await this.readFile();
      const processedContent = this.process(
        content,
        this.form.get('password').value,
        this.form.get('algo').value
      );
      if (processedContent) {
        this.downloadFile(processedContent);
      } else {
        this.showError();
      }
    } catch (e) {
      this.form.get('fileInputName').reset();
      this.showError();
    }
  }

  async readFileAndReveal(): Promise<any> {
    try {
      const content = await this.readFile();
      const processedContent = this.process(
        content,
        this.form.get('password').value,
        this.form.get('algo').value
      );
      this.revealedContent = processedContent;
      if (processedContent) {
      } else {
        this.showError();
      }
    } catch (e) {
      this.form.get('fileInputName').reset();
      this.showError();
    }
  }

  showError(): void {
    alert(this.inputConfiguration.processErrorMessage || 'could not process');
  }

  onFileChange($event: Event): void {
    const target = $event.target as HTMLInputElement;
    this.file = target.files[0];
    this.form.get('fileInputName').setValue(this.file ? this.file.name : '');
  }

  readFile(): Promise<string> {
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

  downloadFile(content: string): void {
    const blob = new Blob([content], {
      type: 'text/plain;charset=utf-8',
    });
    const fileNameParts = this.file.name.split('.');
    const extension = fileNameParts[fileNameParts.length - 1];
    const fileNameWithoutExtension = fileNameParts.slice(0, -1).join('.');
    saveAs(
      blob,
      `${fileNameWithoutExtension}-${this.inputConfiguration.downloadFilePostfix}.${extension}`
    );
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const lengthPolicy = new PasswordPolicy({
      length: { minLength: 8 },
      contains: {
        expressions: [
          charsets.upperCase,
          charsets.lowerCase,
          charsets.numbers,
          charsets.specialCharacters,
        ],
      },
    });
    const passwordValue = control.value;
    const isValid = lengthPolicy.check(passwordValue);
    return isValid ? null : { notValid: true };
  }
}
