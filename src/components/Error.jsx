import PropTypes from 'prop-types'; 
const Error = (props)=>{
    return(
        <div className="alert alert-danger" role="alert">
            <strong>Error:</strong>
            {props.mensaje}
        </div>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired 
};


export default Error;