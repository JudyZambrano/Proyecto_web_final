<template>
  <div class="seguimiento">
    <h2>Seguimiento de Persona</h2>

    <form @submit.prevent="guardarSeguimiento">
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" v-model="form.fecha" required />

      <label for="tipo_apoyo">Tipo de apoyo:</label>
      <select id="tipo_apoyo" v-model="form.tipo_apoyo" required>
        <option value="" disabled>Seleccione</option>
        <option>Psicológico</option>
        <option>Académico</option>
        <option>Técnico</option>
        <option>Otro</option>
      </select>

      <label for="responsable">Responsable del seguimiento:</label>
      <input type="text" id="responsable" v-model="form.responsable" required />

      <label for="acciones">Acciones realizadas:</label>
      <textarea id="acciones" rows="3" v-model="form.acciones" required></textarea>

      <label for="observaciones">Observaciones:</label>
      <textarea id="observaciones" rows="3" v-model="form.observaciones"></textarea>

      <label for="proxima_fecha">Próxima fecha de seguimiento:</label>
      <input type="date" id="proxima_fecha" v-model="form.proxima_fecha" />

      <button type="submit">Guardar</button>
    </form>

    <h3>Registros guardados:</h3>
    <ul>
      <li v-for="(item, index) in seguimientos" :key="index">
        {{ item.fecha }} - {{ item.tipo_apoyo }} - {{ item.responsable }} - {{ item.acciones }} - {{ item.observaciones }} - {{ item.proxima_fecha }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SeguimientoView',
  data() {
    return {
      form: {
        fecha: '',
        tipo_apoyo: '',
        responsable: '',
        acciones: '',
        observaciones: '',
        proxima_fecha: ''
      },
      seguimientos: []
    };
  },
  mounted() {
    const datos = JSON.parse(localStorage.getItem("seguimientos")) || [];
    this.seguimientos = datos;
  },
  methods: {
    guardarSeguimiento() {
      if (!this.form.fecha || !this.form.responsable) {
        alert("Campos obligatorios incompletos.");
        return;
      }

      this.seguimientos.push({ ...this.form });
      localStorage.setItem("seguimientos", JSON.stringify(this.seguimientos));

      alert("Seguimiento guardado.");

      // Limpiar el formulario
      this.form = {
        fecha: '',
        tipo_apoyo: '',
        responsable: '',
        acciones: '',
        observaciones: '',
        proxima_fecha: ''
      };
    }
  }
};
</script>

<style scoped>
.seguimiento {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
}
input,
select,
textarea {
  padding: 8px;
  margin-top: 5px;
}
button {
  margin-top: 15px;
  padding: 10px;
  background-color: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2ecc71;
}
</style>
