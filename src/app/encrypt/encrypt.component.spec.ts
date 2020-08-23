import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncryptComponent } from './encrypt.component';

describe('EncryptComponent', () => {
  let component: EncryptComponent;
  let fixture: ComponentFixture<EncryptComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EncryptComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptComponent);
    component = fixture.componentInstance;
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
