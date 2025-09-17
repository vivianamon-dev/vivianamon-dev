import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestDashboardVitaEduComponent } from './my-test-dashboard-vita-edu.component';

describe('MyTestDashboardVitaEduComponent', () => {
  let component: MyTestDashboardVitaEduComponent;
  let fixture: ComponentFixture<MyTestDashboardVitaEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestDashboardVitaEduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestDashboardVitaEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
