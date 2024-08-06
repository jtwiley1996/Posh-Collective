import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import './index.css';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        {isBannerVisible && (
          <div className="banner">
            <p>We will no longer be accepting summer consignment. Fall consignment begins August 15th</p>
            <button className="banner-close" onClick={handleCloseBanner}>✖</button>
          </div>
        )}
        <Header isBannerVisible={isBannerVisible} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
