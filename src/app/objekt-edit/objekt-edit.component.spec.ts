import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektEditComponent } from './objekt-edit.component';

describe('ObjektEditComponent', () => {
  let component: ObjektEditComponent;
  let fixture: ComponentFixture<ObjektEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
