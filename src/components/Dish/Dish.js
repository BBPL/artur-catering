import React from "react";
import PropTypes from "prop-types";

const Dish = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: false
    };

    this.updateDish = this.updateDish.bind(this);
  }

  updateDish() {
    const { name, price, type, id } = this.props;

    this.setState({
      active: !this.state.active
    });
    console.log("My props: " + JSON.stringify(this.props));
    const props = {
      name,
      price,
      type,
      id
    };
    this.props.update([...props]);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.price}</h2>
        <button type="button" onClick={this.updateDish}>
          {!this.state.active ? "Add" : "Remove"}
        </button>
      </div>
    );
  }
};

Dish.propTypes = {
  nid: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  active: PropTypes.bool,
  type: PropTypes.object,
  update: PropTypes.func,
  value: PropTypes.array
};

export default Dish;
