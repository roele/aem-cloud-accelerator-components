const template = (args): any => `<ca-button text="${args.text}"></ca-button>`;

export const example = template.bind({});

example.args = {
  text: 'Cloud Accelerator Button'
};

export default {
  // this creates a ‘Components’ folder and a ‘CaTitle’ subfolder
  tags: ['autodocs'],
  title: 'Components/CaButton'
};
