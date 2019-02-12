import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import ReduxPersist from '../Config/ReduxPersist';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  /* eslint-disable */
  nav: require('./NavigationRedux').reducer,
  signUp: require('./AeroSignUpRedux').reducer,
  social: require('./SocialRedux').reducer,
  user: require('./UserRedux').reducer,
  /* eslint-enable */
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga); //eslint-disable-line

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers; //eslint-disable-line
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default; //eslint-disable-line
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
