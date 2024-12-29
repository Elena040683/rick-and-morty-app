import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { allCharacters, loading, error } from './characters/reducers';
import {
  characterDetails,
  deetailsLoading,
  detailsError,
} from './characterDetails/redusers';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistAllCharactersConfig = {
  key: 'all',
  storage,
  blacklist: ['loading', 'error'],
};

const characters = combineReducers({
  allCharacters,
  loading,
  error,
});

const persistedCharactersReduser = persistReducer(
  persistAllCharactersConfig,
  characters,
);

const persistCharacterDetailsConfig = {
  key: 'details',
  storage,
};

const details = combineReducers({
  characterDetails,
  deetailsLoading,
  detailsError,
});

const persistedDetailsReduser = persistReducer(
  persistCharacterDetailsConfig,
  details,
);

export const store = configureStore({
  reducer: {
    all: persistedCharactersReduser,
    details: persistedDetailsReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
