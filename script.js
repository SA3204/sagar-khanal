/* ============================================================
   script.js — Sagar Khanal Portfolio
   ============================================================ */

// ── SCROLL REVEAL ──────────────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));


// ── ACTIVE NAV HIGHLIGHT ON SCROLL ─────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--gold-light)';
    }
  });
});


// ── MOBILE NAV CLOSE ON LINK CLICK ─────────────────────────
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});


// ── CONTACT FORM ────────────────────────────────────────────
function sendMessage() {
  const name    = document.querySelector('input[placeholder="John Doe"]').value.trim();
  const email   = document.querySelector('input[type="email"]').value.trim();
  const subject = document.querySelector('input[placeholder*="Opportunity"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // ── Integrate with Formspree ──
  // 1. Go to https://formspree.io and create a free account
  // 2. Create a new form and get your endpoint URL
  // 3. Replace the fetch URL below with your Formspree endpoint
  //    e.g. "https://formspree.io/f/YOUR_FORM_ID"

  /*
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
  })
  .then(res => {
    if (res.ok) {
      alert('Message sent successfully! I will get back to you soon.');
      clearForm();
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(() => alert('Network error. Please check your connection.'));
  */

  // Placeholder alert (remove after connecting Formspree)
  alert(`Thanks, ${name}! Your message has been received. (Connect Formspree to send real emails.)`);
  clearForm();
}

function clearForm() {
  document.querySelector('input[placeholder="John Doe"]').value        = '';
  document.querySelector('input[type="email"]').value                  = '';
  document.querySelector('input[placeholder*="Opportunity"]').value    = '';
  document.querySelector('textarea').value                             = '';
}


// ── SMOOTH SCROLL FOR ALL ANCHOR LINKS ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── NAVBAR SHADOW ON SCROLL ──────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
