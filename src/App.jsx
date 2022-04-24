import { Component } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Produtos from './components/Produtos';
import Title from './components/Title';

class App extends Component {
  state = {
    produtos: [
      { name: 'tomate', price: 150, img: '/produtos/tomate.jpg' },
      { name: 'alface', price: 150, img: '/produtos/alface.jpg' },
      { name: 'ervilhas', price: 150, img: '/produtos/ervilhas.jpg' },
    ],
    carro: [],
    eCarrinhoVisivel: false,
  }

  agregarAoCarrinho = (produto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === produto.name)) {
      const newCarro = carro.map(x => x.name === produto.name
        ? ({
          ...x,
          qtd: x.qtd + 1
        })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...produto,
        qtd: 1
      })
    })
  }

  mostrarCarrinho = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ eCarrinhoVisivel: !this.state.eCarrinhoVisivel })
  }
  render() {
    const { eCarrinhoVisivel } = this.state
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          eCarrinhoVisivel={eCarrinhoVisivel}
          mostrarCarrinho={this.mostrarCarrinho}
        />
        <Layout>
          <Title />
          <Produtos
            adicionarAoCarrinho={this.agregarAoCarrinho}
            produtos={this.state.produtos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
