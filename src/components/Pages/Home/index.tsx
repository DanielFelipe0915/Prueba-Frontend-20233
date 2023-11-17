import React, { useState, useEffect } from 'react';
import { Interface } from 'readline';

interface User{
  id:string;
  fisrtName:string;
}
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Define el estado para almacenar los usuarios

  useEffect(() => {
    // Función para realizar la solicitud GET
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyapi.io/data/v1/user?limit=10', {
          headers: {
            'app-id': '0JyYiOQXQQr5H9OEn21312' 
          }
        });
        if (!response.ok) {
          throw new Error('Hubo un problema al obtener los usuarios');
        }
        const data = await response.json();
        setUsers(data.data); // Actualiza el estado con los datos de los usuarios obtenidos
      } catch (error) {
        console.error('Error:', error);
        // Manejo de errores: podrías mostrar un mensaje de error en la interfaz
      }
    };

    fetchUsers(); // Llama a la función para realizar la solicitud GET cuando el componente se monte

  }, []); // El segundo parámetro vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fisrtName}</li>
         
        ))}
      </ul>
    </div>
  );
};

export default UserList;
