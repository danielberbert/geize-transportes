let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100 / totalSlides;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    updateButtons();
}

// Função para mostrar o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Função para mostrar o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Função para atualizar os botões de navegação
function updateButtons() {
    const buttons = document.querySelectorAll('.carousel-buttons button');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
    });
}

// Função para definir a classe active no link da barra de navegação
function setActiveLink() {
    const links = document.querySelectorAll('.barra-navegacao a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

// Função para alternar o menu hambúrguer
function toggleMenu() {
    const nav = document.querySelector('.barra-navegacao');
    nav.classList.toggle('show');
}

// Função para adicionar a classe scrolled ao header ao rolar a página
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Função para desabilitar o carrossel em resoluções abaixo de 1200px
function disableCarouselOnSmallScreens() {
    const carousel = document.querySelector('.carousel');
    const header = document.querySelector('header');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    if (window.innerWidth <= 1200) {
        if (carousel) {
            carousel.style.display = 'none';
        }
        if (header) {
            header.classList.add('scrolled');
        }
        if (menuHamburguer) {
            menuHamburguer.style.display = 'block';
        }
    } else {
        if (carousel) {
            carousel.style.display = 'block';
        }
        if (header) {
            header.classList.remove('scrolled');
        }
        if (menuHamburguer) {
            menuHamburguer.style.display = 'none';
        }
    }
}

// Evento para mostrar o slide inicial quando o documento é carregado
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setActiveLink();
    setInterval(nextSlide, 7000); // Mudar de slide a cada 7 segundos

    // Adicionar evento de clique para o menu hambúrguer
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    menuHamburguer.addEventListener('click', toggleMenu);

    // Adicionar evento de scroll para o header
    window.addEventListener('scroll', handleScroll);

    // Desabilitar o carrossel em resoluções abaixo de 1200px
    disableCarouselOnSmallScreens();
    window.addEventListener('resize', disableCarouselOnSmallScreens);
});
