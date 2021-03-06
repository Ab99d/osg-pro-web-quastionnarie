import WebQuestionnaire from './pages/WebQuestionnaire';
import WebQuestionnaireAR from './pages/WebQuestionnaireAR'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={WebQuestionnaire} />
        <Route path="/ar" component={WebQuestionnaireAR} />
      </div>
    </Router>
  );
}

export default App;
