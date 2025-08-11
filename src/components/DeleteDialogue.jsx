const DeleteDialog = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg">
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h3 className="text-lg font-semibold mb-15">
          Are you sure you want to delete this job?
        </h3>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 mr-4"
            onClick={onDelete}
          >
            Yes, Delete
          </button>
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteDialog;
