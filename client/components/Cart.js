import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CartItem, ThankYou} from './index'
import {submitOrderThunk, updateCartThunk} from '../store/cart'
import {Button} from 'reactstrap'
import {Signup} from './auth-form'
// import { state } from 'fs';

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      step: null
    }
    this.submitOrder = this.submitOrder.bind(this)
    this.validSubmit = this.validSubmit.bind(this)
  }

  submitOrder() {
    const {email, cart, submitOrderThunk, updateCartThunk, KEY} = this.props
    const clearedCart = []
    const order = {
      email,
      items: cart
    }
    submitOrderThunk(order)
    updateCartThunk(clearedCart)
    localStorage.setItem(KEY, JSON.stringify(clearedCart))
  }

  validSubmit() {
    const {email} = this.props
    if (email) {
      this.submitOrder()
      this.setState({
        step: 2
      })
    } else {
      this.setState({
        step: 1
      })
    }
  }
  render() {
    const {cart, games, orderStatus} = this.props
    const {step} = this.state
    switch (step) {
      case 1:
        return (
          <div>
            <h4>Sign Up to complete order</h4>
            <Signup />
          </div>
        )
      case 2:
        return <ThankYou />
      default:
        return (
          <div>
            <header>
              <h1>Cart</h1>
            </header>
            {cart.map(game => <CartItem game={game} key={games.id} />)}
            <Button
              onClick={() => {
                this.validSubmit()
              }}
            >
              Submit Order
            </Button>
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    email: state.user.email,
    orderStatus: state.cart.orderStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitOrderThunk: order => dispatch(submitOrderThunk(order)),
    updateCartThunk: cart => dispatch(updateCartThunk(cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
