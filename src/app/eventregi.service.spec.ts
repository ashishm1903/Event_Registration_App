import { TestBed } from '@angular/core/testing';

import { EventregiService } from './eventregi.service';

describe('EventregiService', () => {
  let service: EventregiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventregiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
