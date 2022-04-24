import { Component } from "react"
import Button from "./Button"

const styles = {
  produto: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px'
  },
  img: {
    width: '100%'
  }
}

class Produto extends Component {
  render() {
    const { produto, adicionarAoCarrinho } = this.props
    return (
      <div style={styles.produto}>
        <img style={styles.img} alt={produto.name} src={produto.img} />
        <h3>{produto.name}</h3>
        <p>{produto.price}</p>
        <Button onClick={() => adicionarAoCarrinho(produto)}>
          Adicionar ao Carrinho
        </Button>
      </div>
    )
  }
}

export default Produto