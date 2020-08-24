import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonFormComponent } from './common-form.component';

describe('CommonFormComponent', () => {
  let component: CommonFormComponent;
  let fixture: ComponentFixture<CommonFormComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
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

  it('Should by default select file selection', () => {
    const fileRadioOption = nativeElement.querySelector(
      '#encrypt-input-file'
    ) as HTMLInputElement;
    expect(fileRadioOption.checked).toBeTrue();
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
