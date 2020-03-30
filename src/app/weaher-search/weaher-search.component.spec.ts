import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaherSearchComponent } from './weaher-search.component';

describe('WeaherSearchComponent', () => {
  let component: WeaherSearchComponent;
  let fixture: ComponentFixture<WeaherSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaherSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
