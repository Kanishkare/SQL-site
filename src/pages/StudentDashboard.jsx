import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, TrendingUp, CheckCircle, PlayCircle } from 'lucide-react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard-page animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome back, Alex!</h1>
          <p className="page-subtitle">Here's an overview of your SQL learning progress.</p>
        </div>
      </div>

      <div className="stats-grid grid">
        <div className="stat-card card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)' }}>
            <BookOpen size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">4/12</span>
            <span className="stat-label">Topics Completed</span>
          </div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
            <Award size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">850</span>
            <span className="stat-label">Total XP</span>
          </div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">5.2 hrs</span>
            <span className="stat-label">Learning Time</span>
          </div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--secondary)' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-value">92%</span>
            <span className="stat-label">Avg. Quiz Score</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content grid">
        <div className="continue-learning card">
          <div className="card-header">
            <h3>Continue Learning</h3>
          </div>
          <div className="current-topic glass-panel">
            <div className="topic-info">
              <span className="badge-small">In Progress</span>
              <h4>SQL Joins (INNER, LEFT, RIGHT)</h4>
              <div className="progress-container">
                <div className="progress-bar"><div className="fill" style={{ width: '40%' }}></div></div>
                <span>40% Complete</span>
              </div>
            </div>
            <Link to="/topic/5" className="btn btn-primary btn-icon">
              <PlayCircle size={20} /> Resume
            </Link>
          </div>
          
          <h4 className="section-subtitle">Recommended Next</h4>
          <div className="recommended-list">
            <div className="recommended-item">
              <div className="rec-icon"><BookOpen size={16} /></div>
              <div className="rec-details">
                <h5>Aggregation (GROUP BY)</h5>
                <span>1.5 hours • Intermediate</span>
              </div>
              <Link to="/topic/6" className="btn btn-outline btn-sm">Start</Link>
            </div>
            <div className="recommended-item">
              <div className="rec-icon"><BookOpen size={16} /></div>
              <div className="rec-details">
                <h5>Subqueries</h5>
                <span>2 hours • Advanced</span>
              </div>
              <Link to="/topic/7" className="btn btn-outline btn-sm">Start</Link>
            </div>
          </div>
        </div>

        <div className="recent-activity card">
          <div className="card-header">
            <h3>Recent Activity</h3>
            <Link to="/activity" className="text-link">View All</Link>
          </div>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="activity-icon success"><CheckCircle size={16} /></div>
              <div className="activity-details">
                <p>Completed quiz: <strong>Sorting Data (ORDER BY)</strong></p>
                <span className="activity-time">2 hours ago • Score: 100%</span>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon info"><PlayCircle size={16} /></div>
              <div className="activity-details">
                <p>Watched video: <strong>Introduction to ORDER BY</strong></p>
                <span className="activity-time">3 hours ago</span>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon success"><CheckCircle size={16} /></div>
              <div className="activity-details">
                <p>Completed quiz: <strong>Filtering Data (WHERE)</strong></p>
                <span className="activity-time">Yesterday • Score: 90%</span>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon info"><BookOpen size={16} /></div>
              <div className="activity-details">
                <p>Read notes: <strong>The WHERE Clause Syntax</strong></p>
                <span className="activity-time">Yesterday</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
