document.addEventListener('DOMContentLoaded', () => {
  // --- Navigation & Mobile Menu ---
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close Mobile Menu on Link Click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });


  // --- typing animation for Hero ---
  const heroTitle = document.getElementById('hero-title-typing');
  if (heroTitle) {
    const originalText = "Securing the Digital Frontier.";
    let i = 0;
    
    // First clear and set cursor
    heroTitle.childNodes[0].textContent = "";
    
    function typeWriter() {
      if (i < originalText.length) {
        heroTitle.childNodes[0].textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 600);
  }


  // --- Reveal Sections on Scroll (ScrollReveal simulation) ---
  const revealElements = document.querySelectorAll('.reveal');
  const skillProgressBars = document.querySelectorAll('.skill-progress');

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger skill bars animations specifically if this is the skills section
        if (entry.target.id === 'skills') {
          animateSkillBars();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  function animateSkillBars() {
    skillProgressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    });
  }


  // --- Interactive Terminal Simulator ---
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const currentPromptLine = document.getElementById('current-prompt-line');
  const terminalChips = document.querySelectorAll('.terminal-chip');

  const commandResponses = {
    help: `Available commands:<br>
    - <span class="terminal-success">about</span>      : Read personal background profile<br>
    - <span class="terminal-success">skills</span>     : List verified security & development skills<br>
    - <span class="terminal-success">exp</span>        : View professional experience details<br>
    - <span class="terminal-success">projects</span>   : Query key projects and code details<br>
    - <span class="terminal-success">contact</span>    : Print secure email and phone link options<br>
    - <span class="terminal-success">whoami</span>     : Display client console profile details<br>
    - <span class="terminal-success">system</span>     : View terminal environment diagnostics<br>
    - <span class="terminal-success">clear</span>      : Wipe history and reset terminal buffer`,
    
    about: `Identity: <span class="terminal-success">Heamanthraj S</span><br>
    Current Status: Pursuing B.Tech in IT (Class of 2028)<br>
    Mission Focus: Securing backend architectures & penetration testing.<br>
    Location: Ariyalur, TN<br>
    Summary: Cybersecurity enthusiast with practical experience in Kali Linux, Wireshark, Nmap, and Django frameworks. Seeking internship opportunities.`,
    
    skills: `VERIFIED technical capabilities:<br>
    ---------------------------------------------<br>
    * <span class="terminal-success">SecOps</span>: Pentesting, Vulnerability Assessment, Network Traffic Audits<br>
    * <span class="terminal-success">Tools</span>: Kali Linux, Nmap, Wireshark, Metasploit, Burp Suite<br>
    * <span class="terminal-success">Backend</span>: Django framework, PostgreSQL, MySQL, REST API construction<br>
    * <span class="terminal-success">Languages</span>: Python, Java, SQL, C, Bash Scripting<br>
    * <span class="terminal-success">Core Concepts</span>: Data Structures, Computer Networks, Operating Systems, DBMS`,
    
    exp: `WORK history logs:<br>
    ---------------------------------------------<br>
    [+] <span class="terminal-success">Backend Developer @ KGISL Institute of Technology</span> (Jan 2026)<br>
    - Built backend security lab templates and step completion logics.<br>
    - Organised 15+ IT/OT training lab scenarios with 25% nav boost.<br>
    - Designed AI chatbot resolving lab queries.<br>
    <br>
    [+] <span class="terminal-success">Backend Developer @ KGISL Institute of Technology</span> (Nov 2025)<br>
    - Built Django price prediction web core.<br>
    - Integrated model inference pipelines with 75-80% validation accuracy.<br>
    - Optimized Django ORM/API load response speeds by 20%.`,
    
    projects: `SECURED code repositories:<br>
    ---------------------------------------------<br>
    1. <span class="terminal-success">Vegetable Price Forecasting Service</span> [Django, ML API, Postgres]<br>
       Predicts future item trends. Optimized queries and pipelines.<br>
    2. <span class="terminal-success">IT/OT Security Lab Platform & bot</span> [Django, AI Assistant]<br>
       Simulation environments built to train learners in cybersecurity threats.<br>
    3. <span class="terminal-success">Vulnerability & CTF Hub Scripts</span> [Nmap, Bash, Wireshark]<br>
       Custom scripts and walk-through logs documenting system evaluations.`,
    
    contact: `TRANSMISSION details:<br>
    ---------------------------------------------<br>
    * Mail Uplink : <a href="mailto:heamanthraj007@gmail.com" class="terminal-success">heamanthraj007@gmail.com</a><br>
    * Phone Dial  : <span class="terminal-success">+91 9360178076</span><br>
    * GitHub Repo : <a href="https://github.com/Heamanth007" target="_blank" class="terminal-success">github.com/Heamanth007</a><br>
    * LinkedIn ID : <a href="https://www.linkedin.com/in/heamanthraj-s-105b06314/" target="_blank" class="terminal-success">linkedin.com/in/heamanthraj-s</a>`,
    
    whoami: () => {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform || "Unknown Web Socket";
      const resolution = `${window.screen.width}x${window.screen.height}`;
      return `Visitor Profile:<br>
      - Operating System  : <span class="terminal-success">${platform}</span><br>
      - Browser Shell     : <span class="terminal-success">${userAgent.substring(0, 70)}...</span><br>
      - Display Interface : <span class="terminal-success">${resolution}</span><br>
      - Access Clearance  : <span class="terminal-system">GUEST_PORT_AUTH</span>`;
    },
    
    system: () => {
      const timestamp = new Date().toISOString();
      const status = "SECURE / ACTIVE";
      return `Diagnostic Logs:<br>
      - System Clock : <span class="terminal-success">${timestamp}</span><br>
      - Status       : <span class="terminal-success">${status}</span><br>
      - Version      : <span class="terminal-success">SEC_CORE_v2.6.4</span><br>
      - Encryption   : <span class="terminal-success">AES-GCM-256 Enabled</span><br>
      - Threat Level : <span class="terminal-success">NIL / NO BREACHES</span>`;
    }
  };

  // Add click support to command preset chips
  terminalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const command = chip.getAttribute('data-cmd');
      executeCommand(command);
    });
  });

  // Handle command submissions
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim().toLowerCase();
      executeCommand(command);
    }
  });

  // Focus input if user clicks inside terminal body
  terminalBody.addEventListener('click', (e) => {
    if (e.target !== terminalInput) {
      terminalInput.focus();
    }
  });

  function executeCommand(commandStr) {
    if (!commandStr) return;

    // Create line showing user input
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt-indicator">guest@heamanthraj:~$</span> <span style="color: var(--text-bright);">${escapeHtml(commandStr)}</span>`;
    
    // Insert user command before current input line
    terminalBody.insertBefore(userLine, currentPromptLine);

    // Clear input box
    terminalInput.value = '';

    // Handle clearing console
    if (commandStr === 'clear') {
      const lines = terminalBody.querySelectorAll('.terminal-line');
      lines.forEach(l => l.remove());
      terminalBody.scrollTop = 0;
      return;
    }

    // Process response
    let responseText = `Command not found: <span style="color: #ff5f56;">${escapeHtml(commandStr)}</span>. Type <span class="terminal-success">help</span> for assistance.`;
    
    if (commandResponses[commandStr]) {
      if (typeof commandResponses[commandStr] === 'function') {
        responseText = commandResponses[commandStr]();
      } else {
        responseText = commandResponses[commandStr];
      }
    }

    // Output response lines
    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line';
    responseLine.innerHTML = responseText;
    
    terminalBody.insertBefore(responseLine, currentPromptLine);
    
    // Auto Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }


  // --- Contact Form → Formspree ---
  const contactForm   = document.getElementById('contact-form');
  const formStatus    = document.getElementById('form-status');
  const submitBtn     = document.getElementById('submit-btn');
  const submitBtnHTML = submitBtn.innerHTML; // save original label

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    // ── Loading state ──
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" style="animation:spin-btn 1s linear infinite">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83
                 M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
      Transmitting...`;

    formStatus.className  = 'form-status';
    formStatus.textContent = '';
    formStatus.style.display = 'none';

    try {
      const response = await fetch(contactForm.action, {
        method:  'POST',
        body:    formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // ── Success ──
        formStatus.style.display = 'block';
        formStatus.className     = 'form-status success';
        formStatus.innerHTML     = `
          <span style="font-size:1.1rem;">✓</span>
          Message transmitted successfully! I'll get back to you soon.`;
        contactForm.reset();
      } else {
        // ── Formspree returned an error (e.g. form ID not set up yet) ──
        const data = await response.json().catch(() => ({}));
        const msg  = (data.errors && data.errors.map(e => e.message).join(', '))
                     || 'Transmission failed. Please try again or email me directly.';
        formStatus.style.display = 'block';
        formStatus.className     = 'form-status error';
        formStatus.textContent   = `✕ ${msg}`;
      }
    } catch (_err) {
      // ── Network error ──
      formStatus.style.display = 'block';
      formStatus.className     = 'form-status error';
      formStatus.textContent   =
        '✕ Network error — check your connection or email me at heamanthraj007@gmail.com';
    } finally {
      // ── Restore button ──
      submitBtn.disabled  = false;
      submitBtn.innerHTML = submitBtnHTML;
    }
  });
});
