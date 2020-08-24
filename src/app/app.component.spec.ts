import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HeaderModule, BrowserAnimationsModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Should show alert about privacy', () => {
    const privacyBlock = document.getElementsByClassName('.privacy-block');
    expect(privacyBlock).toBeTruthy();
  });

  it('Should show header', () => {
    const header = nativeElement.querySelector('app-header');
    expect(header).toBeTruthy();
  });
});
