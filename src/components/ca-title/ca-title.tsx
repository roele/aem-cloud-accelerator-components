import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ca-title',
  styleUrl: 'ca-title.scss',
  shadow: true,
})
export class CaTitle {

  /**
   * The title text
   */
  @Prop() public text: string;

  render() {
    return (
      <h1>{this.text}</h1>
    );
  }

}
