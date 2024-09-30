import { useState,useEffect } from 'react';
import './style.css';
import Error from './error'; 
import PropTypes from 'prop-types';

const Formulario = ({ estudianteEditado, setEstudianteEditado, actualizarLista }) => {
  const [formData, setFormData] = useState({
    ine: '',
    nombre: '',
    apellidoPaterno: '',
    telefono: '',
    correo: ''
  });

  const [error, setError] = useState(false); 
  const [mensajeError, setMensajeError] = useState(''); 

 
  useEffect(() => {
    if (estudianteEditado) {
      setFormData(estudianteEditado);
    }
  }, [estudianteEditado]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    
    if (!/^\d+$/.test(formData.ine)) {
      setError(true);
      setMensajeError('Num. INE solo debe contener números.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      setError(true);
      setMensajeError('Nombre solo debe contener letras.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.apellidoPaterno)) {
      setError(true);
      setMensajeError('Apellido Paterno solo debe contener letras.');
      return;
    }

    if (!/^\d+$/.test(formData.telefono)) {
      setError(true);
      setMensajeError('Teléfono solo debe contener números.');
      return;
    }

    if (!/@/.test(formData.correo)) {
      setError(true);
      setMensajeError('Correo debe contener un @.');
      return;
    }

    
    if (!formData.ine || !formData.nombre || !formData.apellidoPaterno || !formData.telefono || !formData.correo) {
      setError(true);
      setMensajeError('Campos obligatorios');
      return;
    }

    setError(false); 

    let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];

    if (estudianteEditado) {
      // Editar estudiante
      estudiantes = estudiantes.map((est) =>
        est.ine === formData.ine ? formData : est
      );
      setEstudianteEditado(null); 
    } else {
     
      estudiantes.push(formData);
    }

    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    actualizarLista(estudiantes);
    setFormData({ ine: '', nombre: '', apellidoPaterno: '', telefono: '', correo: '' });
  };

  const handleReset = () => {
    setFormData({ ine: '', nombre: '', apellidoPaterno: '', telefono: '', correo: '' });
    setEstudianteEditado(null);
    setError(false); 
    setMensajeError(''); 
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Formulario</h4>
        </div>
        <div className="card-body">
          {}
          {error && <Error mensaje={mensajeError} />}
          <form>
            <div className="form-group mb-3">
              <label htmlFor="ine">Num. Ine:</label>
              <input
                type="text"
                className="form-control"
                id="ine"
                value={formData.ine}
                onChange={handleChange}
                placeholder="Num. Ine"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
              <input
                type="text"
                className="form-control"
                id="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleChange}
                placeholder="Apellido Paterno"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-success" onClick={handleSubmit}>
                {estudianteEditado ? 'Actualizar' : 'Enviar'}
              </button>
              <button type="button" className="btn btn-info" onClick={handleReset}>
                Restablecer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  estudianteEditado: PropTypes.shape({
    ine: PropTypes.string,
    nombre: PropTypes.string,
    apellidoPaterno: PropTypes.string,
    telefono: PropTypes.string,
    correo: PropTypes.string
  }),
  setEstudianteEditado: PropTypes.func.isRequired,
  actualizarLista: PropTypes.func.isRequired,
};

export default Formulario;
