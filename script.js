// ===== MOCK DATA =====
const mockData = {
  hero: {
    title: "OSITA BHARTI",
    subtitle: "Mechatronics & Robotics Engineer",
    description:
      "Passionate about autonomous systems, robotics, and IoT. Specializing in ROS2, SLAM, and intelligent automation solutions that bridge the gap between hardware and software.",
    social: {
      github: "https://github.com/osita-bharti",
      linkedin: "https://linkedin.com/in/osita-bharti",
      email: "iamositabharti@gmail.com",
    },
  },
  about: {
    description:
      "I'm a B.Tech student at IIIT Bhagalpur specializing in Mechatronics and Automation Engineering. My passion lies in developing intelligent autonomous systems that solve real-world problems.",
    bio: "With hands-on experience in ROS2, autonomous navigation, and control systems, I've led multiple projects ranging from hospital automation robots to smart farming solutions.",
  },
  skills: {
    categories: [
      { name: "Programming Languages", skills: ["C", "C++", "Python", "MATLAB"], level: 85 },
      { name: "Robotics Frameworks", skills: ["ROS2", "Nav2", "Gazebo", "SLAM"], level: 90 },
      { name: "Control & Simulation", skills: ["Simulink", "PID", "Path Planning"], level: 80 },
      { name: "Embedded Systems", skills: ["Arduino", "Raspberry Pi", "Sensors"], level: 75 },
    ],
  },
  projects: {
    items: [
      {
        title: "Medibot - Hospital Automation Robot",
        description: "Autonomous medicine delivery robot using ROS2 Nav2 and SLAM for hospital logistics.",
        category: "robotics",
        links: { github: "https://github.com/Osita16/Medibot"},
      },
      {
        title: "Ware-to-Follow",
        description: "An intelligent Line Following and Obstacle Avoidance Robot using Arduino and sensors.",
        category: "iot",
        links: { github: "https://github.com/Osita16/Ware-to-Follow" },
      },
      {
        title: "4 DOF Robotic Arm",
        description: "Design and implementation of a 4 degree-of-freedom robotic arm for automation tasks.",
        category: "automation",
        links: { github: "https://github.com/Osita16/Manipulator-Simulation" },
      },
    ],
  },
  experience: {
    items: [
      {
        role: "Research Intern",
        company: "IIT Mandi",
        date: "June 2025 - Aug 2025",
        description: "Designed a 4 DOF robotic arm and applied Computed Torque Control for its dynamic modelling.",
      },
      {
        role: "Lead - Robotics Club at IIIT Bhagalpur",
        date: "2023 - Present",
        description: "Mentored 20+ students in Robotics, Electronics and ROS and built projects.",
      },
    ],
  },
  blog: {
    posts: [
      { title: "Introduction to ROS2 for Beginners", excerpt: "A comprehensive guide to getting started with ROS2.", date: "Oct 2024", link: "#" },
      { title: "SLAM Algorithms in Robotics", excerpt: "Exploring Simultaneous Localization and Mapping techniques.", date: "Sep 2024", link: "#" },
    ],
  },
  testimonials: {
    items: [
      { name: "Dr. Rajesh Kumar", role: "Professor, IIT Mandi", text: "Osita's work on autonomous systems is exceptional.", image: "" },
      { name: "Priya Sharma", role: "Peer, IIIT Bhagalpur", text: "A brilliant engineer with innovative ideas.", image: "" },
    ],
  },
  contact: {
    email: "iamositabharti@gmail.com",
    phone: "+91-8953367907",
    github: "https://github.com/osita-bharti",
    linkedin: "https://linkedin.com/in/osita-bharti",
  },
};

// ===== UTILITY FUNCTIONS =====
const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== PORTFOLIO APP CLASS =====
class PortfolioApp {
  constructor() {
    this.init();
  }

  async init() {
    this.loadData();
    this.initNav();
    this.initAnimations();
    this.initInteractivity();
    this.updateYear();
  }

