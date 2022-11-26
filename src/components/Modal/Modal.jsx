import "./modal.css";
import reactDom from "react-dom";

export default function Modal({showModal, setShowModal, children}){
    if(!showModal){
        return null;
    }

    // function handleClick(){
    //     if(!showModal){
    //         document.addEventListener("click", handleOutsideClick(), false);
    //     }
    //     else{
    //         document.removeEventListener("click", handleOutsideClick(), false);
    //     }

    //     setShowModal(!showModal);
    // };

    function handleOutsideClick(){

        setShowModal(!showModal);

    }

    return reactDom.createPortal(
        <div id="overlay" onClick={()=> handleOutsideClick()}>
            <div id="modal">
                {children}
                <button onClick={()=> setShowModal(!showModal)}> X</button>
            </div>
        </div>,
        document.getElementById('portal')
    );
}