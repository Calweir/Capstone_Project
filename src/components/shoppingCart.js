import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shoppingCart.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { DropdownButton, DropdownItem, Modal, Button } from "react-bootstrap";

//Used reduce method to make the calculation of the total price of the products in th shopping cart. Calculations are initalised at zero in the beginning.
//Followed https://medium.com/yavar/how-to-use-the-reduce-in-javascript-and-react-4bc8b5f8fa4b Medium article on how this method works and the syntax behind it.
const ShoppingCart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  //Declared the state for both the help modal and the type of shipping method that the user chooses.
  const [selectShipping, setSelectShipping] = useState("Shipping Method");
  const [helpModal, setHelpModal] = useState(false);

  const handleSelect = (eventKey) => {
    setSelectShipping(eventKey);
  };

  const handleModalClose = () => setHelpModal(false);
  const handleModalOpen = () => setHelpModal(true);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h6>Shopping Cart</h6>
      <Container className="cartContainer">
        <Row className="rowDesign">
          {/*Again used the map method to iterate over what the products items that are choosen to be in the shopping cart by the user. */}
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h6>{item.title}</h6>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "150px" }}
              />
              <p>Price: R{item.price.toFixed(2)}</p>
              <p>Quanity: {item.quanity}</p>
            </div>
          ))}
          {/*Used the fixed method to ensure all displayed prices only contain twodecimal places. */}
          <h6>Total Price: R{totalPrice.toFixed(2)}</h6>

          <div className="cartButtons">
            {/*Used dropdown from bootstrap to all the user to click the shipping method and choose between collection or delivery. */}
            <DropdownButton
              variant="warning"
              className="shippingMethodButton"
              onSelect={handleSelect}
              title={selectShipping}
            >
              <DropdownItem eventKey="Delivery">Delivery</DropdownItem>
              <DropdownItem eventKey="Collection">Collection</DropdownItem>
            </DropdownButton>

            <button className="checkoutButton">Checkout</button>
            {/*Button used to allow user to click help and get information about the types of shipping methods. The on click is used to change the state of the function to true and opens the help Modal. */}
            <Button
              variant="success"
              className="helpButton"
              onClick={handleModalOpen}
            >
              Help
            </Button>
          </div>
        </Row>
      </Container>
      {/*Declared the Modal and the information that will be contained and displayed to the user about shipping. */}
      <Modal show={helpModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Delivery: Items get delivered straight to your given address.</p>
          <p>
            Collection: You can collect your items from our nearest Collection
            point.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ShoppingCart;
