class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.list = document.getElementById('carouselList');
        this.activeIndicator = document.getElementById('activeIndicator');

        this.cards = [];
        this.currentCardIndex = 0;

        this.init();
    }

    init() {
      fetch('/api/designers') // Предполагаемый API endpoint для получения данных
        .then(response => response.json())
        .then(data => {
            data.designers.forEach((designer, index) => {
                this.addCard(designer, index);
            });
            this.setupEventListeners();
        })
        .catch(error => console.error('Error:', error));
    }
  
    addCard(cardData, index) {
        const card = document.createElement('li');
        card.className = 'carousel-card';
        card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${cardData.name}</h5>
            <img src="${cardData.avatarUrl}" alt="${cardData.name}">
            <p>Followers: ${cardData.followersCount}</p>
            </div>
        `;
        this.list.appendChild(card);
  
        if (index === 0) {
            this.activeCard = card;
        }
        }
  
    next() {
        this.currentCardIndex++;
        if (this.currentCardIndex >= this.cards.length) {
            this.currentCardIndex = 0;
        }
        this.updateActiveCard();
    }
  
    prev() {
        this.currentCardIndex--;
        if (this.currentCardIndex < 0) {
            this.currentCardIndex = this.cards.length - 1;
        }
        this.updateActiveCard();
    }
  
    updateActiveCard() {
        this.activeCard.classList.remove('active');
        this.activeCard = this.cards[this.currentCardIndex];
        this.activeCard.classList.add('active');
        this.updateIndicator();
    }
  
    updateIndicator() {
        const indicator = this.activeCard.querySelector('.card-title');
        this.activeIndicator.style.left = `${indicator.offsetLeft + 10}px`;
        this.activeIndicator.style.width = `${indicator.offsetWidth}px`;
        }
  
    setupEventListeners() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
  
        prevBtn.addEventListener('click', () => this.prev());
        nextBtn.addEventListener('click', () => this.next());
  
      setInterval(() => this.next(), 5000); // Автоматическое переключение каждые 5 секунд
    }
  }
  
  // Инициализация карусели
  new Carousel('carousel-container');