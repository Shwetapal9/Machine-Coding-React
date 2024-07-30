const Modal =({setIsOpen})=>{
    return( 
    <>
    <div className="backdrop" onClick={()=>setIsOpen(false)}>
        </div>
        <div  className="modal">
        <div className="close-modal" onClick={()=>setIsOpen(false)}>X</div>
        <h3>Hello Modal</h3>
        </div>
        
    </>
    )
}
export default Modal