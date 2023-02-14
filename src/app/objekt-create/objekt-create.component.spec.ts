import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektCreateComponent } from './objekt-create.component';

describe('ObjektCreateComponent', () => {
  let component: ObjektCreateComponent;
  let fixture: ComponentFixture<ObjektCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
