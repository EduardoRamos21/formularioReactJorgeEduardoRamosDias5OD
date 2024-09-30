import { useState,useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaEstudiante from './components/ListaEstudiante';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudianteEditado, setEstudianteEditado] = useState(null);

  useEffect(() => {
    const estudiantesGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
    setEstudiantes(estudiantesGuardados);
  }, []);

  const actualizarLista = (nuevaLista) => {
    setEstudiantes(nuevaLista);
  };

  const editarEstudiante = (estudiante) => {
    setEstudianteEditado(estudiante);
  };

  const eliminarEstudiante = (ine) => {
    const nuevaLista = estudiantes.filter((est) => est.ine !== ine);
    localStorage.setItem('estudiantes', JSON.stringify(nuevaLista));
    setEstudiantes(nuevaLista);
  };

  return (
    <div>
      <Formulario
        estudianteEditado={estudianteEditado}
        setEstudianteEditado={setEstudianteEditado}
        actualizarLista={actualizarLista}
      />
      <ListaEstudiante
        estudiantes={estudiantes}
        editarEstudiante={editarEstudiante}
        eliminarEstudiante={eliminarEstudiante}
      />
    </div>
  );
}

export default App;
