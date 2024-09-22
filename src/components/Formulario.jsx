import './style.css';

const Formulario = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Formulario</h4>
        </div>


        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="ine">Num. Ine:</label>
              <input
                type="text"
                className="form-control"
                id="ine"
                placeholder="Num. Ine"
              />
            </div>


            <div className="form-group mb-3">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre"
              />
            </div>


            <div className="form-group mb-3">
              <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
              <input
                type="text"
                className="form-control"
                id="apellidoPaterno"
                placeholder="Apellido Paterno"
              />
            </div>


            <div className="form-group mb-3">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder="Teléfono"
              />
            </div>


            <div className="form-group mb-3">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Correo"
              />
            </div>


            <div className="d-grid gap-2">
              <button type="button" className="btn btn-success">
                Enviar
              </button>
              <button type="button" className="btn btn-info">
                Restablecer
              </button>
            </div>


          </form>
        </div>
      </div>

    </div>
  );
};

export default Formulario;
