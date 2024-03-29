import { Component } from "react"
import SingleBook from "./SingleBook"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap"


class DisplayBooks extends Component {

    state = {
        searchQuery :''
    }

   render(){
        return(
        <>  
            <Container>
                <Row>
                    <Col xs={3}>
                        <Form className="justify-content-center">
                            <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Search</Form.Label>
                                <Form.Control 
                                type="text" 
                                value={this.state.searchQuery} 
                                placeholder="what do you want to read?"
                                onChange={(e) =>{this.setState({searchQuery:e.target.value})}} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>{
                    this.props.books.filter((book)=>book.title.toLowerCase().includes(this.state.searchQuery)).map((book)=>
                    <Col>
                        <SingleBook book={book}/>
                    </Col>        
                )}     
                </Row>
            </Container>
        </>
        )        
}}
export default DisplayBooks