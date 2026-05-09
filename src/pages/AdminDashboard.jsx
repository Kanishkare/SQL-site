import React from 'react';
import { Users, BookOpen, CheckSquare, TrendingUp, Search, Plus, Edit2, Trash2, MoreVertical } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-page animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Manage courses, students, and content.</p>
        </div>
      </div>

      <div className="admin-stats grid">
        <div className="admin-stat-card card">
          <div className="stat-header">
            <h4 className="stat-title">Total Students</h4>
            <div className="stat-icon-sm" style={{ color: 'var(--primary)' }}><Users size={18} /></div>
          </div>
          <div className="stat-value-large">2,543</div>
          <div className="stat-trend positive">
            <TrendingUp size={14} /> +12% this month
          </div>
        </div>
        
        <div className="admin-stat-card card">
          <div className="stat-header">
            <h4 className="stat-title">Active Courses</h4>
            <div className="stat-icon-sm" style={{ color: 'var(--accent)' }}><BookOpen size={18} /></div>
          </div>
          <div className="stat-value-large">18</div>
          <div className="stat-trend">
            2 new drafts
          </div>
        </div>
        
        <div className="admin-stat-card card">
          <div className="stat-header">
            <h4 className="stat-title">Quizzes Taken</h4>
            <div className="stat-icon-sm" style={{ color: 'var(--success)' }}><CheckSquare size={18} /></div>
          </div>
          <div className="stat-value-large">15,892</div>
          <div className="stat-trend positive">
            <TrendingUp size={14} /> +5% this week
          </div>
        </div>
      </div>

      <div className="admin-content grid">
        <div className="admin-panel card full-width">
          <div className="panel-header">
            <h3>Manage Topics</h3>
            <div className="panel-actions">
              <div className="search-box">
                <Search size={16} />
                <input type="text" placeholder="Search topics..." />
              </div>
              <button className="btn btn-primary btn-sm"><Plus size={16} /> Add Topic</button>
            </div>
          </div>
          
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Topic Name</th>
                  <th>Level</th>
                  <th>Lessons</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Introduction to SQL</td>
                  <td><span className="badge-level beginner">Beginner</span></td>
                  <td>3</td>
                  <td><span className="badge-status active">Published</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon-only"><Edit2 size={16} /></button>
                      <button className="btn-icon-only text-danger"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>SELECT Statements</td>
                  <td><span className="badge-level beginner">Beginner</span></td>
                  <td>4</td>
                  <td><span className="badge-status active">Published</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon-only"><Edit2 size={16} /></button>
                      <button className="btn-icon-only text-danger"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>SQL Joins</td>
                  <td><span className="badge-level intermediate">Intermediate</span></td>
                  <td>5</td>
                  <td><span className="badge-status active">Published</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon-only"><Edit2 size={16} /></button>
                      <button className="btn-icon-only text-danger"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Advanced Window Functions</td>
                  <td><span className="badge-level advanced">Advanced</span></td>
                  <td>6</td>
                  <td><span className="badge-status draft">Draft</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon-only"><Edit2 size={16} /></button>
                      <button className="btn-icon-only text-danger"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-panel card">
          <div className="panel-header">
            <h3>Recent User Feedback</h3>
          </div>
          <div className="feedback-list">
            <div className="feedback-item">
              <div className="user-avatar">J</div>
              <div className="feedback-content">
                <div className="feedback-header">
                  <strong>John Doe</strong>
                  <span className="feedback-time">2 hrs ago</span>
                </div>
                <p>"The joins tutorial is fantastic! The visual diagrams really helped me understand."</p>
                <div className="feedback-rating">★★★★★</div>
              </div>
            </div>
            <div className="feedback-item">
              <div className="user-avatar" style={{ background: 'var(--secondary)' }}>S</div>
              <div className="feedback-content">
                <div className="feedback-header">
                  <strong>Sarah Smith</strong>
                  <span className="feedback-time">1 day ago</span>
                </div>
                <p>"I found question 3 on the subqueries quiz a bit confusing."</p>
                <div className="feedback-rating">★★★★☆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
