import { Component } from "react";

const styles = {
  button: {
    backgroundColor: '#00A8Ec',
    border: 'none',
    borderRadius: '5px',
    padding: '15px 20px',
    color: '#ffffff',
    cursor: 'pointer'
  }
}

class Button extends Component {
  render() {
    return(
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button