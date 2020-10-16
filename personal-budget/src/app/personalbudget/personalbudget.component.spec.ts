import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbudgetComponent } from './personalbudget.component';

describe('PersonalbudgetComponent', () => {
  let component: PersonalbudgetComponent;
  let fixture: ComponentFixture<PersonalbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalbudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
