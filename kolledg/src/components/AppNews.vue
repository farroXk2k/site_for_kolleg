<template>
  <div class="page-wrapper">
    <!-- Общий хедер -->
    <header class="header">
      <!-- Повторяется как на главной -->
    </header>

    <main class="main-content">
      <div class="container">

        <RouterLink to="/">
        <button class="gohome">На главную</button>
      </RouterLink>
        <!-- Заголовок страницы -->
        <section class="page-header">
          <h1 class="page-title">Новости колледжа</h1>
          <p class="page-subtitle">Следите за последними событиями и объявлениями</p>
        </section>

        <!-- Основной контент -->
        <div class="news-content">
          <!-- Фильтры -->
          <div class="news-filters">
            <button 
              v-for="(filter, index) in filters"
              :key="index"
              :class="['filter-btn', { active: activeFilter === filter.value }]"
              @click="setFilter(filter.value)"
            >
              {{ filter.label }}
            </button>
          </div>

          <!-- Список новостей -->
          <div class="news-list">
            <article 
              v-for="(news) in filteredNews"
              :key="news.id"
              class="news-card"
            >
              <div class="news-meta">
                <time class="news-date">{{ formatDate(news.date) }}</time>
                <span class="news-category">{{ news.category }}</span>
              </div>
              <div class="news-body">
                <h2 class="news-title">{{ news.title }}</h2>
                <p class="news-excerpt">{{ news.excerpt }}</p>
                <router-link 
                  :to="`/news/${news.id}`"
                  class="read-more"
                >
                  Читать подробнее →
                </router-link>
              </div>
              <img 
                v-if="news.image"
                :src="news.image"
                :alt="news.title"
                class="news-image"
              >
            </article>
          </div>

          <!-- Пагинация -->
          <div class="pagination">
            <button 
              v-for="page in totalPages"
              :key="page"
              :class="['page-btn', { active: currentPage === page }]"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
          </div>
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
  name: 'NewsPage',
  data() {
    return {
      filters: [
        { label: 'Все', value: 'all' },
        { label: 'Объявления', value: 'announcement' },
        { label: 'События', value: 'event' },
        { label: 'Достижения', value: 'achievement' }
      ],
      activeFilter: 'all',
      currentPage: 1,
      itemsPerPage: 6,
      allNews: [
        {
          id: 1,
          date: '2024-03-20',
          title: 'День открытых дверей 2024',
          excerpt: 'Приглашаем абитуриентов и родителей на ежегодное мероприятие...',
          category: 'События',
        },
        // ... другие новости
      ]
    }
  },
  computed: {
    filteredNews() {
      return this.allNews
        .filter(news => 
          this.activeFilter === 'all' || news.category === this.activeFilter
        )
        .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
    },
    totalPages() {
      return Math.ceil(
        this.allNews.filter(news => 
          this.activeFilter === 'all' || news.category === this.activeFilter
        ).length / this.itemsPerPage
      )
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' }
      return new Date(dateString).toLocaleDateString('ru-RU', options)
    },
    setFilter(filter) {
      this.activeFilter = filter
      this.currentPage = 1
    },
    changePage(page) {
      this.currentPage = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

/* Фильтры */
.news-filters {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 2rem 0;
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
.gohome{
    display: flex;
    justify-content: start;
    border: 2px solid #0056b3;
    border-radius: 25px;
    font-size: 1.2vw;
    padding: 15px;
    color: #0056b3;
  }

/* Список новостей */
.news-list {
  display: grid;
  gap: 30px;
}

.news-card {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  padding: 30px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.news-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;
}

.news-date {
  color: #666;
  font-size: 0.9rem;
}

.news-category {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 15px;
  background: #f0f4ff;
  color: #0056b3;
  font-size: 0.8rem;
}

.news-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.news-excerpt {
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more {
  color: #0056b3;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.read-more:hover {
  opacity: 0.8;
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

/* Пагинация */
.pagination {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 3rem 0;
}

.page-btn {
  padding: 8px 15px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-btn.active {
  background: #0056b3;
  color: white;
  border-color: #0056b3;
}

/* Адаптивность */
@media (max-width: 768px) {
  .news-card {
    grid-template-columns: 1fr;
  }
  
  .news-image {
    height: 250px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .news-filters {
    justify-content: center;
  }
  
  .filter-btn {
    flex: 1 1 120px;
    text-align: center;
  }
}
</style>