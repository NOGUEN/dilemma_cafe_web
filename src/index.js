import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import NavigationBar from './components/NavigationBar';
import DilemmaListCell from './components/DilemmaListCell'
import reportWebVitals from './reportWebVitals';
import ButtonContainer from './components/SquareButtonContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MyVectorImage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
  </svg>
);

root.render(
  <React.StrictMode>
    <NavigationBar></NavigationBar>
    <ButtonContainer></ButtonContainer>
    <div>
      <DilemmaListCell titleText={"hello"} likeCount={100}></DilemmaListCell>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
