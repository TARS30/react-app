

import { useAddCabin } from "./useAddCabin";
import { UseDeleteCabin } from "./useDeleteCabin";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;

  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 5px;
  button {
    background-color: #4f46e5;
    color: white;
    padding: 7px;
    border-radius: 10px;
    border: none;
    transition: scale 0.1s ease;
  }
  button:hover {
    background-color: #4338ca;
  }
  button:active {
    scale: 0.95;
  }
`;

const CabinRow = ({ cabin }) => {
  const { addCabin } = useAddCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const duplicateHandler = () => {
    addCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };

  const { isDeleting, deleteCabin } = UseDeleteCabin();

  return (
    <>
      <Table.Row columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <StyledDiv>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />

              <Menus.List id={cabinId}>
                <Menus.Button onClick={duplicateHandler}>
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="cabins"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(cabinId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </StyledDiv>
      </Table.Row>
    </>
  );
};

export default CabinRow;
