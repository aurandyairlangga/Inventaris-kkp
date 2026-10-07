const Modal = ({ children }) => {
  return (
    <div className="fixed bg-black/20 h-dvh w-full top-0 left-0 flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-lg rounded-[28px] bg-white p-5 flex flex-col gap-4 ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
