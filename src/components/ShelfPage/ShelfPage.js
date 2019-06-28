import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfPage extends Component {

    componentDidMount() {
        this.getShelfItems();
    }

    getShelfItems = () => {
        this.props.dispatch({ type: 'GET_SHELF_ITEMS' });
    }

    render() {

        return (
            <>
                <ul>
                    {this.props.reduxState.shelfItemsReducer.map(item => (<li key={item.id}>{item.description} <img src={item.image_url} alt={item.description}/></li>))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(ShelfPage);