// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Sabitler ve Elementler
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.header');
    const simulationCardsContainer = document.getElementById('simulation-cards');
    const aiCodeContent = document.getElementById('ai-code-content');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // Yardımcı Fonksiyonlar
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const displayFormMessage = (message, type) => {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 3000);
    };

    // Modüller

    // Mobil Menü Yönetimi
    const handleMobileMenu = () => {
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                header.classList.toggle('mobile-menu-active');
                const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
                mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            });
        }
    };

    
  
  
  
  
  
  const simulationDemo = () => {
    const simulationCardsContainer = document.getElementById('simulation-cards');
    if (!simulationCardsContainer) return;

    const statuses = ['success', 'error', 'pending'];
    const actions = ['Eğitimden çıkarıldı', 'Test sonucu', 'Video izleme süresi', 'Yeni kayıt', 'Ödev gönderildi'];
    const users = ['mustafa@...', 'ayse@...', 'ali@...', 'fatma@...', 'osman@...', 'selin@...', 'kaan@...'];
    const icons = {
        'Eğitimden çıkarıldı': '❌',
        'Test sonucu': '📊',
        'Video izleme süresi': '⏱️',
        'Yeni kayıt': '🎉',
        'Ödev gönderildi': '📝'
    };

    const maxCards = 5;
    let cardCount = 0;
    let simulationInterval;
    let initialHeightSet = false; // Yüksekliğin ayarlanıp ayarlanmadığını kontrol eder

    const createSimulationCard = () => {
        const card = document.createElement('div');
        card.classList.add('simulation-card');
        const user = getRandomElement(users);
        const actionType = getRandomElement(actions);
        let statusText = '';
        let statusClass = '';
        const icon = icons[actionType] || '';

        if (actionType === 'Eğitimden çıkarıldı') {
            statusText = 'Başarısız';
            statusClass = 'error';
        } else if (actionType === 'Test sonucu') {
            const score = Math.floor(Math.random() * 101);
            statusText = `%${score}`;
            statusClass = score > 60 ? 'success' : 'error';
        } else if (actionType === 'Video izleme süresi') {
            const watched = Math.floor(Math.random() * 11);
            const total = 10;
            statusText = `${watched}/${total} dk`;
            statusClass = watched >= total ? 'success' : 'pending';
        } else {
            statusText = 'Tamamlandı';
            statusClass = 'success';
        }

        card.innerHTML = `
            <span>Kullanıcı: ${user}</span>
            <span class="simulation-card-status ${statusClass}">${actionType}: ${statusText} ${icon}</span>
        `;
        return card;
    };

    const addCard = () => {
        const newCard = createSimulationCard();
        simulationCardsContainer.prepend(newCard);
        cardCount++;

        // Eğer kart sayısı maxCards'ı aşarsa, en eski kartı sil
        if (cardCount > maxCards) {
            simulationCardsContainer.removeChild(simulationCardsContainer.lastChild);
            cardCount--;
        }

        // İlk yükseklik ayarı
        if (!initialHeightSet) {
            const firstCardHeight = newCard.offsetHeight;
            simulationCardsContainer.style.maxHeight = `${firstCardHeight * maxCards}px`;
            initialHeightSet = true;
        }
    };

    const startSimulation = () => {
        simulationInterval = setInterval(addCard, 3000);
    };

    const stopSimulation = () => {
        clearInterval(simulationInterval);
    };

    let canSimulate = true;
    const simulationThrottleTime = 1000;

    const handleSimulationVisibility = () => {
        if (document.visibilityState === 'visible' && canSimulate) {
            startSimulation();
            canSimulate = false;
            setTimeout(() => {
                canSimulate = true;
            }, simulationThrottleTime);
        } else {
            stopSimulation();
        }
    };

    document.addEventListener('visibilitychange', handleSimulationVisibility);
    handleSimulationVisibility(); // Sayfa ilk yüklendiğinde simülasyonu başlat

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
};

document.addEventListener('DOMContentLoaded', simulationDemo);

  
  
  
  


  
  
  
  
    // AI Destek Animasyonu Yönetimi
