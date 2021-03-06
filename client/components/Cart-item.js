import React from 'react'
import {Card, CardImg, CardBody, CardDeck, CardHeader, Button} from 'reactstrap'
const CartItem = props => {
  const {game, removeFromCart} = props
  return (
    <div className="container mx-auto">
      <CardDeck className="m-0 p-0 d-flex justify-content-center">
        <div key={game.id}>
          <Card
            className="text-center mt-3"
            inverse
            style={{
              width: '18rem',
              backgroundColor: '#333',
              borderColor: '#333'
            }}
          >
            <CardHeader>{game.name}</CardHeader>
            <CardBody>
              <CardImg width="100%" src={game.imageUrl} alt="Card image cap" />
              <Button
                className="m-1"
                color="warning"
                onClick={() => {
                  removeFromCart(game)
                }}
              >
                Remove item
              </Button>
            </CardBody>
          </Card>
        </div>
      </CardDeck>
    </div>
  )
}
export default CartItem
