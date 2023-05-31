import { newSpecPage } from '@stencil/core/testing';
import { CaButton } from './ca-button';

describe('ca-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CaButton],
      html: `<ca-button></ca-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ca-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ca-button>
    `);
  });
});
