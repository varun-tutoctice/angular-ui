import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationTestsComponent } from './automation-tests.component';

describe('AutomationTestsComponent', () => {
  let component: AutomationTestsComponent;
  let fixture: ComponentFixture<AutomationTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomationTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
