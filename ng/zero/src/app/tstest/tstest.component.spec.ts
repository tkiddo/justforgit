import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TstestComponent } from './tstest.component';

describe('TstestComponent', () => {
  let component: TstestComponent;
  let fixture: ComponentFixture<TstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
