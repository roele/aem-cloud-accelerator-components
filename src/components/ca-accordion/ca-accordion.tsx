import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ca-accordion',
  styleUrl: 'ca-accordion.scss',
  shadow: true,
})
export class CaAccordion {

  /**
   * The accordion text
   */
  @Prop() public text: string;

  @State() public isOpen: boolean = false;

  expandAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  render() {
    const accordionContent = this.isOpen ?
      <div class="ca-accordion__content">
        <slot></slot>
      </div> :
      <div class="ca-accordion__content"></div>

    return (
      <div class="ca-accordion">
        <span class="ca-accordion__text" onClick={this.expandAccordion.bind(this)}>{this.text}</span>
        {accordionContent}
      </div>
    );
  }

}
