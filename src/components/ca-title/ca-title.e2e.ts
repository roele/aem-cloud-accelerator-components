import { newE2EPage } from '@stencil/core/testing';

describe('ca-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ca-title></ca-title>');

    const element = await page.find('ca-title');
    expect(element).toHaveClass('hydrated');
  });
});
