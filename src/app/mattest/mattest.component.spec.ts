import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattestComponent } from './mattest.component';

describe('MattestComponent', () => {
  let component: MattestComponent;
  let fixture: ComponentFixture<MattestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
