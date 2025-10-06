// Translation system
const translations = {
  en: {
    // Navigation
    'nav-home': 'HOME',
    'nav-about': 'ABOUT',
    'nav-tech': 'OUR TECH',
    'nav-portal': 'EDUCATION-PORTAL',
    'nav-news': 'NEWS',
    'nav-contactus': 'CONTACT US',
    'search-placeholder': 'Search...',
    
    // Hero Section
    'hero-title': 'Engaging Healthcare Education',
    'hero-paragraph': 'Give your healthcare staff the flexible, accessible training they deserve. EduTechSmart\'s gamified courses make learning CPR, Fire Safety, and compliance both effective and enjoyable—available 24/7, on any device.',
    'hero-btn': 'Our Technology',
    'hero-info': '✓ 20+ Languages  ✓ Works Everywhere  ✓ No Classroom Needed',
    
    // Info Sections
    'info1-title': 'NO CLASSROOM NEEDED',
    'info1-p1': '<strong>EducateSmart™</strong> is our dedicated platform, offering healthcare companies essential educational tools to drive and maintain unparalleled quality standards.',
    'info1-p2': 'EduTechSmart plays a crucial role in reshaping the educational landscape with our innovative approach.',
    'info1-p3': 'Our educational methodology is designed for easy and convenient access, seamlessly incorporating a diverse range of features including gamified scenario-based training, video content, 3D animation, and modern assessment techniques, all enhanced by AI.',
    
    'info2-title': 'DEVELOPED BY EXPERTS, <br> VERIFIED BY EXPERTS',
    'info2-p1': 'EduTechSmart draws from decades of expertise spanning healthcare, IT, gaming, and education, all enriched by cutting-edge AI advancements. Our courses are crafted by seasoned professionals well-versed in industry standards, regulations, and guidelines. We prioritize alignment with local norms and best practices.',
    
    'info3-title': 'BENEFITS',
    'benefit1': 'Cost-efficient',
    'benefit2': 'User-friendly planning',
    'benefit3': 'Repeatable modules',
    'benefit4': '24/7 accessibility',
    'benefit5': 'Scenario based',
    'benefit6': 'Localized in >20 languages',
    'benefit7': 'Customizable characters and environments',
    'benefit8': 'Seamless access on PC/MAC, mobile, or tablet',
    'benefit9': 'Content not found in typical online courses',
    'benefit10': 'Eco-friendly approach',
    'info3-p1': 'Education with us is affordable, effective, and accessible everywhere and on every device!',
    
    // Testimonials
    'testimonials-heading': 'Testimonials',
    
    // Footer
    'footer-copyright': '© 2025 EduTechSmart Global. All rights reserved.',
    'footer-contact': 'Contact us'
  },
  sv: {
    // Navigation
    'nav-home': 'HEM',
    'nav-about': 'OM OSS',
    'nav-tech': 'VÅR TEKNOLOGI',
    'nav-portal': 'UTBILDNINGSPORTAL',
    'nav-news': 'NYHETER',
    'nav-contactus': 'KONTAKTA OSS',
    'search-placeholder': 'Sök...',
    
    // Hero Section
    'hero-title': 'Engagerande utbildning inom hälso- och sjukvård',
    'hero-paragraph': 'Ge din vårdpersonal den flexibla och tillgängliga utbildning de förtjänar. EduTechSmarts gamifierade kurser gör lärande av HLR, brandsäkerhet och regelefterlevnad både effektivt och roligt—tillgängligt dygnet runt, på vilken enhet som helst.',
    'hero-btn': 'Vår teknologi',
    'hero-info': '✓ 20+ språk  ✓ Fungerar överallt  ✓ Inget klassrum behövs',
    
    // Info Sections
    'info1-title': 'INGET KLASSRUM BEHÖVS',
    'info1-p1': '<strong>EducateSmart™</strong> är vår dedikerade plattform som erbjuder vårdföretag viktiga pedagogiska verktyg för att driva och upprätthålla oöverträffade kvalitetsstandarder.',
    'info1-p2': 'EduTechSmart spelar en avgörande roll i att omforma utbildningslandskapet med vårt innovativa tillvägagångssätt.',
    'info1-p3': 'Vår pedagogiska metodik är utformad för enkel och bekväm åtkomst, som sömlöst integrerar ett brett utbud av funktioner inklusive gamifierad scenariobaserad träning, videoinnehåll, 3D-animering och moderna bedömningstekniker, allt förbättrat av AI.',
    
    'info2-title': 'UTVECKLAD AV EXPERTER, <br> VERIFIERAD AV EXPERTER',
    'info2-p1': 'EduTechSmart drar nytta av decennier av expertis inom hälso- och sjukvård, IT, spel och utbildning, allt berikat av banbrytande AI-framsteg. Våra kurser är utformade av erfarna yrkesverksamma som är väl insatta i branschstandarder, regelverk och riktlinjer. Vi prioriterar anpassning till lokala normer och bästa praxis.',
    
    'info3-title': 'FÖRDELAR',
    'benefit1': 'Kostnadseffektivt',
    'benefit2': 'Användarvänlig planering',
    'benefit3': 'Repeterbara moduler',
    'benefit4': 'Tillgänglighet 24/7',
    'benefit5': 'Scenariobaserad',
    'benefit6': 'Lokaliserad på >20 språk',
    'benefit7': 'Anpassningsbara karaktärer och miljöer',
    'benefit8': 'Sömlös åtkomst på PC/MAC, mobil eller surfplatta',
    'benefit9': 'Innehåll som inte finns i vanliga onlinekurser',
    'benefit10': 'Miljövänligt tillvägagångssätt',
    'info3-p1': 'Utbildning med oss är prisvärd, effektiv och tillgänglig överallt och på alla enheter!',
    
    // Testimonials
    'testimonials-heading': 'Rekommendationer',
    
    // Footer
    'footer-copyright': '© 2025 EduTechSmart Global. Alla rättigheter förbehållna.',
    'footer-contact': 'Kontakta oss'
  }
};

// Get current language from localStorage or default to 'en'
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to translate all elements
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    
    if (translations[lang] && translations[lang][key]) {
      // Handle placeholder attribute for inputs
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.placeholder = translations[lang][key];
      } else {
        // Handle regular text content
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update language button text
  const langButton = document.querySelector('.language-toggle__text');
  if (langButton) {
    langButton.textContent = lang.toUpperCase();
  }
  
  // Store the selected language
  localStorage.setItem('language', lang);
  currentLanguage = lang;
}

// Toggle between EN and SV
function toggleLanguage() {
  const newLang = currentLanguage === 'en' ? 'sv' : 'en';
  translatePage(newLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  translatePage(currentLanguage);
  
  // Add event listener to language toggle button
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
});

