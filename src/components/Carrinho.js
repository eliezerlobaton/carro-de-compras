import { Component } from 'react'
import BubbleAlert from './BubbleAlert';

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
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>
        <button style={styles.carrinho}>
          Carrinho
        </button>
      </div>
    );
  }
}

export default Carrinho