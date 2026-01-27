import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSearch } from './tag-search';

describe('TagSearch', () => {
  let component: TagSearch;
  let fixture: ComponentFixture<TagSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
