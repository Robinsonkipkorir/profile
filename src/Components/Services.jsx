import React, { useState } from "react";
import "./index.css";
import { Code, Smartphone, BarChart3, Network } from "lucide-react";

export default function Services() {
  // Theme configurations managed via JavaScript
  const themeColor = "#1e5a53"; 
  const lightBgColor = "rgba(30, 90, 83, 0.06)";

  // State to track which workflow tab is currently active
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 1,
      icon: <Code size={30} />,
      title: "Full-Stack Development",
      description: "Building responsive, modular, and high-performance web applications using modern front-end frameworks like React.",
      skills: ["React", "JavaScript", "HTML5 & CSS", "Node.js"]
    },
    {
      id: 2,
      icon: <Smartphone size={30} />,
      title: "Mobile Development",
      description: "Designing and developing intuitive, cross-platform mobile applications that deliver smooth performance and native experiences.",
      skills: ["React Native", "Mobile UI", "API Integration"]
    },
    {
      id: 3,
      icon: <BarChart3 size={30} />,
      title: "Data Analysis & Automation",
      description: "Writing automated processing scripts in Python to handle, clean, and merge institutional datasets efficiently across Excel files.",
      skills: ["Python", "Data Processing", "Excel Automation"]
    },
    {
      id: 4,
      icon: <Network size={30} />,
      title: "Network Administration",
      description: "Managing technical systems, optimizing infrastructure, configuring routing setups, and providing robust hardware support.",
      skills: ["Network Security", "System Admin", "Hardware Support"]
    }
  ];

  const workflowSteps = [
    {
      id: 0,
      phase: "01. Discovery & Analysis",
      title: "Understanding the Data Ecosystem",
      desc: "Auditing institutional data requirements, parsing legacy formats, and mapping out user flows to ensure structural integrity before a single line of code is written."
    },
    {
      id: 1,
      phase: "02. Clean Architecture",
      title: "Modular Component Engineering",
      desc: "Developing responsive UI dashboards using React with reusable component structures, alongside building optimized automation scripts in Python for seamless data cleaning."
    },
    {
      id: 2,
      phase: "03. Quality Assurance & Launch",
      title: "Rigorous System Testing",
      desc: "Validating cross-platform performance, ensuring precise execution of data merges across Excel environments, and deploying production-ready applications."
    }
  ];

  return (
    <section className="services-section" id="services" style={{ backgroundColor: "#faf9f6" }}>
      
      {/* 1. SERVICES CARD LAYER */}
      <div className="services-header">
        <span className="subtitle" style={{ color: themeColor }}>SERVICES</span>
        <h2 style={{ color: "#0f2d29" }}>What I Do Best</h2>
        <div className="header-bar" style={{ backgroundColor: themeColor }}></div>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div 
              className="service-icon-container" 
              style={{ color: themeColor, backgroundColor: lightBgColor }}
            >
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 2. INTERACTIVE WORKFLOW METHODOLOGY LAYER */}
      <div className="workflow-section">
        <div className="workflow-header">
          <span className="section-subtitle" style={{ color: themeColor }}>Methodology</span>
          <h3 className="section-title" style={{ color: "#0f2d29" }}>How I Bring Solutions to Life</h3>
          <div className="header-bar" style={{ backgroundColor: themeColor, margin: "1rem auto 0 auto" }}></div>
        </div>

        <div className="workflow-interactive-container">
          {/* LEFT SIDE: TAB NAVIGATION SELECTORS */}
          <div className="workflow-tabs">
            {workflowSteps.map((step) => {
              const isSelected = activeTab === step.id;
              return (
                <button
                  key={step.id}
                  className={`workflow-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveTab(step.id)}
                  style={{
                    backgroundColor: isSelected ? "#0f2d29" : "#ffffff",
                    borderColor: isSelected ? "#0f2d29" : "#e2e8f0"
                  }}
                >
                  <span 
                    className="tab-number" 
                    style={{ 
                      backgroundColor: isSelected ? "rgba(255, 255, 255, 0.15)" : "#f1f5f9",
                      color: isSelected ? "#ffffff" : "#64748b"
                    }}
                  >
                    {step.phase.split('.')[0]}
                  </span>
                  <span 
                    className="tab-label"
                    style={{ color: isSelected ? "#ffffff" : "#475569" }}
                  >
                    {step.phase.split('. ')[1]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: INTERACTIVE CANVAS CONTAINER */}
          <div className="workflow-content-panel" style={{ backgroundColor: "#f8fafc" }}>
            <div className="panel-inner" key={activeTab}>
              <span 
                className="panel-phase-badge" 
                style={{ color: themeColor, backgroundColor: lightBgColor }}
              >
                {workflowSteps[activeTab].phase}
              </span>
              <h4 style={{ color: "#0f2d29" }}>{workflowSteps[activeTab].title}</h4>
              <p style={{ color: "#475569" }}>{workflowSteps[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}