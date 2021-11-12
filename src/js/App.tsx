import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutMePage, ProjectsPage, SkillsPage } from './pages';
import { 
  Switch, 
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom"; 
import './App.scss';
import NavigationBar from './components/NavigationBar';

const App = () => {

  return (
    <Router>
      <NavigationBar />
      <Switch>
          <Route exact path="/"><Redirect to="/about"/></Route>
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </Router>
  );
}

export default App;