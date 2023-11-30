import React from 'react';
import PropTypes from 'prop-types';

// defaultProps
// Podemos também definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. Isso faz parte do React.

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  width: 200,
  disabled: false,
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;