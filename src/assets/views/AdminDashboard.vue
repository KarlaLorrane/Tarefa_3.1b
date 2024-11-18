<template>
  <div class="admin-dashboard">
    <h1>Página de Administração</h1>
    <div class="entities">
      <ul>
        <li><router-link to="/admin/animais">Gerir Animais</router-link></li>
        <li><router-link to="/admin/utilizadores">Gerir Utilizadores</router-link></li>
        <li><router-link to="/admin/quizzes">Gerir Quizzes</router-link></li>
        <li><router-link to="/admin/questoes">Gerir Questões</router-link></li>
        <li><router-link to="/admin/patrocinadores">Gerir Patrocinadores</router-link></li>
        <li><router-link to="/admin/especialistas">Gerir Especialistas</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard"
};
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
}

.entities ul {
  list-style-type: none;
  padding: 0;
}

.entities li {
  margin: 10px 0;
}
</style>
