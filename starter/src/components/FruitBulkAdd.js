import React from 'react';

class FruitBulkAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruitToAdd: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ fruitToAdd: e.target.value });
  }

  addFruitsClick = () => {
    const { fruitToAdd } = this.state;
    const fruit = fruitToAdd
      .split(' ')
      .map((f) => f.toUpperCase());
    // TODO Dispatch to the store an action to add the fruits.
    this.setState({ fruitToAdd: '' })
  }

  render() {
    return (
      <div>
        <h3>Bulk Add</h3>
        <input
          type="text"
          placeholder="Add one or more fruits separated by spaces"
          value={this.state.fruitToAdd}
          onChange={this.handleInputChange}
          style={{ width: 300 }}
        />
        <button onClick={this.addFruitsClick}>ADD FRUITS</button>
      </div>
    );
  }
}

export default FruitBulkAdd;
