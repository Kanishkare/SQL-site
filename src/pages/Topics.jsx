import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Filter, Search, BookOpen } from 'lucide-react';
import './Topics.css';

const topicsData = [
  { id: 1, title: 'Introduction to SQL', level: 'Beginner', duration: '45 mins', completed: true },
  { id: 2, title: 'SELECT Statements', level: 'Beginner', duration: '1 hour', completed: true },
  { id: 3, title: 'Filtering Data (WHERE)', level: 'Beginner', duration: '1.5 hours', completed: false },
  { id: 4, title: 'Sorting Data (ORDER BY)', level: 'Beginner', duration: '45 mins', completed: false },
  { id: 5, title: 'SQL Joins (INNER, LEFT, RIGHT)', level: 'Intermediate', duration: '2 hours', completed: false },
  { id: 6, title: 'Aggregation (GROUP BY)', level: 'Intermediate', duration: '1.5 hours', completed: false },
  { id: 7, title: 'Subqueries', level: 'Advanced', duration: '2 hours', completed: false },
  { id: 8, title: 'Window Functions', level: 'Advanced', duration: '3 hours', completed: false },
];

const Topics = () => {
  return (
    <div className="topics-page animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Explore SQL Topics</h1>
          <p className="page-subtitle">Master database concepts step by step.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar glass-panel">
            <Search size={20} className="text-muted" />
            <input type="text" placeholder="Search topics..." />
          </div>
          <button className="btn btn-outline"><Filter size={18} /> Filter</button>
        </div>
      </div>

      <div className="topics-grid grid">
        {topicsData.map((topic) => (
          <div key={topic.id} className="topic-card card">
            <div className="topic-card-header">
              <span className={`difficulty-badge ${topic.level.toLowerCase()}`}>{topic.level}</span>
              {topic.completed && <span className="status-badge">Completed</span>}
            </div>
            <div className="topic-icon">
              <Database size={32} />
            </div>
            <h3 className="topic-title">{topic.title}</h3>
            <div className="topic-meta">
              <span><BookOpen size={16} /> 3 Lessons</span>
              <span>•</span>
              <span>{topic.duration}</span>
            </div>
            <div className="topic-actions">
              <Link to={`/topic/${topic.id}`} className="btn btn-primary w-100">
                {topic.completed ? 'Review Topic' : 'Start Learning'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
