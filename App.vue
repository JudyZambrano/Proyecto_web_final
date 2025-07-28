<template>
  <div>
    <nav>
      <router-link to="/">Inicio de Sesión</router-link>
      <router-link to="/registro">Registro</router-link>
      <router-link to="/admin">Panel</router-link>
      <router-link to="/listado">Listado</router-link>
      <router-link to="/seguimiento">Seguimiento</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
nav {
  background-color: #2ecc71;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 12px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
