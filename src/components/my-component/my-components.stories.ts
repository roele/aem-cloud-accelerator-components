const template = (args): any => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;

export const example = template.bind({});

example.args = {
  first: 'Winnie',
  last: 'Pooh',
  middle: 'The'
};

export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/MyComponent'
};
