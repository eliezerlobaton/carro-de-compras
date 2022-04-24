import { Component } from 'react'
import Carrinho from './Carrinho'
import Logo from './Logo'
const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  }
}


class Navbar extends Component {
  render() {
    const { carro, eCarrinhoVisivel, mostrarCarrinho } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carrinho
          carro={carro}
          eCarrinhoVisivel={eCarrinhoVisivel}
          mostrarCarrinho={mostrarCarrinho}
        />
      </nav>
    )
  }
}

export default Navbar