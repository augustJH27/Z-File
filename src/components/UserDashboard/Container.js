import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Theme';
import Cover from './Main/Cover';
import Main from './Main/Main';
// import './style.css';

export default function App() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/user-dashboard" exact>
              <Cover />
              <Main />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  )
}
