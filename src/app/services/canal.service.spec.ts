import { TestBed } from '@angular/core/testing';

import { CanalService } from './canal.service';

describe('CanalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanalService = TestBed.get(CanalService);
    expect(service).toBeTruthy();
  });
});
