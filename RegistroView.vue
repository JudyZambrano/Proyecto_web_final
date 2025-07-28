<template>
  <div class="container">
    <img src="@/assets/logo.png" alt="Logo ULEAM" style="width: 180px; display: block; margin: 0 auto;" />
    <h1>ULEAM</h1>
    <h2>Registro de Persona con Discapacidad</h2>

    <form @submit.prevent="validarYRegistrar">
      <label for="nombre">Nombre completo:</label>
      <input type="text" id="nombre" v-model="form.nombre" required />

      <label for="matricula">ID / Matrícula:</label>
      <input type="text" id="matricula" v-model="form.matricula" required />

      <label for="sexo">Sexo:</label>
      <select id="sexo" v-model="form.sexo" required>
        <option value="" disabled>Seleccione</option>
        <option>Masculino</option>
        <option>Femenino</option>
        <option>Otro</option>
      </select>

      <label for="nacimiento">Fecha de nacimiento:</label>
      <input type="date" id="nacimiento" v-model="form.nacimiento" required />

      <label for="discapacidad">Tipo de discapacidad:</label>
      <select id="discapacidad" v-model="form.discapacidad" required>
        <option value="" disabled>Seleccione</option>
        <option>Visual</option>
        <option>Auditiva</option>
        <option>Física</option>
        <option>Intelectual</option>
        <option>Otra</option>
      </select>

      <label for="porcentaje">Porcentaje de discapacidad (%):</label>
      <input type="number" id="porcentaje" v-model.number="form.porcentaje" min="1" max="100" required />

      <label for="facultad">Facultad:</label>
      <select id="facultad" v-model="form.facultad" required>
        <option value="" disabled>Seleccione</option>
        <option>Ingeniería</option>
        <option>Educación</option>
        <option>Salud</option>
        <option>Administración</option>
      </select>

      <label for="emergencia">Nombre contacto de emergencia:</label>
      <input type="text" id="emergencia" v-model="form.emergencia" required />

      <label for="telEmergencia">Teléfono de emergencia:</label>
      <input type="tel" id="telEmergencia" v-model="form.telEmergencia" required />

      <button type="submit">Registrar</button>
      <router-link to="/" style="margin-top: 10px; display: inline-block;">Volver al inicio</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistroView",
  data() {
    return {
      form: {
        nombre: "",
        matricula: "",
        sexo: "",
        nacimiento: "",
        discapacidad: "",
        porcentaje: null,
        facultad: "",
        emergencia: "",
        telEmergencia: ""
      }
    };
  },
  methods: {
    validarYRegistrar() {
      const campos = this.form;
      // Validar campos vacíos
      for (const key in campos) {
        if (campos[key] === "" || campos[key] === null) {
          alert("Completa todos los campos requeridos.");
          return;
        }
      }

      // Validar porcentaje
      if (campos.porcentaje < 1 || campos.porcentaje > 100) {
        alert("El porcentaje debe estar entre 1 y 100.");
        return;
      }

      // Validar teléfono de emergencia
      if (!/^[0-9]{7,10}$/.test(campos.telEmergencia)) {
        alert("Número de emergencia inválido. Debe tener entre 7 y 10 dígitos.");
        return;
      }

      // Guardar en localStorage
      const personas = JSON.parse(localStorage.getItem("personas")) || [];
      personas.push({ ...this.form });
      localStorage.setItem("personas", JSON.stringify(personas));

      alert("Registro exitoso. Redirigiendo...");
      this.$router.push("/admin");

      // Resetear el formulario
      this.form = {
        nombre: "",
        matricula: "",
        sexo: "",
        nacimiento: "",
        discapacidad: "",
        porcentaje: null,
        facultad: "",
        emergencia: "",
        telEmergencia: ""
      };
    }
  }
};
</script>

<style scoped>
@import "@/assets/estilos.css";
</style>
