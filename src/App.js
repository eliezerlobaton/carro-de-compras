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
    carro: [
      // { name: 'tomate', price: 150, img: '/produtos/tomate.jpg', qtd: 1 },
    ]
  }

  agregarAoCarrinho = (produto) => {
      return this.setState({
      carro: this.state.carro.concat({
        ...produto,
        qtd: 1
      })
    })
  }

  render() {
    console.log(this.state.carro)
    return (
      <div>
        <Navbar />
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
