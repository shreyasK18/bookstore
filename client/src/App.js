import './App.css';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import { Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { Fragment } from 'react';
import ListView from './components/List/ListView';
import AddBook from './components/BookDetails/AddBook';
import EditBook from './components/BookDetails/EditBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={ListView}/>
              <Route exact path="/add" component={AddBook}/>
              <Route exact path="/edit/:id" component={EditBook}/>
            </Switch>
          <Footer/>
        </Router>
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
