// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // الأنيميشن اللطيف لزرار المنيو نفسه (X)
  const bars = document.querySelectorAll('.bar');
  bars[0].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
  bars[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
  bars[2].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
});

// إغلاق القائمة التلقائي عند الضغط على أي سيكشن في الموبايل
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const bars = document.querySelectorAll('.bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  });
});

// Scroll Reveal Animation (ظهور العناصر بسلاسة أثناء النزول)
window.addEventListener('scroll', revealElements);

function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 120; // المسافة بالبكسل قبل تفعيل الأنيميشن
    
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
}

// تشغيل الأنيميشن أول ما الصفحة تفتح للأقسام الظاهرة علطول
document.addEventListener('DOMContentLoaded', () => {
  revealElements();
});