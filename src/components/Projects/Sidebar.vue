<template>
  <ul class="sidenav">
    <router-link
      tag="li"
      active-class="active"
      :to="link.url"
      class="sidenav__item"
      v-for="(link, index) in links"
      :key="index"
      :exact="link.exact"
    >
      <a href="#" class="sidenav__link">
        {{ link.title }}
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      links: [
        { title: 'Главная страница', url: '/', exact: true },
        { title: 'Управление пользователями', url: '/users' },
        { title: 'Управление ролями', url: '/roles' },
        { title: 'Репозиторий', url: '/repository' },
        { title: 'Ревью', url: '/review' },
        { title: 'Тест-план', url: '/testplan' },
        { title: 'Тест-прогон', url: '/testrun' },
        { title: 'Баг-репорты', url: '/bugs' },
        { title: 'Статистика', url: '/statistics' }
      ]
    }
  },
  methods: {
  },
  created: function () {
  }
}
</script>
<style lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/style.scss";
.sidenav {
  margin: 0;
  padding-top: 61px;
  padding-left: 0;
  width: 100%;
  height: 45rem;
  max-width: 235px;
  list-style: none;
  background-color: rgb(77, 189, 198, 0.1);
}
.sidenav__item {
width: 100%;
}
.sidenav__link {
display: block;
  padding: 10px 10px 10px 20px;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.55;
  font-weight: 700;
  color: $alternative-color-text;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}
.sidenav__link:hover {
  background-color: rgb(77, 189, 198, 0.2);
}
.items {
padding: 0;
list-style: none;
transition: color 0.2s ease-in-out;
}
.subitem {
padding: 6px 60px 6px 40px;
font-size: 0.675rem;
}
.active {
  background-color: rgb(77, 189, 198, 0.2);
}
</style>
