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
            <h1 class="page-title">Контакты</h1>
            <p class="page-subtitle">Мы всегда рады вам помочь!</p>
          </section>
  
          <!-- Основной контент -->
          <div class="contacts-content">
            <!-- Контактная информация -->
            <section class="contact-info-section">
              <div class="info-grid">
                <div class="info-card">
                  <div class="icon-wrapper">
                  </div>
                  <h3>Адрес</h3>
                  <p>{{ contacts.address }}</p>
                  <a 
                    :href="contacts.mapLink"
                    target="_blank"
                    class="map-link"
                  >
                    Посмотреть на карте →
                  </a>
                </div>
  
                <div class="info-card">
                  <div class="icon-wrapper">
                  </div>
                  <h3>Телефоны</h3>
                  <div class="phones-list">
                    <a 
                      v-for="(phone, index) in contacts.phones"
                      :key="index"
                      :href="`tel:${phone.number}`"
                      class="phone-link"
                    >
                      {{ phone.label }}: {{ phone.number }}
                    </a>
                  </div>
                </div>
  
                <div class="info-card">
                  <div class="icon-wrapper">
                  </div>
                  <h3>Электронная почта</h3>
                  <div class="emails-list">
                    <a 
                      v-for="(email, index) in contacts.emails"
                      :key="index"
                      :href="`mailto:${email.address}`"
                      class="email-link"
                    >
                      {{ email.label }}: {{ email.address }}
                    </a>
                  </div>
                </div>
  
                <div class="info-card">
                  <div class="icon-wrapper">
                  </div>
                  <h3>Часы работы</h3>
                  <div class="working-hours">
                    <p v-for="(hours, index) in contacts.workingHours" :key="index">
                      {{ hours }}
                    </p>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- Карта
            <section class="map-section">
              <iframe 
                :src="contacts.mapEmbed"
                width="100%" 
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </section> -->
  
            <!-- Форма обратной связи -->
            <section class="feedback-section">
              <div class="section-header">
                <h2>Обратная связь</h2>
                <div class="decoration-line"></div>
              </div>
              
              <form @submit.prevent="submitForm" class="feedback-form">
                <div class="form-grid">
                  <div class="form-group">
                    <label for="name">Ваше имя</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name"
                      required
                    >
                  </div>
  
                  <div class="form-group">
                    <label for="email">Электронная почта</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email"
                      required
                    >
                  </div>
  
                  <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="form.phone"
                    >
                  </div>
  
                  <div class="form-group">
                    <label for="subject">Тема сообщения</label>
                    <input 
                      type="text" 
                      id="subject" 
                      v-model="form.subject"
                      required
                    >
                  </div>
  
                  <div class="form-group full-width">
                    <label for="message">Сообщение</label>
                    <textarea 
                      id="message" 
                      v-model="form.message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
  
                <button type="submit" class="submit-btn">
                  Отправить сообщение
                </button>
              </form>
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
    name: 'ContactsPage',
    data() {
      return {
        contacts: {
             address: 'Москва, ул. Зорге, 4',
        //   mapLink: 'https://yandex.ru/maps/-/CCUQfBd~3D',
        //   mapEmbed: 'https://yandex.ru/map-widget/v1/-/CCUQfBd~3D',
          phones: [
            { label: 'Приемная', number: '+7 (499) 194-04-44' },
            { label: 'Учебная часть', number: '+7 (499) 194-04-45' }
          ],
          emails: [
            { label: 'Общие вопросы', address: 'info@годовикова.рф' },
            { label: 'Приемная комиссия', address: 'priem@годовикова.рф' }
          ],
          workingHours: [
            'Пн-Пт: 9:00 - 18:00',
            'Сб: 10:00 - 15:00',
            'Вс: выходной'
          ]
        },
        form: {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Логика отправки формы
        console.log('Форма отправлена:', this.form)
        // Очистка формы
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
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
  
  .page-subtitle {
    color: #666;
    font-size: 1.1rem;
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

  /* Контактная информация */
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin: 2rem 0;
  }
  
  .info-card {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
    background: #f0f4ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }
  
  .icon-wrapper img {
    width: 30px;
    height: 30px;
  }
  
  .map-link {
    color: #0056b3;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
  }
  
  .phones-list, .emails-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .phone-link, .email-link {
    color: #333;
    text-decoration: none;
  }
  
  .working-hours p {
    margin: 0.5rem 0;
  }
  
  /* Карта */
  .map-section {
    margin: 4rem 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  }
  
  /* Форма обратной связи */
  .feedback-form {
    max-width: 800px;
    margin: 2rem auto;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group.full-width {
    grid-column: 1 / -1;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  textarea {
    resize: vertical;
  }
  
  .submit-btn {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 2rem auto 0;
    padding: 12px 20px;
    background: #0056b3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .page-title {
      font-size: 2rem;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .map-section {
      margin: 2rem 0;
    }
  }
  </style>