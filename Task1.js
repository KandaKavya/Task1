const careers = {
  fullstack: [
    {
      title: "Frontend Developer",
      description: "Create interactive user interfaces using HTML, CSS, and JS.",
      skills: "HTML, CSS, JavaScript, React"
    },
    {
      title: "Backend Developer",
      description: "Build server-side applications and APIs.",
      skills: "Node.js, Express, Java, SQL"
    },
    {
      title: "Full Stack Developer",
      description: "Develop both frontend and backend systems.",
      skills: "MongoDB, Express, React, Node.js"
    }
  ],
  ai: [
    {
      title: "Machine Learning Engineer",
      description: "Build models that learn from data to make predictions.",
      skills: "Python, TensorFlow, PyTorch"
    },
    {
      title: "AI Research Scientist",
      description: "Research cutting-edge AI models and techniques.",
      skills: "Deep Learning, NLP, GANs"
    },
    {
      title: "Data Scientist",
      description: "Analyze data to gain insights and build predictive models.",
      skills: "Python, R, Data Visualization"
    }
  ],
  cybersecurity: [
    {
      title: "Ethical Hacker",
      description: "Test systems for vulnerabilities ethically.",
      skills: "Pen Testing, Kali Linux, CEH"
    },
    {
      title: "Security Analyst",
      description: "Monitor systems and handle threat detection.",
      skills: "SIEM, Network Security, Threat Analysis"
    },
    {
      title: "Cryptographer",
      description: "Develop encryption algorithms and secure systems.",
      skills: "Cryptographic Protocols, Algorithms"
    }
  ],
  iot: [
    {
      title: "IoT Developer",
      description: "Develop smart device applications and systems.",
      skills: "Arduino, Raspberry Pi, MQTT"
    },
    {
      title: "IoT Architect",
      description: "Design scalable IoT ecosystems.",
      skills: "Cloud IoT, Embedded Systems"
    },
    {
      title: "Firmware Engineer",
      description: "Program hardware microcontrollers.",
      skills: "C, C++, RTOS"
    }
  ],
  gaming: [
    {
      title: "Game Developer",
      description: "Code the logic and interaction in games.",
      skills: "Unity, Unreal, C#"
    },
    {
      title: "Game Designer",
      description: "Design gameplay, levels, and user experience.",
      skills: "Storyboarding, Level Design"
    },
    {
      title: "Technical Artist",
      description: "Bridge the gap between art and development.",
      skills: "Shaders, 3D Modeling, VFX"
    }
  ],
  arvr: [
    {
      title: "AR Developer",
      description: "Create interactive AR applications.",
      skills: "Unity, ARKit, ARCore"
    },
    {
      title: "VR Developer",
      description: "Develop immersive VR environments.",
      skills: "Oculus SDK, Unreal Engine"
    },
    {
      title: "XR Designer",
      description: "Design cross-reality (AR/VR) experiences.",
      skills: "UX, Interaction Design, 3D Tools"
    }
  ]
};

function showCareers() {
  const interest = document.getElementById("interest").value;
  const list = document.getElementById("career-list");
  const selected = careers[interest] || [];

  list.innerHTML = selected.map(career => `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h3>${career.title}</h3>
          <p>${career.description}</p>
        </div>
        <div class="card-back">
          <h3>${career.title}</h3>
          <p class="skills">Key Skills:<br>${career.skills}</p>
        </div>
      </div>
    </div>
  `).join("");
}

window.onload = showCareers;
