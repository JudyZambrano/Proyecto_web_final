<template>
  <div class="container">
    <img src="@/assets/logo.png" alt="Logo ULEAM" style="width: 180px; display: block; margin: 0 auto;" />
    <h1>ULEAM</h1>
    <h2>Inicio de Sesión</h2>
    <form @submit.prevent="validarLogin">
      <label for="correo">Correo institucional:</label>
      <input type="email" id="correo" v-model="correo" required />

      <label for="contrasena">Contraseña:</label>
      <input type="password" id="contrasena" v-model="contrasena" required />

      <button type="submit">Iniciar sesión</button>
      <router-link :to="{ name: 'Registro' }">¿No estás registrado?</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      correo: '',
      contrasena: ''
    };
  },
  methods: {
    validarLogin() {
      if (!this.correo || !this.contrasena) {
        alert("Completa todos los campos.");
        return;
      }
      if (!this.correo.includes("@uleam.edu.ec")) {
        alert("Usa un correo institucional válido (@uleam.edu.ec).");
        return;
      }
      alert("Inicio de sesión correcto. Redirigiendo...");
      this.$router.push({ name: "Registro" });
    }
  }
};
</script>

<style scoped>
@import "@/assets/estilos.css";
</style>
