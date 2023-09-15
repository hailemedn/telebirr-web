import './App.css';
import Header from './Header';
import LogIn from './LogIn';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
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

export default App;
