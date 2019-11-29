import { TestBed } from '@angular/core/testing';

import { ArticleInteractService } from './article-interact.service';

describe('ArticleInteractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleInteractService = TestBed.get(ArticleInteractService);
    expect(service).toBeTruthy();
  });
});
