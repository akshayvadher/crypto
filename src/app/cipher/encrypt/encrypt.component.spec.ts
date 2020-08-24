import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@crypto/shared/shared.module';
import { EncryptComponent } from './encrypt.component';

describe('EncryptComponent', () => {
  let component: EncryptComponent;
  let fixture: ComponentFixture<EncryptComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EncryptComponent],
      imports: [FormsModule, ReactiveFormsModule, SharedModule],
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

  it('Should show the form', () => {
    const form = nativeElement.querySelector('app-common-form');
    expect(form).toBeTruthy();
  });
});
