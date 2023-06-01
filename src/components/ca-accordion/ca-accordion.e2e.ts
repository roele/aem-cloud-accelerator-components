import { newE2EPage } from '@stencil/core/testing';

describe('ca-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ca-accordion></ca-accordion>');

    const element = await page.find('ca-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
