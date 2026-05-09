import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, FileText, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import './TopicDetail.css';

const TopicDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('video'); // 'video' or 'notes'

  // Mock data for topic
  const topic = {
    id,
    title: 'SELECT Statements',
    description: 'Learn how to retrieve data from a database using the fundamental SELECT statement.',
    videoId: 'c_K3XlP1lkk', // Example YouTube ID (not real, just placeholder format)
    notes: `
      <h2>The SELECT Statement</h2>
      <p>The SELECT statement is used to select data from a database.</p>
      <p>The data returned is stored in a result table, called the result-set.</p>
      
      <h3>Syntax</h3>
      <pre><code>SELECT column1, column2, ...\nFROM table_name;</code></pre>
      
      <p>Here, column1, column2, ... are the field names of the table you want to select data from.</p>
      <p>If you want to select all the fields available in the table, use the following syntax:</p>
      
      <pre><code>SELECT *\nFROM table_name;</code></pre>
      
      <h3>Example</h3>
      <pre><code>SELECT CustomerName, City\nFROM Customers;</code></pre>
    `
  };

  return (
    <div className="topic-detail-page animate-fade-in">
      <Link to="/topics" className="back-link">
        <ArrowLeft size={16} /> Back to Topics
      </Link>
      
      <div className="topic-header">
        <div>
          <h1 className="page-title">{topic.title}</h1>
          <p className="page-subtitle">{topic.description}</p>
        </div>
        <Link to={`/quiz/${topic.id}`} className="btn btn-primary">
          <CheckCircle size={18} /> Take Quiz
        </Link>
      </div>

      <div className="topic-content-layout">
        <div className="main-content">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'video' ? 'active' : ''}`}
              onClick={() => setActiveTab('video')}
            >
              <PlayCircle size={18} /> Video Lesson
            </button>
            <button 
              className={`tab ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notes')}
            >
              <FileText size={18} /> Notes & Syntax
            </button>
          </div>

          <div className="tab-content card">
            {activeTab === 'video' ? (
              <div className="video-container">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/HXV3zeQKqGY`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div 
                className="notes-container"
                dangerouslySetInnerHTML={{ __html: topic.notes }}
              />
            )}
          </div>
        </div>

        <div className="sidebar">
          <div className="card course-progress">
            <h3>Module Progress</h3>
            <div className="progress-bar-container">
              <div className="progress-bar"><div className="fill" style={{width: '33%'}}></div></div>
              <span className="progress-text">1/3 Completed</span>
            </div>
            
            <ul className="lesson-list">
              <li className="lesson-item completed">
                <CheckCircle size={16} className="text-success" />
                <span>Introduction</span>
              </li>
              <li className="lesson-item active">
                <PlayCircle size={16} className="text-primary" />
                <span>SELECT Statements</span>
              </li>
              <li className="lesson-item">
                <div className="circle-empty"></div>
                <span>Filtering (WHERE)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
