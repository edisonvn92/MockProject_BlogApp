import { TestBed } from '@angular/core/testing';

import { ArticleModifyService } from './article-modify.service';

describe('ArticleModifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleModifyService = TestBed.get(ArticleModifyService);
    expect(service).toBeTruthy();
  });
});
