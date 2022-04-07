import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonFormComponent } from './common-form.component';
import { Algorithm } from './input-configuration';

describe('CommonFormComponent', () => {
  let component: CommonFormComponent;
  let fixture: ComponentFixture<CommonFormComponent>;
  let nativeElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFormComponent);
    component = fixture.componentInstance;
    component.inputConfiguration = {
      downloadFileButtonClasses: ['fas', 'another-class'],
      downloadFilePostfix: 'postfix',
      downloadFileButtonText: 'download text',
      revealHereClasses: ['fas', 'another-class'],
      revealHereText: 'reveal text',
      requiredPassword: true,
      supportedAlgorithms: [Algorithm.AES],
    };
    component.process = (content: string, password: string, algo: string) => {
      return 'fake';
    };
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have file or text selection radio', () => {
    const radio = nativeElement.querySelectorAll('input[type=radio]');
    expect(radio.length).toBe(2);
  });

  it('Should by default select text selection', () => {
    const textRadioOption = nativeElement.querySelector(
      '#encrypt-input-text'
    ) as HTMLInputElement;
    expect(textRadioOption.checked).toBeTrue();
  });

  it('Should have file input', () => {
    const fileInput = nativeElement.querySelector('input[type=file]');
    expect(fileInput).toBeTruthy();
  });

  it('Should have an algorithm selector', () => {
    const algoSelector = nativeElement.querySelector(
      '#algo'
    ) as HTMLSelectElement;
    expect(algoSelector).toBeTruthy();
    expect(algoSelector.value).toEqual('AES');
  });

  it('Shoud have password field', () => {
    const password = nativeElement.querySelector('input[type=password]');
    expect(password).toBeTruthy();
  });
});
