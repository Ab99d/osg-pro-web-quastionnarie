import WebQuestionnaire from './pages/WebQuestionnaire';
import WebQuestionnaireAR from './pages/WebQuestionnaireAR'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">English Version</Link>
        <Link to="/ar">Arabic  Version</Link>
        <Route exact path="/" component={WebQuestionnaire} />
        <Route path="/ar" component={WebQuestionnaireAR} />
      </div>
    </Router>
  );
}

export default App;
