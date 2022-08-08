import React, { useEffect, useState } from "react";
import Axios from "axios";

import { faker } from '@faker-js/faker';
import {
    Container, Col, Row, FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
} from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "563492ad6f917000010000015367d641e29c4d9eb83e0243ad6f3759"



const Buypage = ({ addInCart }) => {
    const [product, setProduct] = useState([]);
    const [query, setQuery] = useState("laptops");
    const url = `https://api.pexels.com/v1/search?query=${query} &per_page=6`



    const handleSubmit = (event) => {
        event.preventDefault();


        fetchPhotos();



    }









    const fetchPhotos = async () => {
        const { data } = await Axios.get(url, {
            header: {
                Authorization: apiKey
            }
        }

        );
        const { photos } = data;
        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.commerce.product(),
            productPrice: faker.commerce.price(),
            id: faker.datatype.uuid()
        }));
        setProduct(allProducts);

    }

    useEffect(() => {
        fetchPhotos();
    }, []);
    return (


        <Container fluid>
            <h1 className="text-primary text-center display-1">Re-Commerce</h1>

            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button
                        color="warning"
                    //TODO: onclick
                    >
                        Add
                    </Button>
                </InputGroup>
            </Form>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>

                        <CartItem product={product} addInCart={addInCart} />

                    </Col>
                ))}
            </Row>
        </Container>
    )



};





export default Buypage;
