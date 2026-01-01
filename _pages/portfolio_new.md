---
layout: archive
title: ""
permalink: /portfolio/
author_profile: true
---

<style>
.projects-container {
  max-width: 1000px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}

.project-header {
  padding: 20px 20px 15px 20px;
  border-bottom: 2px solid #f0f0f0;
}

.project-title {
  font-size: 18px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  line-height: 1.3;
}

.project-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.project-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-description {
  color: #555;
  line-height: 1.4;
  margin-bottom: 14px;
  font-size: 15px;
  flex: 1;
}

.project-footer {
  margin-top: auto;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 15px;
}

.skill-tag {
  background: #f0f0f0;
  color: #555;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.project-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.project-link {
  display: inline-block;
  color: #52adc8;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: color 0.2s;
}

.project-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

.project-link::before {
  content: "🔗 ";
}

.project-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.project-year {
  font-size: 13px;
  color: #7f8c8d;
  font-weight: 500;
}

.project-badge {
  display: inline-block;
  background: #e74c3c;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .project-image {
    height: 180px;
  }
  
  .project-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<div class="projects-container">

<h1 style="margin-bottom: 30px;">Projects</h1>

<div class="projects-grid">

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">CrediWise - Use the right card, everytime</h3>
  </div>
  <div class="project-image">
    [Project Image - Add Later]
  </div>
  <div class="project-content">
    <p class="project-description">
      Built an AI-powered Chrome extension + dashboard that automatically helps you pick the best credit card at checkout. It auto detects checkout pages, pulls real-time card offers, and instantly recommends the card that saves you the most. Awarded Capital One's Best Financial Hack and best Startup Sprint among 450+ participants.
    </p>
    <div class="project-footer">
      <div class="project-skills">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">React + Vite</span>
        <span class="skill-tag">Manifest V3</span>
        <span class="skill-tag">MCP agent</span>
        <span class="skill-tag">Llama</span>
        <span class="skill-tag">Supabase</span>
      </div>
      <div class="project-bottom">
        <a href="https://devpost.com/software/crediwise-use-the-right-card-every-time" target="_blank" class="project-link">Devpost</a>
        <div class="project-meta">
          <span class="project-year">2025</span>
          <span class="project-badge">HACKATHON</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">DocuGen – AI-Powered GitHub Documentation Generator</h3>
  </div>
  <div class="project-image">
    [Project Image - Add Later]
  </div>
  <div class="project-content">
    <p class="project-description">
      Developed a tool that generates adaptive documentation for GitHub repos, with setup guides and branch comparisons across multilanguage codebases. Improves code comprehension and reduce onboarding time by automating documentation workflows for developers.
    </p>
    <div class="project-footer">
      <div class="project-skills">
        <span class="skill-tag">React.js</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">LLM</span>
        <span class="skill-tag">Software Deployment</span>
        <span class="skill-tag">GitHub API</span>
      </div>
      <div class="project-bottom">
        <a href="https://github.com/adithyaharish/DocuGen_UI_Backup" target="_blank" class="project-link">GitHub</a>
        <div class="project-meta">
          <span class="project-year">2025</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">Networking App for Marriott International</h3>
  </div>
  <div class="project-image">
    [Project Image - Add Later]
  </div>
  <div class="project-content">
    <p class="project-description">
      Led a 36-hour app development project aimed at connecting Marriott guests with similar interests to foster a more social hotel experience. Utilized Firebase, Python Flask and Flutter and Integrated machine learning models to match user preferences. Awarded Honorable Mention for innovative design and execution among 100+ teams.
    </p>
    <div class="project-footer">
      <div class="project-skills">
        <span class="skill-tag">Firebase</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Flask</span>
        <span class="skill-tag">Flutter</span>
        <span class="skill-tag">ML</span>
      </div>
      <div class="project-bottom">
        <a href="https://devpost.com/software/codefest-ai-pioneer" target="_blank" class="project-link">Devpost</a>
        <div class="project-meta">
          <span class="project-year">Oct 2024</span>
          <span class="project-badge">HACKATHON</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">Empirical study on Stack Overflow vs ChatGPT on Security-related questions</h3>
  </div>
  <div class="project-image">
    [Project Image - Add Later]
  </div>
  <div class="project-content">
    <p class="project-description">
      Conducted a focused study comparing security-related programming queries using PMD tools, applying data mining techniques to identify a 70% security violation rate in ChatGPT vs. 18% in Stack Overflow, highlighting AI's limitations in secure coding.
    </p>
    <div class="project-footer">
      <div class="project-skills">
        <span class="skill-tag">LLM</span>
        <span class="skill-tag">Tableau</span>
        <span class="skill-tag">Code Quality</span>
      </div>
      <div class="project-bottom">
        <a href="https://github.com/adithyaharish/Comparative-Security-Analysis-of-ChatGPT-and-Stack-Overflow" target="_blank" class="project-link">GitHub</a>
        <div class="project-meta">
          <span class="project-year">2024</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">Self-driving cars with Reinforcement Q-Learning</h3>
  </div>
  <div class="project-image">
    [Project Image - Add Later]
  </div>
  <div class="project-content">
    <p class="project-description">
      Engineered a simulation environment using OpenAI Gym to model self-driving car dynamics, utilizing Q-learning to enhance decision-making processes and achieve optimal system performance, resulting in improved route decision efficiency by 15% compared to SARSA, and Neural Network-based approaches.
    </p>
    <div class="project-footer">
      <div class="project-skills">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Neural Networks</span>
        <span class="skill-tag">Reinforcement Learning</span>
      </div>
      <div class="project-bottom">
        <a href="https://github.com/adithyaharish/Taxi-v2-game" target="_blank" class="project-link">GitHub</a>
        <div class="project-meta">
          <span class="project-year">2021</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">Kilig Events Official Website</h3>
  </div>
  <div class="project-image">
    [Project Image - Add Later]
  </div>
  <div class="project-content">
    <p class="project-description">
      Designed, developed and deployed the official website for Kilig Events, a professional event management company in Madurai. Built with React.js and optimized for performance and SEO to ensure visibility and smooth user experience.
    </p>
    <div class="project-footer">
      <div class="project-skills">
        <span class="skill-tag">React.js</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">SEO</span>
      </div>
      <div class="project-bottom">
        <a href="https://github.com/adithyaharish/kiligevents" target="_blank" class="project-link">GitHub</a>
        <div class="project-meta">
          <span class="project-year">2020</span>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</div>
