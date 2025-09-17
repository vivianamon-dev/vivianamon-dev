import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LluviaComponent } from './lluvia.component';

describe('LluviaComponent', () => {
  let component: LluviaComponent;
  let fixture: ComponentFixture<LluviaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LluviaComponent]
    });
    fixture = TestBed.createComponent(LluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
