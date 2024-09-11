import { Category } from './category';

describe('Category', () => {
  it('Should be able to craete a category', () => {
    const category = new Category({
      name: 'tecido',
    });

    expect(category).toBeTruthy();
  });

  it('It should not be possible to create a category with 1 letter', () => {
    expect(
      () =>
        new Category({
          name: 'a',
        }),
    ).toThrow();
  });

  it('It should not be possible to create a category with less than 1 letter', () => {
    expect(
      () =>
        new Category({
          name: '',
        }),
    ).toThrow();
  });
});
