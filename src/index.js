import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './components/app'
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  return <React.Fragment>
    <App />
  </React.Fragment>
};
ReactDOM.render(<Index />, document.getElementById('root'));