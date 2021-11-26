import React from "react";
import Modal from "../Modal/Modal";
import { Route } from "react-router";
import AddNotation from "./addNotation";

const AddNotationModal = ({ isModalActive, setActive, updateData}) => {
  return (
    <>
      <Modal active={isModalActive} setActive={setActive}>
        <AddNotation updateData={updateData} setActive={setActive}/>
      </Modal>
    </>
  );
};

export default AddNotationModal;
