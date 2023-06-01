const template = (args): any => `
  <ca-accordion text="${args.text}">
    <div>
      <ca-title text="${args.titleText}"></ca-title>
      <ca-button text="${args.btnText}"></ca-button>
    </div>
  </ca-accordion>`;

export const example = template.bind({});

example.args = {
  text: 'Cloud Accelerator Accordion',
  titleText: 'Title',
  btnText: 'Button'
};

export default {
  // this creates a ‘Components’ folder and a ‘CaAccordion’ subfolder
  tags: ['autodocs'],
  title: 'Components/CaAccordion'
};
