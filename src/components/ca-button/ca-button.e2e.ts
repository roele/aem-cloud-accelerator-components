import { newE2EPage } from '@stencil/core/testing';

describe('ca-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ca-button></ca-button>');

    const element = await page.find('ca-button');
    expect(element).toHaveClass('hydrated');
  });
});
