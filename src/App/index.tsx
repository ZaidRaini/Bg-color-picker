import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouterOutlet from './Routes';
import { persistor, store } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterOutlet />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
