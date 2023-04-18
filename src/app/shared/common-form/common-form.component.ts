import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Validators,
  AbstractControl,
  ValidationErrors,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { PasswordPolicy, charsets } from 'password-sheriff';

import { saveAs } from 'file-saver';
import { InputConfiguration } from './input-configuration';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss'],
})
export class CommonFormComponent implements OnInit, OnChanges {
  @Input() inputConfiguration: InputConfiguration;
  @Input() process: (content: string, password: string, algo: string) => string;

  form: UntypedFormGroup;
  file: File;
  revealedContent: string;

  selectedInput: 'file' | 'text' = 'text';

  constructor(formBuilder: UntypedFormBuilder) {
    this.form = formBuilder.group({
      inputSelection: [
        { value: this.selectedInput, disabled: false },
        [Validators.required],
      ],
      fileInputName: ['', Validators.required],
      algo: [],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.setSupportedAlgoIfProvided();
  }

  private setSupportedAlgoIfProvided() {
    if (this.inputConfiguration.supportedAlgorithms) {
      this.form
        .get('algo')
        .setValue(this.inputConfiguration.supportedAlgorithms[0]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.inputConfiguration.requiredPassword) {
        this.form
          .get('password')
          .addValidators(this.passwordValidator.bind(this));
      }
    }
  }
  fileSelected(): void {
    this.selectedInput = 'file';
  }

  textSelected(): void {
    this.selectedInput = 'text';
  }

  onDownloadFileClick(): void {
    if (this.selectedInput === 'file') {
      this.readFileAndDownload();
    } else {
      const content = this.form.get('fileInputName').value;
      this.processAndDownload(content);
    }
  }
  onRevealHereClick(): void {
    if (this.selectedInput === 'file') {
      this.readFileAndDownload();
    } else {
      const content = this.form.get('fileInputName').value;
      this.processAndReveal(content);
    }
  }

  async readFileAndDownload(): Promise<any> {
    try {
      const content = await this.readFile();
      this.processAndDownload(content);
    } catch (e) {
      this.form.get('fileInputName').reset();
      this.showError();
    }
  }

  private processAndDownload(content: string) {
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
  }

  async readFileAndReveal(): Promise<any> {
    try {
      const content = await this.readFile();
      this.processAndReveal(content);
    } catch (e) {
      this.form.get('fileInputName').reset();
      this.showError();
    }
  }

  private processAndReveal(content: string) {
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
