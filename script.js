document.addEventListener('DOMContentLoaded', () => {
    // 创建星星
    createStars();
    
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    // 处理导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 移除所有活动状态
            document.querySelector('.navbar .active').classList.remove('active');
            document.querySelector('.active-section').classList.remove('active-section');
            
            // 添加新的活动状态
            link.parentElement.classList.add('active');
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.classList.add('active-section');
        });
    });

    // 处理页面加载时的哈希值
    const hash = window.location.hash;
    if (hash) {
        const targetLink = document.querySelector(`.navbar a[href="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
});

function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    // 创建200颗星星
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机大小
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // 随机位置
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // 随机动画延迟
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        starsContainer.appendChild(star);
    }
} 