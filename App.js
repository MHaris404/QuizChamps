import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './src/redux/store/store';
import Nav from './src/navigator/Navigation'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Nav />
      </PersistGate>
    </Provider>
  );
}

export default App;