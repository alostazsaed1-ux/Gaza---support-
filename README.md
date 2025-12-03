<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>غزة في القلب - منصة تبرعات موثوقة لأهل غزة</title>
    <meta name="description" content="منصة تجمع حملات تبرع موثوقة على GoFundMe لدعم أهالي غزة. تبرع الآن لدعم الأسر المتضررة.">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
</head>
<body>
    <!-- شريط التنقل -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <a href="#" class="logo">
                    <i class="fas fa-heart"></i>
                    <span>غزة <strong>في القلب</strong></span>
                </a>
                <button class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <ul class="nav-links">
                <li><a href="#home"><i class="fas fa-home"></i> الرئيسية</a></li>
                <li><a href="#campaigns"><i class="fas fa-hand-holding-heart"></i> الحملات</a></li>
                <li><a href="#about"><i class="fas fa-info-circle"></i> عن المبادرة</a></li>
                <li><a href="#verify"><i class="fas fa-shield-alt"></i> التحقق</a></li>
                <li><a href="#contact"><i class="fas fa-envelope"></i> تواصل</a></li>
            </ul>
            <a href="#campaigns" class="donate-btn">
                <i class="fas fa-donate"></i> تبرع الآن
            </a>
        </div>
    </nav>

    <!-- قسم الهوم -->
    <section id="home" class="hero">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="hero-content animate__animated animate__fadeInUp">
                <h1 class="hero-title">يدٌ واحدة لا تصفق<br><span>لكنها تنتشل من الغرق</span></h1>
                <p class="hero-subtitle">منصة تجمع الحملات الموثوقة على GoFundMe لدعم الأسر المتضررة في غزة. كل تبرعك يصنع فرقاً.</p>
                <div class="hero-stats">
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span class="stat-number">150+</span>
                        <span class="stat-label">أسرة مستفيدة</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span class="stat-number">$75,000+</span>
                        <span class="stat-label">تم جمعها</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-check-circle"></i>
                        <span class="stat-number">100%</span>
                        <span class="stat-label">حملات موثوقة</span>
                    </div>
                </div>
                <div class="hero-buttons">
                    <a href="#campaigns" class="btn-primary">
                        <i class="fas fa-search"></i> استعرض الحملات
                    </a>
                    <a href="#verify" class="btn-secondary">
                        <i class="fas fa-shield-alt"></i> كيف نتحقق؟
                    </a>
                </div>
            </div>
            <div class="hero-image animate__animated animate__fadeIn">
                <div class="floating-icon">
                    <i class="fas fa-hands-helping"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- إشعار مهم -->
    <div class="notification">
        <div class="container">
            <i class="fas fa-exclamation-circle"></i>
            <p><strong>مهم:</strong> نحن لا نجمع تبرعات مباشرة، بل نوجهك لحملات GoFundMe الموثوقة بعد التحقق منها.</p>
            <button class="close-notification">&times;</button>
        </div>
    </div>

    <!-- قسم الحملات -->
    <section id="campaigns" class="campaigns">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">حملات التبرع النشطة</h2>
                <p class="section-subtitle">اختر حملة وساهم في صنع فرق</p>
                <div class="section-line"></div>
            </div>
            
            <!-- تصفية الحملات -->
            <div class="campaign-filters">
                <button class="filter-btn active" data-filter="all">الكل</button>
                <button class="filter-btn" data-filter="medical">دعم طبي</button>
                <button class="filter-btn" data-filter="food">مأوى وغذاء</button>
                <button class="filter-btn" data-filter="education">دعم تعليمي</button>
                <button class="filter-btn" data-filter="urgent">عاجل</button>
            </div>
            
            <div class="campaigns-grid">
                <!-- حملة 1 -->
                <div class="campaign-card" data-category="medical urgent">
                    <div class="campaign-badge">عاجل</div>
                    <div class="campaign-header">
                        <span class="campaign-category"><i class="fas fa-plus-square"></i> دعم طبي</span>
                        <span class="verified"><i class="fas fa-check-circle"></i> موثقة</span>
                    </div>
                    <h3 class="campaign-title">مستلزمات طبية عاجلة للمستشفيات</h3>
                    <p class="campaign-description">توفير أدوية ومستلزمات طبية أساسية للمستشفيات والعيادات المتضررة في غزة.</p>
                    
                    <div class="progress-container">
                        <div class="progress-info">
                            <span>تم جمعه: <strong>$42,800</strong></span>
                            <span>الهدف: <strong>$65,000</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 65%">
                                <span class="progress-text">65%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campaign-footer">
                        <div class="campaign-meta">
                            <span><i class="far fa-clock"></i> 3 أيام متبقية</span>
                            <span><i class="fas fa-user-friends"></i> 420 متبرع</span>
                        </div>
                        <a href="#" class="btn-donate" target="_blank">
                            <i class="fas fa-external-link-alt"></i> ساهم الآن
                        </a>
                    </div>
                </div>
                
                <!-- حملة 2 -->
                <div class="campaign-card" data-category="food">
                    <div class="campaign-header">
                        <span class="campaign-category"><i class="fas fa-home"></i> مأوى وغذاء</span>
                        <span class="verified"><i class="fas fa-check-circle"></i> موثقة</span>
                    </div>
                    <h3 class="campaign-title">سلال غذائية للأسر النازحة</h3>
                    <p class="campaign-description">توفير سلال غذائية شهرية وماء نقي لـ 500 أسرة نازحة في غزة.</p>
                    
                    <div class="progress-container">
                        <div class="progress-info">
                            <span>تم جمعه: <strong>$21,500</strong></span>
                            <span>الهدف: <strong>$50,000</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 42%">
                                <span class="progress-text">42%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campaign-footer">
                        <div class="campaign-meta">
                            <span><i class="far fa-clock"></i> 15 يوم متبقي</span>
                            <span><i class="fas fa-user-friends"></i> 210 متبرع</span>
                        </div>
                        <a href="#" class="btn-donate" target="_blank">
                            <i class="fas fa-external-link-alt"></i> ساهم الآن
                        </a>
                    </div>
                </div>
                
                <!-- حملة 3 -->
                <div class="campaign-card" data-category="education">
                    <div class="campaign-header">
                        <span class="campaign-category"><i class="fas fa-graduation-cap"></i> دعم تعليمي</span>
                        <span class="verified"><i class="fas fa-check-circle"></i> موثقة</span>
                    </div>
                    <h3 class="campaign-title">مستلزمات تعليمية لأطفال غزة</h3>
                    <p class="campaign-description">توفير حقائب ومستلزمات مدرسية لـ 1000 طفل متضرر في غزة.</p>
                    
                    <div class="progress-container">
                        <div class="progress-info">
                            <span>تم جمعه: <strong>$8,400</strong></span>
                            <span>الهدف: <strong>$30,000</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 28%">
                                <span class="progress-text">28%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campaign-footer">
                        <div class="campaign-meta">
                            <span><i class="far fa-clock"></i> 30 يوم متبقي</span>
                            <span><i class="fas fa-user-friends"></i> 95 متبرع</span>
                        </div>
                        <a href="#" class="btn-donate" target="_blank">
                            <i class="fas fa-external-link-alt"></i> ساهم الآن
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="campaigns-actions">
                <button class="btn-load-more">
                    <i class="fas fa-sync-alt"></i> تحميل المزيد من الحملات
                </button>
            </div>
        </div>
    </section>

    <!-- قسم كيف نتأكد -->
    <section id="verify" class="verify">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">كيف نتأكد من مصداقية الحملات؟</h2>
                <p class="section-subtitle">شفافية ومصداقية قبل كل شيء</p>
                <div class="section-line"></div>
            </div>
            
            <div class="verification-process">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <div class="step-icon">
                        <i class="fas fa-user-check"></i>
                    </div>
                    <h3>فحص المنظم</h3>
                    <p>نتحقق من هوية المنظم، تاريخه، وحملاته السابقة على المنصة.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">2</div>
                    <div class="step-icon">
                        <i class="fas fa-file-contract"></i>
                    </div>
                    <h3>مراجعة التفاصيل</h3>
                    <p>نتأكد من وضوح الهدف، المبلغ المطلوب، وخطة توزيع المساعدات.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">3</div>
                    <div class="step-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>متابعة التحديثات</h3>
                    <p>نختار الحملات التي تقدم تحديثات دورية عن سير العمل.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">4</div>
                    <div class="step-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>ضمان GoFundMe</h3>
                    <p>جميع التبرعات محمية بضمان استرداد الأموال في حالات محددة.</p>
                </div>
            </div>
            
            <div class="verification-note">
                <div class="note-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div class="note-content">
                    <h4>نصيحة للمتبرع</h4>
                    <p>قبل التبرع، اقرأ تفاصيل الحملة جيداً، تحقق من تحديثات المنظم، ولا تتردد في طرح أسئلة عبر قسم التعليقات في صفحة الحملة.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم عن المبادرة -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">رسالتنا وأهدافنا</h2>
                    <p>في خضم المعاناة الإنسانية التي يعيشها أهل غزة، تظهر العديد من الحملات الخيرية. مهمتنا هي جمع الحملات الموثوقة والمتحقق منها في مكان واحد، لتسهيل عملية العطاء وضمان وصول تبرعاتكم لمستحقيها.</p>
                    
                    <div class="about-values">
                        <div class="value-item">
                            <i class="fas fa-eye"></i>
                            <h4>شفافية</h4>
                            <p>نؤمن بأن الشفافية أساس الثقة</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-bullseye"></i>
                            <h4>تأثير</h4>
                            <p>كل تبرع يصنع فرقاً حقيقياً</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-handshake"></i>
                            <h4>مسؤولية</h4>
                            <p>نتحمل مسؤولية التحقق نيابة عنكم</p>
                        </div>
                    </div>
                </div>
                
                <div class="about-image">
                    <div class="about-stats">
                        <div class="stat-box">
                            <i class="fas fa-hands-helping"></i>
                            <div class="stat-content">
                                <span class="stat-number">50+</span>
                                <span class="stat-label">حملة موثقة</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <i class="fas fa-users"></i>
                            <div class="stat-content">
                                <span class="stat-number">2,500+</span>
                                <span class="stat-label">متبرع عبر المنصة</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <i class="fas fa-check-circle"></i>
                            <div class="stat-content">
                                <span class="stat-number">100%</span>
                                <span class="stat-label">حملات تحت المراقبة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم الأسئلة الشائعة -->
    <section class="faq">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">أسئلة شائعة</h2>
                <p class="section-subtitle">إجابات على استفساراتكم</p>
                <div class="section-line"></div>
            </div>
            
            <div class="faq-container">
                <div class="faq-item">
                    <button class="faq-question">
                        <span>هل تجمعون تبرعات مباشرة؟</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>لا، نحن لا نجمع تبرعات مباشرة أبداً. دورنا هو توجيهكم لحملات GoFundMe الموثوقة بعد التحقق منها. جميع التبرعات تتم مباشرة على منصة GoFundMe.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <button class="faq-question">
                        <span>كيف تتحققون من الحملات؟</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>نتبع عملية تحقق من 4 خطوات: فحص المنظم، مراجعة التفاصيل، متابعة التحديثات، والاعتماد على ضمان GoFundMe. نرفض 70% من الحملات التي نراجعها.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <button class="faq-question">
                        <span>هل يمكنني اقتراح حملة لإضافتها؟</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>نعم، نرحب باقتراحاتكم عبر صفحة التواصل. سنقوم بمراجعة الحملة وإضافتها إذا اجتازت معايير التحقق.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- تذييل الصفحة -->
    <footer id="contact" class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <div class="footer-logo">
                            <i class="fas fa-heart"></i>
                            <span>غزة في القلب</span>
                        </div>
                        <p class="footer-description">منصة توجيهية تجمع حملات تبرع موثوقة لأهل غزة على منصة GoFundMe.</p>
                        <div class="footer-social">
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-telegram"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-col">
                        <h4 class="footer-title">روابط سريعة</h4>
                        <ul class="footer-links">
                            <li><a href="#home"><i class="fas fa-chevron-left"></i> الرئيسية</a></li>
                            <li><a href="#campaigns"><i class="fas fa-chevron-left"></i> جميع الحملات</a></li>
                            <li><a href="#verify"><i class="fas fa-chevron-left"></i> كيفية التحقق</a></li>
                            <li><a href="#about"><i class="fas fa-chevron-left"></i> عن المبادرة</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-col">
                        <h4 class="footer-title">مصادر مفيدة</h4>
                        <ul class="footer-links">
                            <li><a href="https://www.gofundme.com" target="_blank"><i class="fas fa-external-link-alt"></i> GoFundMe الرسمي</a></li>
                            <li><a href="#" target="_blank"><i class="fas fa-file-pdf"></i> دليل التبرع الآمن</a></li>
                            <li><a href="#" target="_blank"><i class="fas fa-question-circle"></i> الأسئلة الشائعة</a></li>
                            <li><a href="#" target="_blank"><i class="fas fa-shield-alt"></i> سياسة الخصوصية</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-col">
                        <h4 class="footer-title">اتصل بنا</h4>
                        <div class="contact-info">
                            <p><i class="fas fa-envelope"></i> <a href="mailto:contact@gazasupport.com">contact@gazasupport.com</a></p>
                            <p><i class="fas fa-comment-alt"></i> للاقتراحات والمقترحات</p>
                        </div>
                        <div class="newsletter">
                            <p>اشترك في نشرتنا الإخبارية</p>
                            <div class="newsletter-form">
                                <input type="email" placeholder="بريدك الإلكتروني">
                                <button type="submit"><i class="fas fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; <span id="current-year">2023</span> غزة في القلب. جميع الحقوق محفوظة.</p>
                    <p class="disclaimer">هذه منصة توجيهية ولا تجمع تبرعات مباشرة. GoFundMe هي علامة تجارية مسجلة.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- زر العودة للأعلى -->
    <button class="scroll-top">
        <i class="fas fa-chevron-up"></i>
    </button>

    <script src="script.js"></script>