// AI Destek Animasyonu Yönetimi
const aiSupportAnimation = () => {
    const aiCodeContent = document.getElementById('ai-code-content');
    if (aiCodeContent) {
        const aiData = [
            `{`,
            ` "belge": "egitim_materyali.pdf",`,
            ` "islem": "soru_uretiliyor",`,
            ` "soru_tipi": "coktan_secmeli",`,
            ` "ilerleme": "25%"`,
            `}`,
            `{`,
            ` "belge": "performans_raporu.xlsx",`,
            ` "islem": "veri_ayiklaniyor",`,
            ` "sutun": "Tamamlanma Oranı",`,
            ` "durum": "devam ediyor..."`,
            `}`,
            `{`,
            ` "belge": "kullanici_geri_bildirimi.txt",`,
            ` "islem": "duygu_analizi",`,
            ` "pozitif": "85%",`,
            ` "negatif": "15%"`,
            `}`,
            `{`,
            ` "belge": "yeni_kullanici.json",`,
            ` "islem": "kayit_olundu",`,
            ` "detaylar": { "ad": "Ahmet", "soyad": "Yılmaz" }`,
            `}`
        ];
        let aiIndex = 0;
        let animationInterval;
        let maxLineLength = 0;

        const findMaxLineLength = () => {
            aiData.forEach(item => {
                const lineLength = item.length;
                if (lineLength > maxLineLength) {
                    maxLineLength = lineLength;
                }
            });
        };

        const highlightCode = (code) => {
            return code.replace(/("([^"]*)")|([{},:])/g, (match, p1, p2, p3) => {
                if (p1) return `<span class="code-string">${match}</span>`;
                if (p3) return `<span class="code-keyword">${match}</span>`;
                return match;
            });
        };

        const addAiLine = () => {
            if (aiIndex < aiData.length * 2) {
                const line = document.createElement('div');
                line.classList.add('ai-code-line');
                let lineContent = `<span class="ai-code-number">${(aiIndex % aiData.length) + 1}</span><span class="ai-code-text">${highlightCode(aiData[aiIndex % aiData.length])}</span>`;

                // Satır içeriğinin uzunluğunu hesapla
                const currentLineLength = aiData[aiIndex % aiData.length].length;
                let padding = '';
                if (currentLineLength < maxLineLength) {
                    for (let i = 0; i < (maxLineLength - currentLineLength); i++) {
                        padding += '&nbsp;';
                    }
                }
                lineContent += padding; //satır sonuna boşlukları ekle
                line.innerHTML = lineContent;
                
                aiCodeContent.appendChild(line);
                aiCodeContent.scrollTop = aiCodeContent.scrollHeight;
                aiIndex++;
            } else {
                clearInterval(animationInterval);
            }
        };

        const startAiAnimation = () => {
            findMaxLineLength();
            animationInterval = setInterval(addAiLine, 1000);
        };

        const stopAiAnimation = () => {
            clearInterval(animationInterval);
        };

        // Sayfa görünürlüğüne göre animasyonu başlat/durdur (Debounce uygula)
        let aiAnimationTimeout;
        const aiAnimationDebounceTime = 500;

        const handleAiVisibility = () => {
            clearTimeout(aiAnimationTimeout);
            aiAnimationTimeout = setTimeout(() => {
                if (document.visibilityState === 'visible') {
                    startAiAnimation();
                } else {
                    stopAiAnimation();
                }
            }, aiAnimationDebounceTime);
        };

        document.addEventListener('visibilitychange', handleAiVisibility);
        handleAiVisibility();
    }
};

window.onload = () => {
    aiSupportAnimation();
};








    

    // İletişim Formu Yönetimi
    const handleContactForm = () => {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const messageInput = document.getElementById('message');

                let hasError = false;

                if (!nameInput.value.trim()) {
                    displayFormMessage('Lütfen adınızı ve soyadınızı girin.', 'error');
                    hasError = true;
                }

                if (!emailInput.value.trim()) {
                    displayFormMessage('Lütfen e-posta adresinizi girin.', 'error');
                    hasError = true;
                } else if (!isValidEmail(emailInput.value.trim())) {
                    displayFormMessage('Geçerli bir e-posta adresi girin.', 'error');
                    hasError = true;
                }

                if (!messageInput.value.trim()) {
                    displayFormMessage('Lütfen mesajınızı girin.', 'error');
                    hasError = true;
                }

                if (!hasError) {
                    // Gerçek form gönderimi buraya yapılacak (fetch API vb.)
                    console.log('Form gönderiliyor:', {
                        name: nameInput.value,
                        email: emailInput.value,
                        message: messageInput.value
                    });

                    // Sahte başarılı yanıt simülasyonu
                    displayFormMessage('Mesajınız başarıyla gönderildi! Teşekkür ederiz.', 'success');
                    contactForm.reset();

                    // Form geri bildirim animasyonu (basit bir örnek)
                    formStatus.classList.add('form-submitted');
                    setTimeout(() => {
                        formStatus.classList.remove('form-submitted');
                    }, 2000);
                }
            });
        }
    };

    // Swiper Başlatma Kontrolü
    const initSwiper = () => {
        const testimonialsSlider = document.querySelector('.testimonials-slider');
        if (testimonialsSlider && typeof Swiper !== 'undefined') {
            new Swiper(testimonialsSlider, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });
        } else {
            console.warn('Swiper kütüphanesi yüklenmemiş veya element bulunamadı.');
        }
    };

    // AOS Başlatma Kontrolü
    const initAOS = () => {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out-quad',
                once: true
            });
        } else {
            console.warn('AOS kütüphanesi yüklenmemiş.');
        }
    };

    // Başlat
    handleMobileMenu();
    simulationDemo();
    handleContactForm();
    initSwiper();
    initAOS();
});

const header = document.querySelector('.header');
const toggleButton = document.querySelector('.mobile-menu-toggle');
const closeButton = document.querySelector('.mobile-menu-close');

toggleButton.addEventListener('click', () => {
  header.classList.toggle('mobile-menu-active');
});

closeButton.addEventListener('click', () => {
  header.classList.remove('mobile-menu-active');
});

