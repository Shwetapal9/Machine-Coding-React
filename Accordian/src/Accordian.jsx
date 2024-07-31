import { useState } from "react"

const Accordian = ()=>{
    const [data, setData] = useState([
        {
          id: 1,
          title: "Section-1",
          Des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde assumenda, fugiat ea, nostrum rem dolorem eius perferendis quas veritatis nihil distinctio doloribus, excepturi dignissimos sunt animi cupiditate nemo.",
          expand: false,
        },
        {
          id: 2,
          title: "Section-2",
          Des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde assumenda, fugiat ea, nostrum rem dolorem eius perferendis quas veritatis nihil distinctio doloribus, excepturi dignissimos sunt animi cupiditate nemo.",
          expand: false,
        },
        {
          id: 3,
          title: "Section-3",
          Des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptates unde assumenda, fugiat ea, nostrum rem dolorem eius perferendis quas veritatis nihil distinctio doloribus, excepturi dignissimos sunt animi cupiditate nemo.",
          expand: false,
          
        },])

        const handleData = (id) =>{
            setData(data.map((item) => item.id === id
             ? {...item, expand : !item.expand}
             : {...item, expand : false}))
        }


    return(
        <>
            <h1>Hi I'm Accordian</h1>
            {data.map((acc)=>(
                <div key={acc.id}>
                    <h2 style={{
                    border: "2px solid black",
                    backgroundColor: "Grey",
                    color: "#fff",
                    cursor: "pointer",
                    width: "100%",               
                    }} onClick={()=>handleData(acc.id)}>{acc.title}</h2>
                   {acc.expand && <div>{acc.Des}</div>}
                </div>
            ))}
        </>
    )
}

export default Accordian