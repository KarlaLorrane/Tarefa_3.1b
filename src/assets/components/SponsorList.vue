<template>
    <div class="sponsor-list">
      <h2>Patrocinadores</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Animal Patrocinado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sponsor in sponsors" :key="sponsor.id">
            <td>{{ sponsor.id }}</td>
            <td>{{ sponsor.name }}</td>
            <td>{{ sponsor.animal }}</td>
            <td>
              <button @click="editSponsor(sponsor.id)">Editar</button>
              <button @click="deleteSponsor(sponsor.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="addSponsor">Adicionar Patrocinador</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sponsors: [
          { id: 1, name: "Patrocinador 1", animal: "Leão" },
          { id: 2, name: "Patrocinador 2", animal: "Elefante" },
          // Dados mockados
        ]
      };
    },
    methods: {
      addSponsor() {
        console.log("Adicionar patrocinador");
        // Lógica para adicionar patrocinador
      },
      editSponsor(id) {
        console.log(`Editar patrocinador ${id}`);
        // Lógica para editar patrocinador
      },
      deleteSponsor(id) {
        console.log(`Excluir patrocinador ${id}`);
        // Lógica para excluir patrocinador
      }
    }
  };
  </script>
  
  <style scoped>
  .sponsor-list {
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th, table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  button {
    margin: 5px;
  }
  </style>
  