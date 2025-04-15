document.addEventListener('DOMContentLoaded', function() {
    // Animação suave para o scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar classe ativa ao item de menu atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Animação para os cards na página
    const cards = document.querySelectorAll('.card, .featured-item');
    
    function checkVisibility() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
            
            if (isVisible) {
                card.classList.add('visible');
            }
        });
    }
    
    // Adicionar classe 'visible' ao carregar e ao rolar
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // Botão para voltar ao topo
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&uarr;';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.display = 'none';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
}); 