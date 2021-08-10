<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class=" text card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" class="input" />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="input" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <a href="/">Зарегистрироваться</a>
      </p>
    </div>
  </form>
</template>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  @import '../assets/style/roots.scss';
  @import '../assets/style/style.scss';
</style>
