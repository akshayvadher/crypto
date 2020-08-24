import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThemeChangerComponent } from './theme-changer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

describe('ThemeChangerComponent', () => {
  let component: ThemeChangerComponent;
  let fixture: ComponentFixture<ThemeChangerComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeChangerComponent],
      imports: [BrowserAnimationsModule, BsDropdownModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a dropdown', () => {
    const dropdown: HTMLElement = nativeElement.querySelector('.theme-changer');
    expect(dropdown).toBeTruthy();

    dropdown.click();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const dropdownMenu = nativeElement.querySelector('.theme-changer-menu');
      expect(dropdownMenu).toBeTruthy();
      // TODO this integration test is not working
      // expect(dropdownMenu.classList).toBeTrue();

      // expect(dropdownMenu.childElementCount).toBeGreaterThan(0);
    });
  });

  xit('Should change theme', () => {
    const dropdown: HTMLElement = nativeElement.querySelector('.theme-changer');
    expect(dropdown).toBeTruthy();

    dropdown.click();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const dropdownMenu = nativeElement.querySelector('.theme-changer-menu');
      expect(dropdownMenu).toBeTruthy();
      // TODO this integration test is not working
      // expect(dropdownMenu.classList).toBeTrue();

      // expect(dropdownMenu.childElementCount).toBeGreaterThan(0);
    });
  });
});
