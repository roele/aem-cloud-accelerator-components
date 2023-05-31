const template = (args): any => `<ca-title text="${args.text}"></ca-title>`;

export const example = template.bind({});

example.args = {
  text: 'Hello world'
};

export default {
  // this creates a ‘Components’ folder and a ‘CaTitle’ subfolder
  tags: ['autodocs'],
  title: 'Components/CaTitle'
};
