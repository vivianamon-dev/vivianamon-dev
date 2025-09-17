import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocheLluviaComponent } from './noche-lluvia.component';

describe('NocheLluviaComponent', () => {
  let component: NocheLluviaComponent;
  let fixture: ComponentFixture<NocheLluviaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NocheLluviaComponent]
    });
    fixture = TestBed.createComponent(NocheLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
