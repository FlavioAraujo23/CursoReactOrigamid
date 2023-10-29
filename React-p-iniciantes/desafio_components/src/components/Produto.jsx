import React from 'react'

const Produto = ({nome, propriedadeDaArray}) => {
  return (
    <div style={{border: "1px solid", margin: '1rem 0', padding: '1rem2'}}>
      <p>{nome}</p>
      <ul>
        {propriedadeDaArray.map(p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  )
}

export default Produto