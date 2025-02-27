<template>
    <div class="page-wrapper">
      <!-- Общий хедер -->
      <header class="header">
        <!-- Повторяется как на главной -->
      </header>
  
      <main class="main-content">
        <div class="container">
          <!-- Заголовок страницы -->
          <RouterLink to="/">
        <button class="gohome">На главную</button>
      </RouterLink>
          <section class="page-header">
            <h1 class="page-title">Образовательные программы</h1>
            <p class="page-subtitle">Качественное образование для профессионального успеха</p>
          </section>
  
          <!-- Основной контент -->
          <div class="education-content">
            <!-- Фильтры -->
            <div class="filters">
              <button 
                v-for="filter in filters"
                :key="filter.value"
                :class="['filter-btn', { active: activeFilter === filter.value }]"
                @click="setFilter(filter.value)"
              >
                {{ filter.label }}
              </button>
            </div>
  
            <!-- Программы обучения -->
            <section class="programs-section">
              <div class="programs-grid">
                <div 
                  v-for="program in filteredPrograms"
                  :key="program.id"
                  class="program-card"
                >
                  <div class="program-header">
                    <h3>{{ program.title }}</h3>
                    <span class="program-type" :class="program.type">
                      {{ programTypeLabels[program.type] }}
                    </span>
                  </div>
                  <div class="program-body">
                    <div class="program-info">
                      <div class="info-item">
                        <span>{{ program.duration }}</span>
                      </div>
                      <div class="info-item">
                        <span>{{ formatLabels[program.format] }}</span>
                      </div>
                      <div class="info-item">
                        <span>{{ program.level }}</span>
                      </div>
                    </div>
                    <div class="program-description">
                      <p>{{ program.description }}</p>
                    </div>
                    <div class="program-actions">
                      <router-link 
                        :to="`/education/${program.id}`"
                        class="details-btn"
                      >
                        Подробнее
                      </router-link>
                      <a 
                        v-if="program.curriculum"
                        :href="program.curriculum"
                        class="download-btn"
                        target="_blank"
                      >
                        Учебный план
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- Дополнительное образование -->
            <section class="additional-education">
              <div class="section-header">
                <h2>Дополнительное образование</h2>
                <div class="decoration-line"></div>
              </div>
              <div class="courses-grid">
                <div 
                  v-for="course in additionalCourses"
                  :key="course.id"
                  class="course-card"
                >
                  <h3>{{ course.title }}</h3>
                  <div class="course-meta">
                    <span>{{ course.duration }}</span>
                    <span>{{ course.price }} ₽</span>
                  </div>
                  <p>{{ course.description }}</p>
                  <button 
                    class="enroll-btn"
                    @click="openEnrollment(course)"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
  
      <!-- Общий футер -->
      <footer class="footer">
        <!-- Повторяется как на главной -->
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EducationPage',
    data() {
      return {
        activeFilter: 'all',
        filters: [
          { label: 'Все', value: 'all' },
          { label: 'Технические', value: 'technical' },
          { label: 'Гуманитарные', value: 'humanitarian' },
          { label: 'Экономические', value: 'economic' }
        ],
        programTypeLabels: {
          basic: 'Основная',
          advanced: 'Продвинутая'
        },
        formatLabels: {
          fulltime: 'Очная',
          parttime: 'Заочная',
          evening: 'Вечерняя'
        },
        educationPrograms: [
          {
            id: 1,
            title: 'Информационные системы и программирование',
            type: 'advanced',
            format: 'fulltime',
            level: 'СПО',
            duration: '2 г. 10 мес.',
            description: 'Подготовка специалистов в области разработки программного обеспечения...',
            curriculum: '/docs/program-1.pdf'
          },
          // ... другие программы
        ],
        additionalCourses: [
          {
            id: 1,
            title: 'Основы веб-дизайна',
            duration: '3 месяца',
            price: '15 000',
            description: 'Курс для начинающих веб-дизайнеров...'
          },
          // ... другие курсы
        ]
      }
    },
    computed: {
      filteredPrograms() {
        return this.educationPrograms.filter(program => 
          this.activeFilter === 'all' || program.category === this.activeFilter
        )
      }
    },
    methods: {
      setFilter(filter) {
        this.activeFilter = filter
      },
    }
  }
  </script>
  
  <style scoped>
  /* Общие стили */
  .page-header {
    text-align: center;
    margin: 4rem 0;
  }
  
  .page-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .page-subtitle {
    color: #666;
    font-size: 1.1rem;
  }
  
  /* Фильтры */
  .filters {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .gohome{
    display: flex;
    justify-content: start;
    border: 2px solid #0056b3;
    border-radius: 25px;
    font-size: 1.2vw;
    padding: 15px;
    color: #0056b3;
  }
  
  .filter-btn {
    padding: 8px 20px;
    border: 2px solid #0056b3;
    border-radius: 20px;
    background: transparent;
    color: #0056b3;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .filter-btn.active {
    background: #0056b3;
    color: white;
  }
  
  /* Программы обучения */
  .programs-grid {
    display: grid;
    gap: 30px;
  }
  
  .program-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    padding: 2rem;
  }
  
  .program-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .program-type {
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 0.9rem;
  }
  
  .program-type.basic {
    background: #e3f2fd;
    color: #1976d2;
  }
  
  .program-type.advanced {
    background: #f0f4c3;
    color: #afb42b;
  }
  
  .program-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #666;
  }
  
  .info-item img {
    width: 20px;
    height: 20px;
  }
  
  .program-actions {
    display: flex;
    gap: 15px;
    margin-top: 1.5rem;
  }
  
  .details-btn {
    padding: 8px 20px;
    background: #0056b3;
    color: white;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .download-btn {
    padding: 8px 20px;
    border: 1px solid #0056b3;
    color: #0056b3;
    border-radius: 5px;
    text-decoration: none;
  }
  
  /* Дополнительное образование */
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 2rem;
  }
  
  .course-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .course-meta {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    color: #666;
  }
  
  .enroll-btn {
    width: 100%;
    padding: 10px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .program-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .page-title {
      font-size: 2rem;
    }
    
    .program-actions {
      flex-direction: column;
    }
  }
  
  @media (max-width: 480px) {
    .filters {
      justify-content: center;
    }
    
    .filter-btn {
      flex: 1 1 120px;
      text-align: center;
    }
  }
  </style>