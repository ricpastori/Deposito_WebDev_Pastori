import { TestBed } from '@angular/core/testing';

import { TasksRestService } from './tasks-rest-service';

describe('TasksRestService', () => {
  let service: TasksRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
