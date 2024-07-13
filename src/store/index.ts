import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authToken, { clearAuthToken } from './authToken';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthToken'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    AuthToken: authToken,
    // Add other reducers if needed
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const clearReduxStates = async () => {
  store.dispatch(clearAuthToken());
  await persistor.purge(); // Clear persisted data
  await persistor.flush();
  // Additional logout logic if needed
};

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
