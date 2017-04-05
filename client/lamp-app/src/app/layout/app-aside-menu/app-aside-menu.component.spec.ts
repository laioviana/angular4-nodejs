import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAsideMenuComponent } from './app-aside-menu.component';

describe('AppAsideMenuComponent', () => {
  let component: AppAsideMenuComponent;
  let fixture: ComponentFixture<AppAsideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAsideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
