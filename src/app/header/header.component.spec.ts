import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, ThemeChangerComponent],
      imports: [CommonModule, RouterTestingModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show branding', () => {
    const branding = nativeElement.querySelector('.navbar-brand');
    expect(branding).toBeTruthy();
  });

  it('Should have theme changer', () => {
    const themeChanger = nativeElement.querySelector('app-theme-changer');
    expect(themeChanger).toBeTruthy();
  });
});
