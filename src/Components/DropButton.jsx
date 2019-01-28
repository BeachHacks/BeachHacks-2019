import React, { Component } from 'react';



/**
 * DropButton Component
 * 
 */
export default class DropButton extends Component {

  /**Create a state for the dropdown and a state for the flipping of the arrow
  * these strings will be the classNames
  */
  state = {
    showDropDown: "body",
    flipArrow: "header"
  };


  /**
   * Toggle dropdown function is called whenever someone clicks on the element
   */
  toggleDropDown() {
    // css variable checks tosee if the state showDropdown is equal to body active, otherwise it will be equal to just body by default
    var css = (this.state.showDropDown === "body active") ? "body" : "body active";
    // use setState to change the css
    this.setState({ showDropDown: css });
    // do the same with the arrow flipping
    css = (this.state.flipArrow === "header flipArrow") ? "header" : "header flipArrow";
    this.setState({ flipArrow: css });
  }

  render() {
    return (
      <div className="contents">
      {/* Whenever the div is clicked, toggle the dropdown */}
        <div className="drop-element" onClick={this.toggleDropDown.bind(this)}>
          <div className={this.state.flipArrow}>
            {this.props.header}
          </div>
          <div className={this.state.showDropDown}>
            {this.props.body}
          </div>
        </div>
      </div>
    );
  }
}