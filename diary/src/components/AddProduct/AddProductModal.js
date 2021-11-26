import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Route } from "react-router";
import AddProduct from "./addProduct";

const AddProductModal = ({ isModalActive, setActive, updateData }) => {
  console.log("Product add ");
  return (
    <>
      <Modal active={isModalActive} setActive={setActive}>
        <AddProduct setActive={setActive} updateData={updateData}/>
      </Modal>
    </>
  );
};

export default AddProductModal;
