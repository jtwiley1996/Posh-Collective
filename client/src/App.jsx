import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home'; // Import your page components
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  // Configure Apollo Client
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql', // Replace with your GraphQL server endpoint
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
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

export default App;