  loadData() {
    this.populateHero();
    this.populateAbout();
    this.populateSkills();
    this.populateProjects();
    this.populateExperience();
    this.populateBlog();
    this.populateTestimonials();
    this.populateContact();
  }

  populateHero() {
    $("#hero-title").textContent = mockData.hero.title;
    $("#hero-subtitle").textContent = mockData.hero.subtitle;
    $("#hero-desc").textContent = mockData.hero.description;
    $("#github").href = mockData.hero.social.github;
    $("#linkedin").href = mockData.hero.social.linkedin;
    $("#email").href = `mailto:${mockData.hero.social.email}`;
    this.initTypingEffect();
    this.initParticles();
  }

  populateAbout() {
    $("#about-desc").textContent = mockData.about.description;
    $("#about-bio").textContent = mockData.about.bio;
  }

  populateSkills() {
    const container = $("#skills-container");
    container.innerHTML = "";
    mockData.skills.categories.forEach(cat => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${cat.name}</h3>
        <p>${cat.skills.join(", ")}</p>
        <div class="skill-bar"><div class="skill-fill" style="width: ${cat.level}%;"></div></div>
      `;
      container.appendChild(card);
    });
  }

  populateProjects() {
    const container = $("#projects-container");
    container.innerHTML = "";
    mockData.projects.items.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-category", p.category);
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-links">
          <a href="${p.links.github}" target="_blank"><i class="fab fa-github"></i> Code</a>
          <a href="${p.links.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
        </div>
      `;
      container.appendChild(card);
    });
  }

  populateExperience() {
    const container = $("#experience-container");
    container.innerHTML = "";
    mockData.experience.items.forEach(e => {
      const item = document.createElement("div");
      item.className = "experience-card";
      item.innerHTML = `
        <h3>${e.role}</h3>
        <h4>${e.company}</h4>
        <p>${e.date}</p>
        <p>${e.description}</p>
      `;
      container.appendChild(item);
    });
  }

  populateBlog() {
    const container = $("#blog-container");
    container.innerHTML = "";
    mockData.blog.posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <small>${post.date}</small>
        <a href="${post.link}" class="read-more">Read More</a>
      `;
      container.appendChild(card);
    });
  }

  populateTestimonials() {
    const container = $("#testimonial-container");
    container.innerHTML = "";
    mockData.testimonials.items.forEach(t => {
      const slide = document.createElement("div");
      slide.className = "testimonial-slide";
      slide.innerHTML = `
        <p>"${t.text}"</p>
        <h4>${t.name}</h4>
        <small>${t.role}</small>
      `;
      container.appendChild(slide);
    });
    this.initCarousel();
  }

  populateContact() {
    $("#contact-email").textContent = mockData.contact.email;
    $("#contact-email").href = `mailto:${mockData.contact.email}`;
    $("#contact-phone").textContent = mockData.contact.phone;
    $("#contact-github").href = mockData.contact.github;
    $("#contact-linkedin").href = mockData.contact.linkedin;
  }

  initNav() {
    const toggle = $(".menu-toggle");
    const navLinks = $(".nav-links");
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      toggle.setAttribute("aria-expanded", navLinks.classList.contains("active"));
    });
    this.initActiveNav();
    this.initDarkMode();
  }

  initActiveNav() {
    const sections = $$("section[id]");
    const navLinks = $$(".nav-links a");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) current = section.getAttribute("id");
      });
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) link.classList.add("active");
      });
    });
  }

  initDarkMode() {
    const btn = $("#dark-mode-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const icon = btn.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
        icon.className = "fas fa-sun";
      } else {
        icon.className = "fas fa-moon";
      }
    });
  }

  initTypingEffect() {
    const el = $("#hero-subtitle");
    const text = mockData.hero.subtitle;
    el.textContent = "";
    let i = 0;
    const typing = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 100);
      }
    };
    typing();
  }

  initParticles() {
    const hero = $("#hero");
    if (!hero || prefersReducedMotion) return;
    for (let i = 0; i < 15; i++) {
      const dot = document.createElement("div");
      dot.className = "particle";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";
      hero.appendChild(dot);
      setTimeout(() => dot.remove(), 6000);
    }
  }

  initAnimations() {
    if (prefersReducedMotion) return;
    const elements = $$(".section");
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) el.classList.add("fade-in");
      });
    };
    window.addEventListener("scroll", debounce(revealOnScroll, 100));
    revealOnScroll();
  }

  initInteractivity() {
    const filters = $$(".filter-btn");
    const cards = $$("#projects-container .card");
    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.filter;
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        cards.forEach(c => {
          if (cat === "all" || c.dataset.category === cat) c.style.display = "";
          else c.style.display = "none";
        });
      });
    });
  }

  initCarousel() {
    const slides = $$(".testimonial-slide");
    let index = 0;
    slides.forEach((s, i) => (s.style.display = i === 0 ? "block" : "none"));
    setInterval(() => {
      slides[index].style.display = "none";
      index = (index + 1) % slides.length;
      slides[index].style.display = "block";
    }, 5000);
  }

  updateYear() {
    const el = $("#current-year");
    if (el) el.textContent = new Date().getFullYear();
  }
}

// ===== INITIALIZE APP =====
document.addEventListener("DOMContentLoaded", () => new PortfolioApp());

// Adding more functionality for better user experience
window.addEventListener("load", () => {
  const preloader = $("#preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 500);
  }
});

// Toggle feature between light and dark mode manually based on time of day
document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.classList.add("dark-mode");
    const btn = $("#dark-mode-toggle");
    if (btn) {
      const icon = btn.querySelector("i");
      if (icon) icon.className = "fas fa-sun";
    }
  } else {
    document.body.classList.remove("dark-mode");
    const btn = $("#dark-mode-toggle");
    if (btn) {
      const icon = btn.querySelector("i");
      if (icon) icon.className = "fas fa-moon";
    }
  }
});

// Smooth scrolling for navigation links
$$(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form validation for contact form (assuming a form is added or button triggers modal)
const contactFormBtn = $("#contact-form-btn");
if (contactFormBtn) {
  contactFormBtn.addEventListener("click", () => {
    // Placeholder: Open a modal or form here
    alert("Contact form functionality can be implemented here.");
  });
}

// Adding keyboard navigation support (avoiding Tab for toggle, using a different key)
document.addEventListener("keydown", e => {
  if (e.key === "d" && e.ctrlKey) { // Ctrl+D for dark mode toggle
    document.body.classList.toggle("dark-mode");
    const btn = $("#dark-mode-toggle");
    if (btn) {
      const icon = btn.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
        icon.className = "fas fa-sun";
      } else {
        icon.className = "fas fa-moon";
      }
    }
  }
});

// Adding resize event to adjust layout
window.addEventListener("resize", debounce(() => {
  console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
}, 200));

// Adding visibility change handler to pause animations when tab is not active
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("Tab is inactive, pausing animations.");
  } else {
    console.log("Tab is active, resuming animations.");
  }
});

// Adding a back to top button (using existing footer link)
const backToTopBtn = $(".back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
}

// Sticky navigation bar
const navBar = $("#main-header nav");
const stickyOffset = navBar.offsetTop;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > stickyOffset) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});

// Lazy loading images
const lazyImages = $$("img.lazy");
const lazyLoad = () => {
  lazyImages.forEach(img => {
    if (img.getBoundingClientRect().top < window.innerHeight + 100) {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    }
  });
};
window.addEventListener("scroll", debounce(lazyLoad, 200));
lazyLoad();

// End of script
/*more features in the below code*/
// Adding more functionality for better user experience
window.addEventListener("load", () => {
  const preloader = $("#preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 500);
  }
});

// Toggle feature between light and dark mode manually based on time of day
const toggleDarkMode = () => {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};
document.addEventListener("DOMContentLoaded", toggleDarkMode);