const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

// init state
const initialState = {
  booksArray: [],
};

// Actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { 
        ...state, 
        booksArray: [...state.booksArray, action.payload],
      };

    case REMOVE_BOOK:
      return {
        booksArray: [...state.booksArray.filter((book) => book.item_id !== action.payload.item_id)],
      };

    case GET_BOOKS:
      return {
        ...state,
        booksArray: [...state.booksArray.concat(action.payload)],
      };

    default:
      return state;
  }
};
  
export default booksReducer;