<template>
  <div class="page-wrapper">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          
          <nav class="nav-menu">
            <router-link 
              v-for="(link, index) in navLinks" 
              :key="index"
              :to="link.path"
              class="nav-link"
            >
              {{ link.title }}
            </router-link>
          </nav>
          
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            ☰
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="main-content">
      <section class="hero">
        <div class="hero-content">
          <h1>Колледж имени И.И. Годовикова</h1>
          <p class="hero-subtitle">Качественное образование для вашего успешного будущего</p>
          <div class="hero-actions">
            <router-link to="/admission" class="cta-button">Подать заявку</router-link>
            <router-link to="/specialties" class="cta-button secondary">Специальности</router-link>
          </div>
        </div>
      </section>

      <!-- Key Facts -->
      <section class="key-facts">
        <div class="container">
          <div class="facts-grid">
            <div v-for="(fact, index) in keyFacts" :key="index" class="fact-card">
              <h3>{{ fact.value }}</h3>
              <p>{{ fact.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Specialties -->
      <section class="specialties-section">
        <div class="container">
          <h2>Популярные специальности</h2>
          <div class="specialties-grid">
            <div 
              v-for="(specialty, index) in popularSpecialties" 
              :key="index"
              class="specialty-card"
            >
              <h3>{{ specialty.name }}</h3>
              <div class="specialty-meta">
                <span>Срок обучения: {{ specialty.duration }}</span>
                <span>Бюджетные места: {{ specialty.budgetPlaces }}</span>
              </div>
              <p>{{ specialty.description }}</p>
              <router-link 
                :to="`/specialties/${specialty.id}`" 
                class="details-link"
              >
                Подробнее →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- News Preview -->
      <section class="news-preview">
        <div class="container">
          <h2>Последние новости</h2>
          <div class="news-list">
            <article 
              v-for="(news, index) in latestNews" 
              :key="index"
              class="news-item"
            >
              <div class="news-date">{{ formatDate(news.date) }}</div>
              <h3 class="news-title">{{ news.title }}</h3>
              <p class="news-excerpt">{{ news.excerpt }}</p>
              <router-link :to="`/news/${news.id}`" class="read-more">
                Читать полностью
              </router-link>
            </article>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h4>Колледж</h4>
            <nav class="footer-nav">
              <router-link 
                v-for="(link, index) in footerLinks" 
                :key="index"
                :to="link.path"
              >
                {{ link.title }}
              </router-link>
            </nav>
          </div>
          
          <div class="footer-column">
            <h4>Контакты</h4>
            <address class="contacts">
              <p>📍 {{ contacts.address }}</p>
              <p>📞 {{ contacts.phone }}</p>
              <p>✉️ {{ contacts.email }}</p>
            </address>
          </div>
          
          <div class="footer-column">
            <h4>Мы в соцсетях</h4>
            <div class="social-links">
              <a 
                v-for="(social, index) in socialLinks" 
                :key="index"
                :href="social.url"
                class="social-link"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      navLinks: [
        { title: 'О колледже', path: '/about' },
        { title: 'Образование', path: '/education' },
        { title: 'Абитуриентам', path: '/admission' },
        { title: 'Новости', path: '/news' },
        { title: 'Контакты', path: '/contacts' }
      ],
      keyFacts: [
        { value: '85+ лет', description: 'Опыта работы' },
        { value: '98%', description: 'Трудоустройство' },
        { value: '20+', description: 'Программ обучения' },
        { value: '1500+', description: 'Студентов' }
      ],
      popularSpecialties: [
        {
          id: 1,
          name: 'Информационные системы',
          duration: '2 г. 10 мес.',
          budgetPlaces: 25,
          description: 'Подготовка специалистов в области разработки ПО'
        },
        // ... другие специальности
      ],
      latestNews: [
        {
          id: 1,
          date: '2024-03-15',
          title: 'День открытых дверей',
          excerpt: 'Приглашаем абитуриентов на ознакомительный день...'
        },
        // ... другие новости
      ],
      footerLinks: [
        { title: 'Документы', path: '/documents' },
        { title: 'Вакансии', path: '/vacancies' },
        { title: 'Сотрудничество', path: '/partners' }
      ],
      contacts: {
        address: 'Москва, ул. Зорге, 4',
        phone: '+7 (499) 194-04-44',
        email: 'info@годовикова.рф'
      },
      socialLinks: [
        { name: 'ВКонтакте', url: '#' },
        { name: 'Telegram', url: '#' },
        { name: 'YouTube', url: '#' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      const nav = document.querySelector('.nav-menu');
      nav.classList.toggle('active');
    },
    formatDate(dateString) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    }
  }
}
</script>

<style scoped>
/* Базовые стили */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

}

.nav-menu {
  display: flex;
  gap: 30px;
}

.mobile-menu-btn {
  display: none;
}

/* Герой секция */
.hero {
  background: #f8f9fa;
  padding: 100px 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Кнопки */
.cta-button {
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button {
  background: #0056b3;
  color: white;
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #0056b3;
  color: #0056b3;
}

/* Сетки */
.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.specialties-grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Карточки */
.specialty-card {
  background: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.news-list {
  display: grid;
  gap: 30px;
}

/* Футер */
.footer {
  background: #2c3e50;
  color: white;
  padding: 50px 0;
  margin-top: 100px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .nav-menu.active {
    display: flex;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .hero {
    padding: 60px 0;
  }
  
  .hero-actions {
    flex-direction: column;
  }
}
</style>