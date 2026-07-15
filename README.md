# 🛡️ Heamanthraj S — Cybersecurity Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge&logo=vercel)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Formspree](https://img.shields.io/badge/Formspree-FF6B6B?style=for-the-badge&logo=minutemailer&logoColor=white)

**A premium, dark-mode cybersecurity portfolio built with pure HTML, CSS & JavaScript.**

🔗 **Live Site → [portfolio-ashy-pi-d7vcdyltsd.vercel.app](https://portfolio-ashy-pi-d7vcdyltsd.vercel.app/)**

</div>

---

## ✨ Features

- **Midnight Purple & Violet** dark-mode aesthetic with glassmorphism cards
- **Interactive Security Terminal** — type commands like `help`, `skills`, `exp`, `projects`, `whoami` and get live responses
- **Cyber-themed Profile Photo** — hover to trigger a layered purple glow animation
- **Animated Skill Progress Bars** — triggered on scroll via IntersectionObserver
- **Vertical Experience Timeline** — with expandable roles and impact metrics
- **Live Contact Form** — powered by [Formspree](https://formspree.io), messages delivered directly to Gmail
- **Responsive Design** — mobile, tablet, and desktop ready
- **CRT Scanline Overlay** — subtle cyberpunk scanline effect across the entire page
- **Smooth Scroll Reveal Animations** — sections animate in as you scroll

---

## 📁 Project Structure

```
heamanthraj-portfolio/
├── index.html       # Main HTML — all sections and semantic structure
├── style.css        # Global design system, animations, responsive layouts
├── script.js        # Terminal simulator, scroll observers, contact form handler
└── profile.jpg      # Profile photo (cyber-themed)
```

---

## 🗂️ Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, tagline, rotating cyber badge graphic, CTA buttons |
| 02 | **About Me** | Bio, profile photo with hover glow, stats, core philosophy |
| 03 | **Security Console** | Interactive terminal — type commands to query resume data |
| 04 | **Skills & Tools** | Categorised skill bars + chips (Security, Backend, Core CS) |
| 05 | **Experience** | Timeline of Backend Developer roles at KGISL Institute of Technology |
| 06 | **Projects** | Project cards with tech badges (Veg Price Engine, IT/OT Lab, CTF Hub) |
| 07 | **Certifications** | Coursera certs + Hackathon awards (BIT Winner, PYEXPO Top 21) |
| 08 | **Contact** | Formspree-powered live form + email, phone, GitHub, LinkedIn links |

---

## 🖥️ Terminal Commands

The built-in Security Console supports the following commands:

```bash
help        # List all available commands
about       # Personal background and profile
skills      # Technical skills and tools inventory
exp         # Professional experience details
projects    # Key projects and technologies used
contact     # Email, phone, and social links
whoami      # Visitor's browser and system info
system      # Terminal diagnostics and status
clear       # Wipe the terminal output
```

---

## 📬 Contact Form (Formspree)

Messages submitted through the portfolio are delivered to **heamanthraj007@gmail.com** via [Formspree](https://formspree.io).

- **Endpoint:** `https://formspree.io/f/xjgnggoo`
- **Fields:** Name · Email · Message
- Includes real-time loading state, success confirmation, and error handling

To update the form endpoint, change the `action` attribute in `index.html`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `hsl(264, 45%, 6%)` |
| Accent Purple | `hsl(268, 80%, 58%)` |
| Accent Violet | `hsl(252, 90%, 65%)` |
| Accent Green | `hsl(142, 76%, 45%)` |
| Heading Font | `Space Grotesk` |
| Mono Font | `JetBrains Mono` |

---

## 🚀 Deployment

This portfolio is deployed on **Vercel** as a static site.

### Deploy your own copy

```bash
# 1. Clone or download the project folder
# 2. Push to a GitHub repository
# 3. Import the repo at vercel.com/new
# 4. Vercel auto-detects static HTML — no build config needed
# 5. Hit Deploy ✓
```

### Run locally

No build tools or dependencies required — just open in a browser:

```bash
# Option A: double-click index.html
# Option B: use VS Code Live Server extension
# Option C: quick Python server
python -m http.server 3000
# then open http://localhost:3000
```

---

## 🔧 Customisation Guide

### Update personal info
Edit the relevant sections directly in `index.html`.

### Add a new project card
Copy an existing `.project-card` block in the Projects section and update the title, description, tech badges, and GitHub link.

### Update skills
Find the `.skill-bar-wrapper` blocks inside `#skills` and adjust the `data-width` percentage values and labels.

### Change the colour theme
All colours are CSS custom properties at the top of `style.css`:

```css
:root {
  --accent-purple: hsl(268, 80%, 58%);
  --accent-violet: hsl(252, 90%, 65%);
  --accent-green:  hsl(142, 76%, 45%);
}
```

---

## 📄 License

This project is open for personal use and adaptation. If you use it as a base for your own portfolio, a credit mention is appreciated but not required.

---

<div align="center">

Built by **Heamanthraj S** · B.Tech IT · Cybersecurity Enthusiast

[GitHub](https://github.com/Heamanth007) · [LinkedIn](https://www.linkedin.com/in/heamanthraj-s-105b06314/) · [heamanthraj007@gmail.com](mailto:heamanthraj007@gmail.com)

</div>
