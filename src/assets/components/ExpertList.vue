<template>
    <div class="expert-list">
      <h2>Especialistas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Especialidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expert in experts" :key="expert.id">
            <td>{{ expert.id }}</td>
            <td>{{ expert.name }}</td>
            <td>{{ expert.specialty }}</td>
            <td>
              <button @click="editExpert(expert.id)">Editar</button>
              <button @click="deleteExpert(expert.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="addExpert">Adicionar Especialista</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experts: [
          { id: 1, name: "Dr. João", specialty: "Mamíferos" },
          { id: 2, name: "Dra. Maria", specialty: "Aves" },
          // Dados mockados
        ]
      };
    },
    methods: {
      addExpert() {
        console.log("Adicionar especialista");
        // Lógica para adicionar especialista
      },
      editExpert(id) {
        console.log(`Editar especialista ${id}`);
        // Lógica para editar especialista
      },
      deleteExpert(id) {
        console.log(`Excluir especialista ${id}`);
        // Lógica para excluir especialista
      }
    }
  };
  </script>
  
  <style scoped>
  .expert-list {
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
  