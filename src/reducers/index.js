import { combineReducers } from 'redux';
import Bookeducer from './reduce_books';
import ActiveBook from './reducer_active';


const rootReducer = combineReducers({
  books: Bookeducer,
  activeBook: ActiveBook

});

export default rootReducer;
