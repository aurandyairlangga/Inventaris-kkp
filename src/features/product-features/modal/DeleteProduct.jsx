import Modal from "@/components/Modal";

const DeleteProduct = ({
  showModalDelete,
  closeModalDelete = () => {},
  onDelete = () => {},
}) => {
  return (
    showModalDelete && (
      <Modal>
        <h1 className="flex justify-center">tombol delete</h1>
        <div className="flex justify-between">
          <button
            className="bg-blue-600 rounded-xl border px-4 py-2 text-white"
            onClick={() => closeModalDelete(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 rounded-xl border px-4 py-2 text-white"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </Modal>
    )
  );
};

export default DeleteProduct;
