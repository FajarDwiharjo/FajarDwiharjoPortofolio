import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/home/home"
import FeedbackForm from "./page/Form/form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;