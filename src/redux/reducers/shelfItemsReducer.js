const shelfItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHELF_ITEMS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default shelfItemsReducer;