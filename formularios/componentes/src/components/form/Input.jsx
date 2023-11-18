import React from 'react'

const Input = ({ id, label, setValue, ...props }) => {
//   Input
// Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.
  return (
    <form>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </form>
  )
}

export default Input