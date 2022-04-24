import { Component } from 'react'
import BubbleAlert from './BubbleAlert';
import DetalhesCarrinho from './DetalhesCarrinho';

const styles = {
  carrinho: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    padding: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}


class Carrinho extends Component {
  render() {
    const { carro, eCarrinhoVisivel, mostrarCarrinho } = this.props
    const qtd = carro.reduce((acc, el) => acc + el.qtd, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {qtd !== 0
            ? <BubbleAlert value={qtd} />
            : null}
        </span>
        <button onClick={mostrarCarrinho} style={styles.carrinho}>
          Carrinho
        </button>
        {eCarrinhoVisivel ? <DetalhesCarrinho carro={carro} /> : null}
      </div>
    );
  }
}

export default Carrinho