import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Learnmore from './Learnmore/Learnmore';
import StudentLogin from './SchoolLogin/SchoolLogin';
import StudentSignUp from './Signup/Signup'; // <- Imported as StudentSignUp

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/signup" element={<StudentSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;