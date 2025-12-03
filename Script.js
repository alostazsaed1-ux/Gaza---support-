// كود JavaScript للصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // إضافة تأثير عند التمرير لشريط التنقل
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // إضافة تأثيرات عند التمرير للعناصر
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // تطبيق التأثير على العناصر
    const animatedElements = document.querySelectorAll('.campaign-card, .step, .feature');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // زر التبرع في شريط التنقل
    const donateBtn = document.querySelector('.donate-btn');
    donateBtn.addEventListener('click', function() {
        document.getElementById('campaigns').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // تحديث التواريخ والمبالغ تلقائياً (محاكاة)
    function updateCampaignStats() {
        const campaigns = [
            { raised: 42800, target: 65000, progress: 65 },
            { raised: 21500, target: 50000, progress: 42 },
            { raised: 8400, target: 30000, progress: 28 }
        ];
        
        const statValues = document.querySelectorAll('.stat-value');
        
        // تحديث المبالغ المجمعة (زيادة وهمية صغيرة)
        campaigns.forEach((campaign, index) => {
            const increase = Math.floor(Math.random() * 50) + 10;
            const newRaised = campaign.raised + increase;
            const newProgress = Math.min(Math.round((newRaised / campaign.target) * 100), 100);
            
            // تحديث النص
            if (index === 0) {
                statValues[0].textContent = `$${newRaised.toLocaleString()}`;
                statValues[1].textContent = `${newProgress}%`;
                document.querySelectorAll('.progress')[0].style.width = `${newProgress}%`;
            } else if (index === 1) {
                statValues[2].textContent = `$${newRaised.toLocaleString()}`;
                statValues[3].textContent = `${newProgress}%`;
                document.querySelectorAll('.progress')[1].style.width = `${newProgress}%`;
            } else if (index === 2) {
                statValues[4].textContent = `$${newRaised.toLocaleString()}`;
                statValues[5].textContent = `${newProgress}%`;
                document.querySelectorAll('.progress')[2].style.width = `${newProgress}%`;
            }
        });
    }
    
    // تحديث الإحصائيات كل 30 ثانية (للتجربة فقط)
    setInterval(updateCampaignStats, 30000);
    
    // إضافة روابط حقيقية لحملات GoFundMe (يجب استبدالها بروابع حقيقية)
    const campaignLinks = document.querySelectorAll('.btn-secondary');
    campaignLinks.forEach((link, index) => {
        // هذه روابط وهمية لأغراض العرض، يجب استبدالها بروابط حقيقية
        const placeholderLinks = [
            'https://www.gofundme.com/f/gaza-medical-aid',
            'https://www.gofundme.com/f/gaza-food-shelter',
            'https://www.gofundme.com/f/gaza-education-support'
        ];
        link.href = placeholderLinks[index];
    });
    
    // تحسين التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة رسالة تحذير عند المغادرة
    window.addEventListener('beforeunload', function(e) {
        // يمكن إضافة رسالة هنا إذا لزم الأمر
    });
    
    // إضافة سنة التحديث التلقائية في التذييل
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
