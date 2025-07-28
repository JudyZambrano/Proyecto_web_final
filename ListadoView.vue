<template>
  <div class="listado">
    <h2>Personas Registradas</h2>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Tipo de Discapacidad</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(persona, index) in personas" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.edad }}</td>
          <td>{{ persona.discapacidad }}</td>
          <td>{{ persona.ubicacion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListadoView',
  data() {
    return {
      personas: []
    };
  },
  mounted() {
    const datos = JSON.parse(localStorage.getItem("personas"));
    if (datos && Array.isArray(datos)) {
      this.personas = datos;
    }
  }
};
</script>


<style scoped>
.listado {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #2ecc71;
  color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
