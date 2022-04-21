import { Component } from "react";
import Produto from './Produto'

const styles = {
  produtos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}

class Produtos extends Component {

  render() {
    const { produtos, adicionarAoCarrinho } = this.props

    return (
      <div style={styles.produtos}>
        {produtos.map(produto =>
          <Produto
            adicionarAoCarrinho={adicionarAoCarrinho}
            key={produto.name}
            produto={produto}
          />)}
      </div>
    )
  }
}

export default Produtos