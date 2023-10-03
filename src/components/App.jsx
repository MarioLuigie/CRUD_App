import { useContext } from "react";

import { TaskContext } from "../Store/TaskContext";
import Container from "../layouts/Container";
import Modal from "../UI/Modal";
import RemoveSelected from "./Modals/RemoveSelected";
import RemoveAll from "./Modals/RemoveAll";

export default function App() {
  const { isModalOpen } = useContext(TaskContext);

  return (
    <>
      {isModalOpen.isRemoveSelected && <Modal>
        <RemoveSelected />
      </Modal>}
      {isModalOpen.isRemoveAll && <Modal>
        <RemoveAll />
      </Modal>}
      <Container />
    </>
  )
}

 
