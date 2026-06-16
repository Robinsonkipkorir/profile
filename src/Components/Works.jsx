import React, { useState, useRef } from "react";
import "./index.css";
import { ExternalLink, FolderGit2, Database, Terminal, Search, X } from "lucide-react";

export default function Works() {
  const themeColor = "#1e5a53";
  const lightBgColor = "rgba(30, 90, 83, 0.06)";
  
  // Interactive States
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Layouts" },
    { id: "web", label: "Web Core" },
    { id: "automation", label: "Data Automation" },
    { id: "systems", label: "Systems & Network" }
  ];

  const projectsData = [
    {
      id: 1,
      category: "web",
      icon: <FolderGit2 size={22} />,
      title: "Interactive Developer Portfolio",
      subtitle: "Front-End Engineering",
      description: "A responsive, modern five-page single page application built with React and Vite featuring modular layouts and smooth micro-interactions.",
      extendedDesc: "This project showcases full-stack UI client features. It handles fast client-side rendering routing transitions, optimized modular asset packing structures, and fluid dashboard layouts with customized layout properties.",
      tags: ["React", "Vite", "CSS3", "JavaScript"],
      github: "https://github.com",
      live: "#"
    },
    {
      id: 2,
      category: "automation",
      icon: <Database size={22} />,
      title: "Institutional Record Cleaner",
      subtitle: "Data Scripting & Warehousing",
      description: "An automated data processing script developed in Python to parse, clean, and merge multi-sheet institutional datasets efficiently across Excel files.",
      extendedDesc: "Engineered specifically to solve complex formatting errors in legacy spreadsheets. Utilizes advanced file structural loops to target multi-sheet arrays and consolidate isolated rows cleanly with zero manual formatting dependencies.",
      tags: ["Python", "Pandas", "Excel Automation"],
      github: "https://github.com",
      live: "#"
    },
    {
      id: 3,
      category: "systems",
      icon: <Terminal size={22} />,
      title: "Network Infrastructure Blueprint",
      description: "Configuration files and topology design sheets mapping out secure routing profiles, VLAN architectures, and hardware maintenance schedules.",
      extendedDesc: "Designed a production-ready enterprise intranet blueprint. Maps structural access nodes, manages security tables for physical servers, and implements proactive hardware maintenance logic to eliminate configuration drift.",
      tags: ["Cisco Packet Tracer", "System Admin", "Network Security"],
      github: "https://github.com",
      live: "#"
    }
  ];

  // 3D Tilt Card JavaScript Micro-interaction Handler
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const tiltX = (yc - y) / 12;
    const tiltY = (x - xc) / 12;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  // Complex Filtering Logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesTab = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    // Added safety layout padding elements to prevent footer from sliding up and covering content
    <section className="works-section" id="works" style={{ backgroundColor: "#faf9f6", padding: "8rem 2rem 6rem 2rem", minHeight: "100vh", display: "block" }}>
      
      {/* 1. DYNAMIC PAGE HEADER */}
      <div className="services-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="subtitle" style={{ color: themeColor, fontWeight: 700, letterSpacing: "0.1em", fontSize: "0.85rem" }}>MY PORTFOLIO</span>
        <h2 style={{ color: "#0f2d29", fontSize: "2.25rem", margin: "0.5rem 0", fontWeight: 800 }}>Engineered Architecture & Solutions</h2>
        <div className="header-bar" style={{ backgroundColor: themeColor, width: "60px", height: "4px", margin: "0 auto", borderRadius: "2px" }}></div>
      </div>

      {/* 2. SEARCH & FILTER INTERACTIVE CONSOLE */}
      <div className="works-console" style={{ maxWidth: "1200px", margin: "0 auto 3rem auto" }}>
        <div className="filter-tabs" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
                style={{
                  backgroundColor: isActive ? themeColor : "#ffffff",
                  color: isActive ? "#ffffff" : "#475569",
                  borderColor: isActive ? themeColor : "#e2e8f0",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "30px",
                  border: "1px solid",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease"
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="search-box-wrapper" style={{ position: "relative", maxWidth: "450px", margin: "0 auto" }}>
          <Search size={18} className="search-icon" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
          <input 
            type="text" 
            placeholder="Search tools or languages (e.g. React, Python)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="works-search-input"
            style={{ width: "100%", padding: "0.75rem 1rem 0.75rem 2.75rem", borderRadius: "30px", border: "1px solid #e2e8f0", outline: "none", fontSize: "0.9rem" }}
          />
        </div>
      </div>

      {/* 3. CORE CONTENT SYSTEM GRID WITH INLINE CSS BACKUPS */}
      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => {
            const cardRef = useRef(null);
            return (
              <div 
                key={project.id} 
                ref={cardRef}
                className="project-card-v3"
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                onClick={() => setSelectedProject(project)}
                style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", overflow: "hidden", cursor: "pointer", transition: "transform 0.1s ease, box-shadow 0.3s ease" }}
              >
                {/* Card Code Visual Canvas Frame */}
                <div className="card-visual-frame" style={{ background: `linear-gradient(135deg, #0f2d29, ${themeColor})`, height: "160px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="frame-overlay-mesh"></div>
                  <div className="frame-icon-badge" style={{ color: themeColor, background: "#ffffff", padding: "1rem", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {project.icon}
                  </div>
                  <span className="frame-category-label" style={{ position: "absolute", top: "15px", right: "15px", fontSize: "0.65rem", fontWeight: 800, color: "rgba(255, 255, 255, 0.7)", background: "rgba(255,255,255,0.15)", padding: "0.25rem 0.6rem", borderRadius: "4px", letterSpacing: "0.05em" }}>{project.category.toUpperCase()}</span>
                </div>

                <div className="project-card-details" style={{ padding: "2rem" }}>
                  <span className="project-card-subtitle" style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.25rem" }}>{project.subtitle || "System Module"}</span>
                  <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "0 0 0.5rem 0", fontWeight: 700 }}>{project.title}</h3>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", margin: "0 0 1.25rem 0" }}>{project.description}</p>
                  
                  <div className="service-tags" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="skill-tag" style={{ backgroundColor: lightBgColor, color: themeColor, padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 600 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "4rem 2rem", color: "#64748b", background: "#ffffff", borderRadius: "16px", border: "1px dashed #cbd5e1" }}>
            <p style={{ margin: 0, fontSize: "1rem", fontWeight: 500 }}>No project modules match your current query details.</p>
          </div>
        )}
      </div>

      {/* 4. MODAL POP-UP DETAILS OVERLAY */}
      {selectedProject && (
        <div className="modal-backdrop-blur" onClick={() => setSelectedProject(null)} style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div className="modal-card-window" onClick={(e) => e.stopPropagation()} style={{ background: "#ffffff", width: "100%", maxWidth: "620px", borderRadius: "24px", position: "relative", overflow: "hidden", boxShadow: "0 40px 100px rgba(15, 23, 42, 0.25)" }}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "#f1f5f9", border: "none", color: "#64748b", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <X size={20} />
            </button>
            
            <div className="modal-accent-strip" style={{ backgroundColor: themeColor, height: "6px", width: "100%" }}></div>
            
            <div className="modal-body-content" style={{ padding: "3rem" }}>
              <div className="modal-header-meta">
                <span className="panel-phase-badge" style={{ color: themeColor, backgroundColor: lightBgColor, padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 600, display: "inline-block" }}>
                  {selectedProject.category.toUpperCase()} WORKSPACE
                </span>
                <h2 style={{ fontSize: "1.8rem", color: "#0f172a", margin: "0.75rem 0 0 0", fontWeight: 800 }}>{selectedProject.title}</h2>
              </div>

              <div className="modal-inner-description" style={{ margin: "1.5rem 0" }}>
                <h4 style={{ fontSize: "0.95rem", color: "#0f172a", margin: "0 0 0.5rem 0", fontWeight: 700 }}>System Architecture Summary</h4>
                <p style={{ color: "#475569", fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>{selectedProject.extendedDesc || selectedProject.description}</p>
              </div>

              <div className="modal-tags-section" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag" style={{ backgroundColor: lightBgColor, color: themeColor, padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="modal-action-row" style={{ display: "flex", gap: "1rem" }}>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-btn outline" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.85rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", border: "1px solid #cbd5e1", color: "#475569" }}>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Repository
                </a>
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="modal-btn solid" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.85rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", color: "#ffffff", backgroundColor: themeColor }}>
                  <ExternalLink size={18} /> Launch View
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}