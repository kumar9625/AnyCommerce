import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Row,
    Col

} from "reactstrap";


const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;
    
        Array.from(cartItem).forEach(item => {
            amount += parseFloat(item.productPrice);
        });
    




    return (
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {Array.from(cartItem).map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height={80}
                                    src={item.tinyImage}
                                    alt="alt"

                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price: $ {item.productPrice}</span>
                                <Button color="danger" onClick={() => removeItem(item)}>Remove Item</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>

                ))}
            </ListGroup>
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Total Cart Value:
                        </CardHeader>
                        <CardBody>
                            Total {cartItem.length} Items  Costs ${amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Buy All</Button>

                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">It's So Empty Here!</h1>
                )
            }
        </Container>
    )
};

export default Cart;