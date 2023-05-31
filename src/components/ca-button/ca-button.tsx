import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ca-button',
  styleUrl: 'ca-button.scss',
  shadow: true,
})
export class CaButton {

  /**
   * The button text
   */
  @Prop() public text: string;

  render() {
    return (
      <button onClick={this.btnClick.bind(this)}>{this.text}</button>
    );
  }

  btnClick() {
    console.log(`You just clicked ${this.text}!`);
  }

}
