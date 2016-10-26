/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LokiService } from './loki.service';

describe('Service: Loki', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LokiService]
    });
  });

  it('should ...', inject([LokiService], (service: LokiService) => {
    expect(service).toBeTruthy();
  }));
});
