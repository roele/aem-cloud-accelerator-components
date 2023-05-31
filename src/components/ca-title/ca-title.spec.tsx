import { newSpecPage } from '@stencil/core/testing';
import { CaTitle } from './ca-title';

describe('ca-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CaTitle],
      html: `<ca-title></ca-title>`,
    });
    expect(page.root).toEqualHtml(`
      <ca-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ca-title>
    `);
  });
});
