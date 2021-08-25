import { createStore } from 'redux';
import rootReducer from '../reducers/_root';

const configureStore = () => createStore(rootReducer);

export default configureStore;
