import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektListComponent } from './objekt-list.component';

describe('ObjektListComponent', () => {
  let component: ObjektListComponent;
  let fixture: ComponentFixture<ObjektListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
