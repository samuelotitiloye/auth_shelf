import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    this.getShelfItems();
  }

  getShelfItems = () => {
    this.props.dispatch({ type: 'GET_SHELF_ITEMS' });
  }

  render() {

    return (
      <>
        <div>

          <div className="addItemDiv">
            <h3>Add an Item</h3>
            <input placeholder="Item Description" />
            <input placeholder="Image URL" />
            <button>Add Item</button>
          </div>

          <p>Shelf Page</p>
        </div>
        <ul>
          {this.props.reduxState.shelfItemsReducer.map(item => (<li key={item.id}>{item.description} <img src={item.image_url} alt={item.description} /></li>))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(InfoPage);
