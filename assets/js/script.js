// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log("ISA Liwan Innovation Community website loaded");
    
    // 设置当前页面的导航激活状态
    setActiveNav();
    
    // 添加图片懒加载
    initLazyLoading();
    
    // 添加平滑滚动
    initSmoothScroll();
    
    // 初始化移动端菜单
    initMobileMenu();
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

// 移动端菜单功能
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    
    if (menuToggle && nav) {
        // 创建遮罩层（如果不存在）
        if (!overlay) {
            const newOverlay = document.createElement('div');
            newOverlay.className = 'overlay';
            document.body.appendChild(newOverlay);
        }
        
        const actualOverlay = document.querySelector('.overlay');
        
        // 切换菜单显示/隐藏
        function toggleMenu() {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            actualOverlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        }
        
        // 点击汉堡菜单
        menuToggle.addEventListener('click', toggleMenu);
        
        // 点击遮罩层关闭菜单
        actualOverlay.addEventListener('click', toggleMenu);
        
        // 点击导航链接关闭菜单（移动端）
        if (window.innerWidth <= 768) {
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (nav.classList.contains('active')) {
                        toggleMenu();
                    }
                });
            });
        }
        
        // 窗口大小改变时重置菜单状态
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                actualOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// 未来可以添加更多交互功能
function initInteractiveElements() {
    // 这里可以添加更多的交互功能
    console.log("Interactive elements initialized");
}