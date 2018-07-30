import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationOverviewComponent } from './registeration-overview.component';

describe('RegisterationOverviewComponent', () => {
  let component: RegisterationOverviewComponent;
  let fixture: ComponentFixture<RegisterationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterationOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
