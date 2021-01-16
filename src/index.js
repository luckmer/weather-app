import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import  Store from "./utils/store";
import GlobalStyle from "./styles/GlobalStyle";
ReactDOM.render(
  <Provider store={Store}>
      <App />
      <GlobalStyle/>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
