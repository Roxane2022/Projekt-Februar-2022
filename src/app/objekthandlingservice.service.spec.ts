import { TestBed } from '@angular/core/testing';

import { ObjekthandlingserviceService } from './objekthandlingservice.service';

describe('ObjekthandlingserviceService', () => {
  let service: ObjekthandlingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjekthandlingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
