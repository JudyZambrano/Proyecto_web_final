<template>
  <div class="container">
    <img src="@/assets/logo.png" alt="Logo ULEAM" style="width: 180px; display: block; margin: 0 auto;" />
    <h1>ULEAM</h1>
    <h2>Panel de Administración</h2>

    <div class="panel">
      <p><strong>Personas registradas:</strong> {{ personasRegistradas }}</p>
      <p><strong>Tipos de discapacidad:</strong> {{ tiposDiscapacidad }}</p>
      <p><strong>Intervenciones realizadas:</strong> {{ intervencionesRealizadas }}</p>
      
      <button @click="verLista">Ver lista</button>
      <button @click="verSeguimiento">Seguimiento</button>
      <button @click="crearReporte">Crear reporte</button>
    </div>

    <div class="grafico-circular"></div>

    <div class="leyenda">
      <div class="leyenda-item">
        <div class="cuadro-color azul"></div>Personas registradas ({{ personasRegistradas }})
      </div>
      <div class="leyenda-item">
        <div class="cuadro-color naranja"></div>Tipos de discapacidad ({{ tiposDiscapacidad }})
      </div>
      <div class="leyenda-item">
        <div class="cuadro-color rojo"></div>Intervenciones realizadas ({{ intervencionesRealizadas }})
      </div>
    </div>

    <router-link to="/">← Cerrar sesión</router-link>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      personasRegistradas: 0,
      tiposDiscapacidad: 0,
      intervencionesRealizadas: 0
    };
  },
  mounted() {
    const personas = JSON.parse(localStorage.getItem("personas")) || [];
    this.personasRegistradas = personas.length;

    const tipos = new Set(personas.map(p => p.discapacidad));
    this.tiposDiscapacidad = tipos.size;

    // Puedes sumar seguimiento en otro localStorage si lo deseas
    this.intervencionesRealizadas = JSON.parse(localStorage.getItem("seguimientos"))?.length || 0;
  },
  methods: {
    verLista() {
      this.$router.push("/listado");
    },
    verSeguimiento() {
      this.$router.push("/seguimiento");
    },
    crearReporte() {
      alert("Generando reporte...");
    }
  }
};
</script>


<style scoped>
@import "@/assets/estilos.css";

.grafico-circular {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    #4e79a7 0% 56.6%,
    #f28e2b 56.6% 59%,
    #e15759 59% 100%
  );
  margin: 30px auto;
  position: relative;
  border: 3px solid #ccc;
}

.leyenda {
  max-width: 300px;
  margin: 10px auto;
  font-size: 14px;
}

.leyenda-item {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.cuadro-color {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 3px;
}

.azul {
  background-color: #4e79a7;
}
.naranja {
  background-color: #f28e2b;
}
.rojo {
  background-color: #e15759;
}
</style>
