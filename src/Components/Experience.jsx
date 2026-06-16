import React, { useState } from "react";
import "./index.css";
import { Calendar, MapPin, Terminal, Cpu } from "lucide-react";

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Generates a unique string to bypass browser download caching
  const cacheBuster = `?v=${Date.now()}`;

  const experienceData = [
    {
      id: 1,
      role: "ICT Intern",
      company: "Institutional Tech Workspace",
      duration: "May 2026 - Present",
      location: "Eldoret, Kenya",
      icon: <Terminal size={20} />,
      summary: "Managing core institutional IT systems, automated data operations, and localized network deployments.",
      highlights: [
        "Engineered automated Python scripting frameworks to parse, clean, and merge multi-sheet institutional datasets across complex Excel files, cutting manual processing time by over 80%.",
        "Configured and maintained local network architectures, resolving technical system drift, routing tables, and client support hardware profiles.",
        "Collaborated on full-stack interface modules using React, Vite, and modular CSS environments to establish clean, responsive internal dashboards."
      ],
      skills: ["Python", "Pandas", "React.js", "Data Automation", "Network Admin"]
    },
    {
      id: 2,
      role: "Technical System Support",
      company: "KETRACO Stint",
      duration: "Previous Term",
      location: "Nairobi, Kenya",
      icon: <Cpu size={20} />,
      summary: "Assisted with large-scale corporate network administration and proactively managed enterprise computing infrastructure.",
      highlights: [
        "Maintained local workstation security integrity and optimized critical network infrastructure routes to ensure high uptime across operational grids.",
        "Diagnosed hardware infrastructure performance bottlenecks, implementing preventative maintenance procedures that minimized system failures.",
        "Managed database record updates and generated structured data validation logs for infrastructure system compliance audits."
      ],
      skills: ["Network Security", "Hardware Maintenance", "System Support", "Troubleshooting"]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      
      {/* 1. HEADER ARCHITECTURE */}
      <div className="exp-header">
        <span className="exp-subtitle">Timeline & Competencies</span>
        <h2 className="exp-title">Professional Journey</h2>
        <div className="exp-header-decorator">
          <div className="decorator-line-short"></div>
          <div className="decorator-bar"></div>
          <div className="decorator-line-short"></div>
        </div>
      </div>

      {/* 2. CORE LAYOUT CONSOLE */}
      <div className="experience-container">
        
        {/* LEFT SIDE: TAB CONTROLLER */}
        <div className="exp-tabs-column">
          <h4 className="exp-column-label">Select Workspace</h4>
          
          {experienceData.map((job, idx) => {
            const isActive = activeJob === idx;
            const isHovered = hoveredTab === idx;
            
            return (
              <button
                key={job.id}
                onClick={() => setActiveJob(idx)}
                onMouseEnter={() => setHoveredTab(idx)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`exp-tab-btn ${isActive ? 'active' : ''} ${isHovered && !isActive ? 'hovered' : ''}`}
              >
                <div className="tab-role">{job.role}</div>
                <div className="tab-company">{job.company}</div>
                {isActive && <div className="tab-active-indicator"></div>}
              </button>
            );
          })}
        </div>

        {/* RIGHT SIDE: PREMIUM DISPLAY BOARD */}
        <div className="exp-display-board">
          <div className="board-mesh-overlay"></div>

          {/* Header Metadata info */}
          <div className="board-header">
            <div className="board-header-info">
              <h3>
                {experienceData[activeJob].role} 
                <span className="company-accent"> @ {experienceData[activeJob].company}</span>
              </h3>
              
              <div className="board-meta-row">
                <span className="meta-item">
                  <Calendar size={15} /> {experienceData[activeJob].duration}
                </span>
                <span className="meta-item">
                  <MapPin size={15} /> {experienceData[activeJob].location}
                </span>
              </div>
            </div>
            
            <div className="board-icon-badge">
              {experienceData[activeJob].icon}
            </div>
          </div>

          {/* Core Job Summary Context */}
          <div className="board-summary-callout">
            <p>"{experienceData[activeJob].summary}"</p>
          </div>

          {/* Metric Milestones Bullet Points */}
          <div className="board-bullets-list">
            {experienceData[activeJob].highlights.map((bullet, index) => (
              <div key={index} className="exp-bullet-row">
                <div className="bullet-timeline-node">
                  <div className="node-dot"></div>
                </div>
                <p className="bullet-text">{bullet}</p>
              </div>
            ))}
          </div>

          {/* Tool Stack Matrix */}
          <div className="board-skills-footer">
            <h4 className="skills-label">Applied Infrastructure & Tooling</h4>
            <div className="skills-tag-grid">
              {experienceData[activeJob].skills.map((skill, idx) => (
                <span key={idx} className="exp-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* APPLICATION MATERIALS CONSOLE */}
          <div className="exp-assets-footer">
            <div className="assets-text-frame">
              <h4 className="assets-title">Application Materials</h4>
              <p className="assets-desc">Download or view updated copies of my professional qualifications.</p>
            </div>

            <div className="assets-btn-group">
              {/* Uses direct routing combined with real-time cache busters */}
              <a 
                href={`/robinson_kipkorir.pdf${cacheBuster}`}
                download="Robinson_Kipkorir_CV.pdf" 
                className="asset-btn solid"
              >
                Download CV (.pdf)
              </a>
              <a 
                href={`/cover_letter.pdf${cacheBuster}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="asset-btn outline"
              >
                View Cover Letter
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}