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
          src={require("/Users/carlos_mendoza/pursuit/module-3/projects/youtube-react-project/src/u2ube.png")}
          alt="youtube-logo"
        />
        <div className="modalRight">
          
          <p className="closeButton" onClick={() => setShowModal(!showModal)}> X </p>
            <div className="modalContent">
                {/* <p>{children}</p> */}
                <p> We've been trying to reach you about your car's extended warranty ... </p>
            </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
