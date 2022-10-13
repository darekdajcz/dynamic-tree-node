import { TestBed } from '@angular/core/testing';

import { ResponsiveTreeNodeService } from './responsive-tree-node.service';

describe('ResponsiveTreeNodeService', () => {
  let service: ResponsiveTreeNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveTreeNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
