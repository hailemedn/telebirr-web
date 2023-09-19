import './App.css';
import Header from './Header';
import LogIn from './LogIn';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import { ThemeProvider, useTheme } from './ThemeContext';

function App() {
  const {theme} = useTheme();
  return (
    <div className="App" style={{background: theme === "light"? "white" : "black", color: theme === "light"? "black" : "white"}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>telebirr Web</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Helmet application" />
        </Helmet>
        
        
        <Header />
        <LogIn /> 
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
    <App />
  </ThemeProvider>
  ) 
}  

export default Root;
