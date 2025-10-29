// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log("ISA Liwan Innovation Community website loaded");
    
    // 设置当前页面的导航激活状态
    setActiveNav();
    
    // 添加图片懒加载
    initLazyLoading();
    
    // 添加平滑滚动
    initSmoothScroll();
});

// 设置当前页面的导航激活状态
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.classList.contains('lazy')) {
            imageObserver.observe(img);
        }
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 未来可以添加更多交互功能
function initInteractiveElements() {
    // 这里可以添加更多的交互功能
    console.log("Interactive elements initialized");
}
