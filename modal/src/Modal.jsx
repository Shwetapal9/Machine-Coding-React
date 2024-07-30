const Modal =({setIsOpen})=>{
    return <div className="modal" onClick={()=>setIsOpen(false)}>
        <div className="close-modal" onClick={()=>setIsOpen(false)}>X</div>
        <h3>Hello Modal</h3>
    </div>
}
export default Modal