</body>
</html>                <i class="fas fa-donate"></i> تبرع الآن
            </a>
        </div>
    </nav>

    <!-- قسم الهوم -->
    <section id="home" class="hero">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="hero-content animate__animated animate__fadeInUp">
                <h1 class="hero-title">يدٌ واحدة لا تصفق<br><span>لكنها تنتشل من الغرق</span></h1>
                <p class="hero-subtitle">منصة تجمع الحملات الموثوقة على GoFundMe لدعم الأسر المتضررة في غزة. كل تبرعك يصنع فرقاً.</p>
                <div class="hero-stats">
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span class="stat-number">150+</span>
                        <span class="stat-label">أسرة مستفيدة</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span class="stat-number">$75,000+</span>
                        <span class="stat-label">تم جمعها</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-check-circle"></i>
                        <span class="stat-number">100%</span>
                        <span class="stat-label">حملات موثوقة</span>
                    </div>
                </div>
                <div class="hero-buttons">
                    <a href="#campaigns" class="btn-primary">
                        <i class="fas fa-search"></i> استعرض الحملات
                    </a>
                    <a href="#verify" class="btn-secondary">
                        <i class="fas fa-shield-alt"></i> كيف نتحقق؟
                    </a>
                </div>
            </div>
            <div class="hero-image animate__animated animate__fadeIn">
                <div class="floating-icon">
                    <i class="fas fa-hands-helping"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- إشعار مهم -->
    <div class="notification">
        <div class="container">
            <i class="fas fa-exclamation-circle"></i>
            <p><strong>مهم:</strong> نحن لا نجمع تبرعات مباشرة، بل نوجهك لحملات GoFundMe الموثوقة بعد التحقق منها.</p>
            <button class="close-notification">&times;</button>
        </div>
    </div>

    <!-- قسم الحملات -->
    <section id="campaigns" class="campaigns">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">حملات التبرع النشطة</h2>
                <p class="section-subtitle">اختر حملة وساهم في صنع فرق</p>
                <div class="section-line"></div>
            </div>
            
            <!-- تصفية الحملات -->
            <div class="campaign-filters">
                <button class="filter-btn active" data-filter="all">الكل</button>
                <button class="filter-btn" data-filter="medical">دعم طبي</button>
                <button class="filter-btn" data-filter="food">مأوى وغذاء</button>
                <button class="filter-btn" data-filter="education">دعم تعليمي</button>
                <button class="filter-btn" data-filter="urgent">عاجل</button>
            </div>
            
            <div class="campaigns-grid">
                <!-- حملة 1 -->
                <div class="campaign-card" data-category="medical urgent">
                    <div class="campaign-badge">عاجل</div>
                    <div class="campaign-header">
                        <span class="campaign-category"><i class="fas fa-plus-square"></i> دعم طبي</span>
                        <span class="verified"><i class="fas fa-check-circle"></i> موثقة</span>
                    </div>
                    <h3 class="campaign-title">مستلزمات طبية عاجلة للمستشفيات</h3>
                    <p class="campaign-description">توفير أدوية ومستلزمات طبية أساسية للمستشفيات والعيادات المتضررة في غزة.</p>
                    
                    <div class="progress-container">
                        <div class="progress-info">
                            <span>تم جمعه: <strong>$42,800</strong></span>
                            <span>الهدف: <strong>$65,000</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 65%">
                                <span class="progress-text">65%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campaign-footer">
                        <div class="campaign-meta">
                            <span><i class="far fa-clock"></i> 3 أيام متبقية</span>
                            <span><i class="fas fa-user-friends"></i> 420 متبرع</span>
                        </div>
                        <a href="#" class="btn-donate" target="_blank">
                            <i class="fas fa-external-link-alt"></i> ساهم الآن
                        </a>
                    </div>
                </div>
                
                <!-- حملة 2 -->
                <div class="campaign-card" data-category="food">
                    <div class="campaign-header">
                        <span class="campaign-category"><i class="fas fa-home"></i> مأوى وغذاء</span>
                        <span class="verified"><i class="fas fa-check-circle"></i> موثقة</span>
                    </div>
                    <h3 class="campaign-title">سلال غذائية للأسر النازحة</h3>
                    <p class="campaign-description">توفير سلال غذائية شهرية وماء نقي لـ 500 أسرة نازحة في غزة.</p>
                    
                    <div class="progress-container">
                        <div class="progress-info">
                            <span>تم جمعه: <strong>$21,500</strong></span>
                            <span>الهدف: <strong>$50,000</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 42%">
                                <span class="progress-text">42%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campaign-footer">
                        <div class="campaign-meta">
                            <span><i class="far fa-clock"></i> 15 يوم متبقي</span>
                            <span><i class="fas fa-user-friends"></i> 210 متبرع</span>
                        </div>
                        <a href="#" class="btn-donate" target="_blank">
                            <i class="fas fa-external-link-alt"></i> ساهم الآن
                        </a>
                    </div>
                </div>
                
                <!-- حملة 3 -->
                <div class="campaign-card" data-category="education">
                    <div class="campaign-header">
                        <span class="campaign-category"><i class="fas fa-graduation-cap"></i> دعم تعليمي</span>
                        <span class="verified"><i class="fas fa-check-circle"></i> موثقة</span>
                    </div>
                    <h3 class="campaign-title">مستلزمات تعليمية لأطفال غزة</h3>
                    <p class="campaign-description">توفير حقائب ومستلزمات مدرسية لـ 1000 طفل متضرر في غزة.</p>
                    
                    <div class="progress-container">
                        <div class="progress-info">
                            <span>تم جمعه: <strong>$8,400</strong></span>
                            <span>الهدف: <strong>$30,000</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 28%">
                                <span class="progress-text">28%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campaign-footer">
                        <div class="campaign-meta">
                            <span><i class="far fa-clock"></i> 30 يوم متبقي</span>
                            <span><i class="fas fa-user-friends"></i> 95 متبرع</span>
                        </div>
                        <a href="#" class="btn-donate" target="_blank">
                            <i class="fas fa-external-link-alt"></i> ساهم الآن
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="campaigns-actions">
                <button class="btn-load-more">
                    <i class="fas fa-sync-alt"></i> تحميل المزيد من الحملات
                </button>
            </div>
        </div>
    </section>

    <!-- قسم كيف نتأكد -->
    <section id="verify" class="verify">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">كيف نتأكد من مصداقية الحملات؟</h2>
                <p class="section-subtitle">شفافية ومصداقية قبل كل شيء</p>
                <div class="section-line"></div>
            </div>
            
            <div class="verification-process">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <div class="step-icon">
                        <i class="fas fa-user-check"></i>
                    </div>
                    <h3>فحص المنظم</h3>
                    <p>نتحقق من هوية المنظم، تاريخه، وحملاته السابقة على المنصة.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">2</div>
                    <div class="step-icon">
                        <i class="fas fa-file-contract"></i>
                    </div>
                    <h3>مراجعة التفاصيل</h3>
                    <p>نتأكد من وضوح الهدف، المبلغ المطلوب، وخطة توزيع المساعدات.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">3</div>
                    <div class="step-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>متابعة التحديثات</h3>
                    <p>نختار الحملات التي تقدم تحديثات دورية عن سير العمل.</p>
                </div>
                
                <div class="process-step">
                    <div class="step-number">4</div>
                    <div class="step-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>ضمان GoFundMe</h3>
                    <p>جميع التبرعات محمية بضمان استرداد الأموال في حالات محددة.</p>
                </div>
            </div>
            
            <div class="verification-note">
                <div class="note-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div class="note-content">
                    <h4>نصيحة للمتبرع</h4>
                    <p>قبل التبرع، اقرأ تفاصيل الحملة جيداً، تحقق من تحديثات المنظم، ولا تتردد في طرح أسئلة عبر قسم التعليقات في صفحة الحملة.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم عن المبادرة -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">رسالتنا وأهدافنا</h2>
                    <p>في خضم المعاناة الإنسانية التي يعيشها أهل غزة، تظهر العديد من الحملات الخيرية. مهمتنا هي جمع الحملات الموثوقة والمتحقق منها في مكان واحد، لتسهيل عملية العطاء وضمان وصول تبرعاتكم لمستحقيها.</p>
                    
                    <div class="about-values">
                        <div class="value-item">
                            <i class="fas fa-eye"></i>
                            <h4>شفافية</h4>
                            <p>نؤمن بأن الشفافية أساس الثقة</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-bullseye"></i>
                            <h4>تأثير</h4>
                            <p>كل تبرع يصنع فرقاً حقيقياً</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-handshake"></i>
                            <h4>مسؤولية</h4>
                            <p>نتحمل مسؤولية التحقق نيابة عنكم</p>
                        </div>
                    </div>
                </div>
                
                <div class="about-image">
                    <div class="about-stats">
                        <div class="stat-box">
                            <i class="fas fa-hands-helping"></i>
                            <div class="stat-content">
                                <span class="stat-number">50+</span>
                                <span class="stat-label">حملة موثقة</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <i class="fas fa-users"></i>
                            <div class="stat-content">
                                <span class="stat-number">2,500+</span>
                                <span class="stat-label">متبرع عبر المنصة</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <i class="fas fa-check-circle"></i>
                            <div class="stat-content">
                                <span class="stat-number">100%</span>
                                <span class="stat-label">حملات تحت المراقبة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم الأسئلة الشائعة -->
    <section class="faq">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">أسئلة شائعة</h2>
                <p class="section-subtitle">إجابات على استفساراتكم</p>
                <div class="section-line"></div>
            </div>
            
            <div class="faq-container">
                <div class="faq-item">
                    <button class="faq-question">
                        <span>هل تجمعون تبرعات مباشرة؟</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>لا، نحن لا نجمع تبرعات مباشرة أبداً. دورنا هو توجيهكم لحملات GoFundMe الموثوقة بعد التحقق منها. جميع التبرعات تتم مباشرة على منصة GoFundMe.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <button class="faq-question">
                        <span>كيف تتحققون من الحملات؟</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>نتبع عملية تحقق من 4 خطوات: فحص المنظم، مراجعة التفاصيل، متابعة التحديثات، والاعتماد على ضمان GoFundMe. نرفض 70% من الحملات التي نراجعها.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <button class="faq-question">
                        <span>هل يمكنني اقتراح حملة لإضافتها؟</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>نعم، نرحب باقتراحاتكم عبر صفحة التواصل. سنقوم بمراجعة الحملة وإضافتها إذا اجتازت معايير التحقق.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- تذييل الصفحة -->
    <footer id="contact" class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <div class="footer-logo">
                            <i class="fas fa-heart"></i>
                            <span>غزة في القلب</span>
                        </div>
                        <p class="footer-description">منصة توجيهية تجمع حملات تبرع موثوقة لأهل غزة على منصة GoFundMe.</p>
                        <div class="footer-social">
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-telegram"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-col">
                        <h4 class="footer-title">روابط سريعة</h4>
                        <ul class="footer-links">
                            <li><a href="#home"><i class="fas fa-chevron-left"></i> الرئيسية</a></li>
                            <li><a href="#campaigns"><i class="fas fa-chevron-left"></i> جميع الحملات</a></li>
                            <li><a href="#verify"><i class="fas fa-chevron-left"></i> كيفية التحقق</a></li>
                            <li><a href="#about"><i class="fas fa-chevron-left"></i> عن المبادرة</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-col">
                        <h4 class="footer-title">مصادر مفيدة</h4>
                        <ul class="footer-links">
                            <li><a href="https://www.gofundme.com" target="_blank"><i class="fas fa-external-link-alt"></i> GoFundMe الرسمي</a></li>
                            <li><a href="#" target="_blank"><i class="fas fa-file-pdf"></i> دليل التبرع الآمن</a></li>
                            <li><a href="#" target="_blank"><i class="fas fa-question-circle"></i> الأسئلة الشائعة</a></li>
                            <li><a href="#" target="_blank"><i class="fas fa-shield-alt"></i> سياسة الخصوصية</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-col">
                        <h4 class="footer-title">اتصل بنا</h4>
                        <div class="contact-info">
                            <p><i class="fas fa-envelope"></i> <a href="mailto:contact@gazasupport.com">contact@gazasupport.com</a></p>
                            <p><i class="fas fa-comment-alt"></i> للاقتراحات والمقترحات</p>
                        </div>
                        <div class="newsletter">
                            <p>اشترك في نشرتنا الإخبارية</p>
                            <div class="newsletter-form">
                                <input type="email" placeholder="بريدك الإلكتروني">
                                <button type="submit"><i class="fas fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; <span id="current-year">2023</span> غزة في القلب. جميع الحقوق محفوظة.</p>
                    <p class="disclaimer">هذه منصة توجيهية ولا تجمع تبرعات مباشرة. GoFundMe هي علامة تجارية مسجلة.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- زر العودة للأعلى -->
    <button class="scroll-top">
        <i class="fas fa-chevron-up"></i>
    </button>

    <script src="script.js"></script>
</body>
</html>
