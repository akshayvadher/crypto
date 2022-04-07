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
  BASE_64 = 'BASE_64',
  MD5 = 'MD5',
  BCRYPT = 'BCRYPT',
  SHA1 = 'SHA1',
  SHA256 = 'SHA256',
  SHA512 = 'SHA512',
  SHA3 = 'SHA3',
}
