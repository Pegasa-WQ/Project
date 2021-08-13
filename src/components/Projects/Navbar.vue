<template>
  <nav class="navbar">
    <div class="logo">Test Manager</div>

    <div>
      <a class="user" href="#"> User Name </a>
    </div>
  </nav>
</template>
<style lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/style.scss";
.logo {
  font-size: 20px;
  line-height: 1.3rem;
  font-weight: 700;
  color: $basic-color;
}
.navbar {
position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  background-color: $light-color;
  box-shadow: 0 0 6px RGBA(0, 0, 0, 0.2);
}
.user {
  font-size: 14px;
  line-height: 1.3rem;
  color: $alternative-color-text;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}
.user:hover {
  color: $basic-color;
}
</style>
