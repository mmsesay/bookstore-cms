const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

// init state
const initialState = [];

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
      return [ 
        ...state, 
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    case GET_BOOKS:
      return [ 
        ...state, 
        action.payload,
      ];

    default:
      return state;
  }
};
  
export default booksReducer;