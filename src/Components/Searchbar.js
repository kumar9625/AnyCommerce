import React, { useState } from "react";
import {
    Container, Col, Row, FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
} from "reactstrap";






const Searchbar = () => {

    const [query, setQuery] = useState("laptops");

    const handleSubmit = (event) => {
        event.preventDefault();
        const links = {
            query,
            url
        };
    }
    const url = `https://api.pexels.com/v1/search?query=${query} &per_page=6`;



    return (
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

    )
};

export default Searchbar;