import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Config/appRoutes';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <RouterProvider  router={router}/>
     </Provider>
    </div>
  );
}

export default App;
