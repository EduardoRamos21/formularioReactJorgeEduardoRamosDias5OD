import PropTypes from 'prop-types';

const ListaEstudiante = ({ estudiantes, editarEstudiante, eliminarEstudiante }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Lista de Estudiantes</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante, index) => (
              <tr key={index}>
                <td>{estudiante.ine}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.apellidoPaterno}</td>
                <td>{estudiante.telefono}</td>
                <td>{estudiante.correo}</td>
                <td>
                  <button className="btn btn-primary me-2" onClick={() => editarEstudiante(estudiante)}>
                    Editar
                  </button>
                  <button className="btn btn-danger" onClick={() => eliminarEstudiante(estudiante.ine)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ListaEstudiante.propTypes = {
  estudiantes: PropTypes.arrayOf(PropTypes.shape({
    ine: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    apellidoPaterno: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired
  })).isRequired,
  editarEstudiante: PropTypes.func.isRequired,
  eliminarEstudiante: PropTypes.func.isRequired
};



export default ListaEstudiante;
