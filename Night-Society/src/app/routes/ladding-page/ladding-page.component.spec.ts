import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddingPageComponent } from './ladding-page.component';

describe('LaddingPageComponent', () => {
  let component: LaddingPageComponent;
  let fixture: ComponentFixture<LaddingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaddingPageComponent]
    });
    fixture = TestBed.createComponent(LaddingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
