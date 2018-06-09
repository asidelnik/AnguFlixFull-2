import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCountComponent } from './private-count.component';

describe('PrivateCountComponent', () => {
  let component: PrivateCountComponent;
  let fixture: ComponentFixture<PrivateCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
