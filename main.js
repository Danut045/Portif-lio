
// script.js
function contato() {
  const numeroWhatsApp = "+5541985243641"; // Coloque seu número aqui
  window.open(`https://wa.me/${numeroWhatsApp}?text=Olá! Quero um site incrível!`, '_blank');
}
// Adiciona scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// Alternar entre modo escuro e claro
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = '🌓';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.bottom = '20px';
toggleThemeButton.style.right = '20px';
toggleThemeButton.style.zIndex = '1000';
toggleThemeButton.style.background = '#ff9800';
toggleThemeButton.style.color = '#fff';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.borderRadius = '50%';
toggleThemeButton.style.padding = '10px';
toggleThemeButton.style.cursor = 'pointer';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
// Botão "Voltar ao Topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.zIndex = '1000';
backToTopButton.style.background = '#ff9800';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.padding = '10px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Animação ao rolar a página
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

