import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektKategorieComponent } from './objekt-kategorie.component';

describe('ObjektKategorieComponent', () => {
  let component: ObjektKategorieComponent;
  let fixture: ComponentFixture<ObjektKategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektKategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
