import "./modal.css";
import reactDom from "react-dom";

export default function Modal({ showModal, setShowModal, children }) {
  if (!showModal) {
    return null;
  }

  function handleOutsideClick() {
    setShowModal(!showModal);
  }

  return reactDom.createPortal(
    <div className="overlay" onClick={() => handleOutsideClick()}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR280IBtEFz4F1NuQsv0UAF405nh6J7WmpRyA&usqp=CAU"}
          alt="youtube-logo"
        />
        <div className="modalRight">
          
          <p className="closeButton" onClick={() => setShowModal(!showModal)}> X </p>
            <div className="modalContent">
                <p>{children}</p>
                <p> We've been trying to reach you about your car's extended warranty ... </p>
            </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
