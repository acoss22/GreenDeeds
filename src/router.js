
ReactDOM.render((
    <Router history = {browserHistory}>
       <Route path = "/" component = {App}>
          <IndexRoute component = {Home} />
          <Route path = "components/home" component = {Home} />
          <Route path = "components/about" component = {About} />
          <Route path = "components/contact" component = {Contact} />
       </Route>
    </Router>
 ), document.getElementById('app'))