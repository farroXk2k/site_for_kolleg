<template>
    <div class="page-wrapper">
      <!-- Общий хедер -->
      <header class="header">
        <!-- Повторяется как на главной -->
      </header>
        
      <main class="main-content">
        <!-- Блок с заголовком -->
        
      <RouterLink to="/">
        <button class="gohome">На главную</button>
      </RouterLink>
        <section class="about-hero">
          <div class="container">
            <h1 class="page-title">О колледже</h1>
            <p class="page-subtitle">Государственное бюджетное профессиональное образовательное учреждение города Москвы</p>
          </div>
        </section>
  
        <!-- Основной контент -->
        <div class="container">
          <!-- История -->
          <section class="history-section">
            <div class="section-header">
              <h2>Наша история</h2>
              <div class="decoration-line"></div>
            </div>
            <div class="history-content">
              
              <div class="history-text">
                <p v-for="(paragraph, index) in historyText" :key="index">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </section>
  
          <!-- Преимущества -->
          <section class="advantages-section">
            <div class="section-header">
              <h2>Наши преимущества</h2>
              <div class="decoration-line"></div>
            </div>
            <div class="advantages-grid">
              <div 
                v-for="(advantage, index) in advantages"
                :key="index"
                class="advantage-card"
              >
                <h3>{{ advantage.title }}</h3>
                <p>{{ advantage.description }}</p>
              </div>
            </div>
          </section>
  
          <!-- Преподаватели -->
          <section class="teachers-section">
            <div class="section-header">
              <h2>Наши преподаватели</h2>
              <div class="decoration-line"></div>
            </div>
            <div class="teachers-grid">
              <div 
                v-for="(teacher, index) in teachers"
                :key="index"
                class="teacher-card"
              >
                <img class="teacher-photo" src="../assets/image/img-1059_1733301006.jpg">
                <h3>{{ teacher.name }}</h3>
                <p class="teacher-position">{{ teacher.position }}</p>
                <p class="teacher-experience">Стаж: {{ teacher.experience }}</p>
              </div>
            </div>
          </section>
  
          <!-- Документы -->
          <section class="documents-section">
            <div class="section-header">
              <h2>Лицензии и документы</h2>
              <div class="decoration-line"></div>
            </div>
            <div class="documents-list">
              <a
                v-for="(doc, index) in documents"
                :key="index"
                :href="doc.file"
                class="document-item"
                target="_blank"
              >
                <div class="document-icon">
                </div>
                <span>{{ doc.name }}</span>
              </a>
            </div>
          </section>
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
    name: 'AboutPage',
    data() {
      return {
        historyText: [
          'Основанный в 1930 году как Московский механико-технологический техникум, наш колледж прошёл долгий путь развития...',
          'С 1994 года мы носим имя выдающегося советского педагога Ивана Ивановича Годовикова...',
          'Сегодня колледж представляет собой современный образовательный комплекс с новейшим оборудованием...'
        ],
        advantages: [
          {
            title: 'Государственный диплом',
            description: 'Выдаём дипломы государственного образца',
          },
          {
            title: 'Современные лаборатории',
            description: '15 специализированных лабораторий и мастерских',
          },
          // ... другие преимущества
        ],
        teachers: [
          {
            name: 'Калюков Андрей Алексеевич',
            position: 'Преподаватель информатики',
            experience: '14 лет',
          },
          // ... другие преподаватели
        ],
        documents: [
          {
            name: 'Лицензия на образовательную деятельность',
          },
          // ... другие документы
       
        
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Общие стили секций */
  .section-header {
    text-align: center;
    margin: 4rem 0;
  }
  
  .decoration-line {
    width: 100px;
    height: 2px;
    background: #0056b3;
    margin: 1rem auto;
  }
  
  /* История */
  .history-content {
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }
  
  .history-photo {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .history-text p {
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  /* Преимущества */
  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 2rem;
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
  
  .advantage-card {
    text-align: center;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 10px;
  }
  
  .advantage-icon img {
    height: 60px;
    margin-bottom: 1rem;
  }
  
  /* Преподаватели */
  .teachers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    margin-top: 2rem;
  }
  
  .teacher-card {
    text-align: center;
    padding: 1.5rem;
  }
  
  .teacher-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem;
  }
  
  .teacher-position {
    color: #666;
    font-weight: 500;
  }
  
  /* Документы */
  .documents-list {
    display: grid;
    gap: 20px;
    margin-top: 2rem;
  }
  
  .document-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    transition: transform 0.2s ease;
  }
  
  .document-item:hover {
    transform: translateX(10px);
  }
  
  .document-icon {
    margin-right: 1rem;
  }
  
  .document-icon img {
    width: 40px;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .history-content {
      grid-template-columns: 1fr;
    }
    
    .teachers-grid {
      grid-template-columns: 1fr;
    }
    
    .document-item {
      flex-direction: column;
      text-align: center;
    }
    
    .document-icon {
      margin: 0 0 1rem 0;
    }
  }
  </style>