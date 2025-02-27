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
            <h1 class="page-title">Абитуриентам</h1>
            <p class="page-subtitle">Всё для успешного поступления в колледж</p>
          </section>
  
          <!-- Основной контент -->
          <div class="admission-content">
            <!-- Шаги поступления -->
            <section class="steps-section">
              <div class="section-header">
                <h2>Этапы поступления</h2>
                <div class="decoration-line"></div>
              </div>
              
              <div class="steps-grid">
                <div 
                  v-for="(step, index) in admissionSteps"
                  :key="index"
                  class="step-card"
                >
                  <div class="step-number">{{ index + 1 }}</div>
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                  <div class="step-dates" v-if="step.dates">
                    <span>📅 {{ step.dates }}</span>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- Документы -->
            <section class="documents-section">
              <div class="section-header">
                <h2>Необходимые документы</h2>
                <div class="decoration-line"></div>
              </div>
              
              <div class="documents-grid">
                <div 
                  v-for="(doc, index) in requiredDocuments"
                  :key="index"
                  class="document-card"
                >
                  <div class="doc-icon">
                    <img :src="doc.icon" :alt="doc.title">
                  </div>
                  <div class="doc-content">
                    <h3>{{ doc.title }}</h3>
                    <p>{{ doc.description }}</p>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- Специальности -->
            <section class="specialties-section">
              <div class="section-header">
                <h2>Набор на 2024/2025 учебный год</h2>
                <div class="decoration-line"></div>
              </div>
              
              <div class="specialties-table">
                <div class="table-header">
                  <span>Специальность</span>
                  <span>Бюджет</span>
                  <span>Контракт</span>
                  <span>Срок обучения</span>
                </div>
                <div 
                  v-for="(spec, index) in specialties"
                  :key="index"
                  class="table-row"
                >
                  <span>{{ spec.name }}</span>
                  <span>{{ spec.budget }}</span>
                  <span>{{ spec.contract }}</span>
                  <span>{{ spec.duration }}</span>
                </div>
              </div>
            </section>
  
            <!-- Контакты приемной комиссии -->
            <section class="contacts-section">
              <div class="contacts-card">
                <h3>Приемная комиссия</h3>
                <div class="contact-info">
                  <p>📍 {{ contacts.address }}</p>
                  <p>📞 {{ contacts.phone }}</p>
                  <p>✉️ {{ contacts.email }}</p>
                  <p>🕒 {{ contacts.workingHours }}</p>
                </div>
                <div class="contact-map">
                  <iframe 
                    :src="contacts.mapUrl"
                    width="100%" 
                    height="300"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
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
    name: 'AdmissionPage',
    data() {
      return {
        admissionSteps: [
          {
            title: 'Подача заявления',
            description: 'Онлайн или лично в приемной комиссии',
            dates: '20.06 - 15.08.2024'
          },
          // ... другие шаги
        ],
        requiredDocuments: [
          {
            title: 'Паспорт',
            description: 'Копия паспорта абитуриента и родителей',
          },
          // ... другие документы
        ],
        specialties: [
          {
            name: 'Информационные системы',
            budget: 25,
            contract: 15,
            duration: '2 г. 10 мес.'
          },
          // ... другие специальности
        ],
        contacts: {
          address: 'Москва, ул. Зорге, 4, каб. 101',
          phone: '+7 (499) 194-04-44',
          email: 'priem@годовикова.рф',
          workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
          mapUrl: 'https://yandex.ru/map-widget/v1/?ll=37.501082%2C55.793197&z=16'
        }
      }
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

  .gohome{
    display: flex;
    justify-content: start;
    border: 2px solid #0056b3;
    border-radius: 25px;
    font-size: 1.2vw;
    padding: 15px;
    color: #0056b3;
  }
  
  .page-subtitle {
    color: #666;
    font-size: 1.1rem;
  }
  
  /* Этапы поступления */
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 2rem;
  }
  
  .step-card {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    position: relative;
  }
  
  .step-number {
    position: absolute;
    top: -20px;
    left: -20px;
    background: #0056b3;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .step-dates {
    margin-top: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
  
  /* Документы */
  .documents-grid {
    display: grid;
    gap: 20px;
    margin-top: 2rem;
  }
  
  .document-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 1.5rem;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  
  .doc-icon img {
    width: 50px;
    height: 50px;
  }
  
  /* Таблица специальностей */
  .specialties-table {
    margin-top: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .table-header, .table-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 15px;
    padding: 1rem;
  }
  
  .table-header {
    background: #f8f9fa;
    font-weight: bold;
  }
  
  .table-row:nth-child(even) {
    background: #f8f9fa;
  }
  
  /* Контакты */
  .contacts-card {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    margin-top: 2rem;
  }
  
  .contact-info p {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .contact-map {
    margin-top: 2rem;
    border-radius: 8px;
    overflow: hidden;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .table-header, .table-row {
      grid-template-columns: 1fr;
      padding: 1rem 0;
      text-align: center;
    }
    
    .document-card {
      flex-direction: column;
      text-align: center;
    }
    
    .step-card {
      padding: 1.5rem;
    }
    
    .page-title {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    .steps-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>