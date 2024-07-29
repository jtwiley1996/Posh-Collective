import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import reactLogo from './assets/react.svg';
import viteLogo from '/public/vite.svg'; // Ensure the path is correct
import './App.css';
import Header from './Header';
import Home from './pages/Home'; // Import your page components
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0);

  // Configure Apollo Client
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql', // Replace with your GraphQL server endpoint
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
