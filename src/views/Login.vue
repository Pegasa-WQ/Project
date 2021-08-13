<template>
  <form class="card auth-card">
    <h2 class="title color">Test Manager</h2>
    <div class="card-content">
      <div class="input-field">
        <label class="label" for="email">Email</label>
        <input class="input auth-input" id="email" type="text" />
      </div>
      <div class="input-field">
        <label class="label" for="password">Пароль</label>
        <input class="input auth-input" id="password" type="password" />
      </div>
    </div>
    <div class="card-action">
      <button class="btn auth-submit" type="submit">Войти</button>
      <button class="btn auth-signUp" type="submit">Зарегистрироваться</button>
    </div>
  </form>
</template>
<style lang="scss">
@import "../assets/style/variables.scss";
@import "../assets/style/style.scss";
.empty-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}
.color {
  margin-bottom: 50px;
  text-align: center;
  font-weight: 300;
  color: $basic-color;
}
.input-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.label {
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.25rem;
  font-weight: 400;
}
.auth-input {
  padding: 0.4375rem 0.5rem;
  width: 300px;
}
.auth-submit {
  margin-right: 10px;
  padding: 0.5rem 1rem;
}
.auth-signUp {
  padding: 0.5rem 1rem;
  background-color: $light-color;
  color: $basic-color;
}
.card-action {
  display: flex;
  justify-content: space-between;
}
.auth-signUp:hover {
  background-color: $basic-color;
  color: $light-color;
}
</style>
