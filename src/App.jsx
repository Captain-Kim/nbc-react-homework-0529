import React from 'react';
import Router from './Router/Router.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

// 만든 리덕스 사용법
// 1. useDispatch 2. useSelector 3. action import

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
