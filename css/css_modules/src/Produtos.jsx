import React from 'react'
import styles from './Produto.module.css';
const Produtos = () => {
//   CSS
// Os modules garantem que as classes utilizada sejam sempre únicas, evitando o conflito. O modo já vem configurando com o Vite, basta definirmos o nome do arquivo css com a palavra .module. Ex: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  )
}

export default Produtos