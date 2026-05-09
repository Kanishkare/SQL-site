import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Topics from './pages/Topics';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import TopicDetail from './pages/TopicDetail';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
