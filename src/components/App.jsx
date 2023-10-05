import { useContext } from "react";

import { TaskContext } from "../Store/TaskContext";
import Container from "../layouts/Container";
import Modal from "../UI/Modal";
// import RemoveSelected from "./Modals/RemoveSelected";
import RemoveAll from "./Modals/RemoveAll";
import ModalPortal from "./ModalPortal";

export default function App() {
  const { isModalOpen } = useContext(TaskContext);

  return (
    <>
      <Container />
    </>
  )
}

 
