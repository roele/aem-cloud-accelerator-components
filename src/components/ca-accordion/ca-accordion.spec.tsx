import { newSpecPage } from '@stencil/core/testing';
import { CaAccordion } from './ca-accordion';

describe('ca-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CaAccordion],
      html: `<ca-accordion></ca-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <ca-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ca-accordion>
    `);
  });
});
