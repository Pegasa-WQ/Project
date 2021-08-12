<template>
  <ul class="sidenav">
    <li class="sidenav__item">
      <a href="#" class="sidenav__link" @click.prevent="active = !active">Главная страница</a>
      <!-- <ul class="items" v-show="active" :class="{ color: active }">
         <li class="sidenav__item">
         <a class="sidenav__link subitem" href="#"> Item 1-1</a></li>
         <li class="sidenav__item">
         <a class="sidenav__link subitem" href="#"> Item 1-2</a></li>
         <li class="sidenav__item">
         <a class="sidenav__link subitem" href="#"> Item 1-3</a></li>
      </ul> -->
    </li>
    <li class="sidenav__item">
      <a href="#" class="sidenav__link">Управление пользователями</a>
    </li>
    <li class="sidenav__item">
      <a href="#" class="sidenav__link">Управление ролями</a>
    </li>
    <li class="sidenav__item">
      <a href="#" class="sidenav__link">Репозиторий</a>
    </li>
    <li class="sidenav__item">
      <a href="#" class="sidenav__link">Ревью</a>
    </li>
        <li class="sidenav__item">
      <a href="#" class="sidenav__link">Тест-план</a>
    </li>
        <li class="sidenav__item">
      <a href="#" class="sidenav__link">Тест-прогон</a>
    </li>
        <li class="sidenav__item">
      <a href="#" class="sidenav__link">Баг-репорты</a>
    </li>
    <li>
        <li class="sidenav__item">
      <a href="#" class="sidenav__link">Статистика</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      active: false
    }
  },
  methods: {
  },
  created: function () {
  }
}
</script>
<style lang="scss">
@import "../../assets/style/roots.scss";
@import "../../assets/style/style.scss";
.sidenav {
  margin: 0;
  padding-top: 72px;
  padding-left: 0;
  width: 100%;
  height: 45rem;
  max-width: 230px;
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
.arrow {
background-image: url('../../assets/img/arrow.svg');
background-size: 12px 8px;
background-repeat: no-repeat;
background-position: center;
background-position-x: 90%;
}
.open {
background-image: url('../../assets/img/arrowDown.svg');
}
.items {
padding: 0;
list-style: none;
transition: color 0.2s ease-in-out;
}
.color {
background-color: rgb(77, 189, 198, 0.4);
}
.subitem {
padding: 6px 60px 6px 40px;
font-size: 0.675rem;
}
</style>
