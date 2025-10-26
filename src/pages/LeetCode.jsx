import React, { useState, useEffect } from 'react';
import './LeetCode.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const LeetCode = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using multiple API sources for comprehensive stats
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Tharun_03k');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <section id="leetcode" className="leetcode-section">
        <div className="leetcode-container">
          <div className="leetcode-header">
            <h2 className="leetcode-title">
              LeetCode <span className="highlight">Stats</span>
            </h2>
            <p className="leetcode-subtitle">
              Loading your problem-solving progress...
            </p>
          </div>
          <div className="leetcode-loading">
            <div className="leetcode-loader"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leetcode" className="leetcode-section">
      <div className="leetcode-container">
        <div className="leetcode-header">
          <h2 className="leetcode-title">
            LeetCode <span className="highlight">Stats</span>
          </h2>
          <p className="leetcode-subtitle">
            My problem-solving journey and coding achievements on LeetCode
          </p>
        </div>
        
        {error ? (
          <div className="leetcode-error">
            <div className="leetcode-error-content">
              <FaCode className="leetcode-error-icon" />
              <h3>Unable to Load Stats</h3>
              <p>Click below to view my live LeetCode profile</p>
              <a 
                href="https://leetcode.com/u/Tharun_03k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="leetcode-error-button"
              >
                <span>View My Profile</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ) : stats ? (
          <div className="leetcode-card-wrapper">
            <div className="leetcode-stats-card">
              {/* Header with username and rank */}
              <div className="leetcode-card-header">
                <div className="leetcode-header-left">
                  <span className="leetcode-code-icon">&lt;/&gt;</span>
                  <span className="leetcode-username">Tharun_03k</span>
                </div>
                <div className="leetcode-rank-badge">
                  #{stats.ranking || stats.contributions || 'N/A'}
                </div>
              </div>

              {/* Main Content */}
              <div className="leetcode-card-content">
                {/* Left: Total Solved Circular Progress */}
                <div className="leetcode-circular-section">
                  <div className="leetcode-circular-progress">
                    <svg className="leetcode-progress-ring" viewBox="0 0 100 100">
                      <circle
                        className="leetcode-progress-ring-background"
                        cx="50"
                        cy="50"
                        r="45"
                      />
                      <circle
                        className="leetcode-progress-ring-fill"
                        cx="50"
                        cy="50"
                        r="45"
                        strokeDasharray={`${(stats.totalSolved || 0) / (stats.totalQuestions || 2000) * 283} 283`}
                        strokeDashoffset="0"
                      />
                    </svg>
                    <div className="leetcode-total-in-circle">
                      <span className="leetcode-total-number">{stats.totalSolved || 0}</span>
                      <span className="leetcode-total-label">Total Solved</span>
                    </div>
                  </div>
                </div>

                {/* Right: Difficulty Breakdown */}
                <div className="leetcode-breakdown-section">
                  {/* Easy */}
                  <div className="leetcode-breakdown-item">
                    <div className="leetcode-breakdown-header">
                      <span className="breakdown-label easy">Easy</span>
                      <span className="breakdown-count">
                        {stats.easySolved || 0} / {stats.totalEasy || 575}
                      </span>
                    </div>
                    <div className="leetcode-progress-bar">
                      <div 
                        className="progress-fill easy-fill"
                        style={{ width: `${((stats.easySolved || 0) / (stats.totalEasy || 575)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="leetcode-breakdown-item">
                    <div className="leetcode-breakdown-header">
                      <span className="breakdown-label medium">Medium</span>
                      <span className="breakdown-count">
                        {stats.mediumSolved || 0} / {stats.totalMedium || 1217}
                      </span>
                    </div>
                    <div className="leetcode-progress-bar">
                      <div 
                        className="progress-fill medium-fill"
                        style={{ width: `${((stats.mediumSolved || 0) / (stats.totalMedium || 1217)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="leetcode-breakdown-item">
                    <div className="leetcode-breakdown-header">
                      <span className="breakdown-label hard">Hard</span>
                      <span className="breakdown-count">
                        {stats.hardSolved || 0} / {stats.totalHard || 499}
                      </span>
                    </div>
                    <div className="leetcode-progress-bar">
                      <div 
                        className="progress-fill hard-fill"
                        style={{ width: `${((stats.hardSolved || 0) / (stats.totalHard || 499)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with link */}
              <div className="leetcode-card-footer">
                <a 
                  href="https://leetcode.com/u/Tharun_03k/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="leetcode-profile-link"
                >
                  View Profile on LeetCode
                  <FaExternalLinkAlt className="leetcode-link-icon" />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default LeetCode;

