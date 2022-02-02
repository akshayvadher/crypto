export class InputConfiguration {
  downloadFileButtonText: string;
  downloadFileButtonClasses: string[];
  revealHereText: string;
  revealHereClasses: string[];
  downloadFilePostfix: string;
  processErrorMessage?: string;
  supportedAlgorithms: Algorithm[];
  requiredPassword: boolean;
}

export enum Algorithm {
  AES = 'AES',
  BASE_64 = 'BASE_64'
}
