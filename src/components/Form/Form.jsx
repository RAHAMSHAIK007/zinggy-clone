import { useEffect, useState } from 'react';
import './Form.css';

const Formfile=()=>{

//     const [name ,setname]=useState("");
//     const [email,setemail]=useState("");
//     const [phno,setPhno]=useState("");    
//     const [address,setaddress]=useState("");    

//     const namechange=(e)=>{
//         setname(e.target.value);
//     };
//     const emailchange=(e)=>{
//         setemail(e.target.value);
//     }
//     const phnochange=(e)=>{
// setPhno(e.target.value);
//     }

//     const addresschange=(e)=>{
//         setaddress(e.target.value);
//     }


// const submituser=(e)=>{
//     e.preventDefault();
//     console.log(name);
//     console.log(email);
//     console.log(phno);
//     console.log(address);
// }
const [data,setData]=useState([])

// const Increment=()=>{
//     setCount(count+1)
// }

// const Decrement=()=>{
    
//     if(count<=0){
//         setCount(0)
//     }
//     else{
//         setCount(count-1)
//     }
// }


useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((err)=>{
        console.log(err);
    })
},[])

console.log(data)
    return(
        // <form onSubmit={submituser}>
        //     <input type="text" onChange={namechange} placeholder='name'/>
        //     <input type="text" onChange={emailchange} placeholder='email'/>
        //     <input type="text" onChange={phnochange} placeholder='Phno'/>
        //     <input type="text" onChange={addresschange} placeholder='address'/>
        //     <button type="submit">Register</button>
        // </form>
        // <div>
        //     <button onClick={Increment}>Increment</button>
        // <span>{count}</span>
        // <button onClick={Decrement}>Decrement</button>
        // </div>
        <div>


          {data?.map((i)=>{
             
                   return (<h5>{i.username}</h5>)
                    
                  
            })}
        </div>
        
    )
}
export default Formfile;




// function App() {

//   // const [count, setCount] = useState(0)

//   // // const [date, setDate] = useState([])

//   // const incremnet = () => {
//   //   setCount(count + 1)
//   // }

//   // const decrement = () => {
//   //   setCount(count -1)
//   // }

//   // const [user, setUser] = useState ({
//   //    name: "",
//   //    email : "", 
//   //    phone : "", 
  
//   //    address : ""
//   // })

//   // const nameChange = (e) => {
//   //   // setUser({...user, [e.target.name] : e.target.value})
//   //   setUser({ ...user, [e.target.name]: e.target.value });
//   // }

//   // const submitUsre = e => {
//   //   e.preventDefault();

//   // }

//   // console.log(user)


// // useEffect(() => {
// //   fetch("https://jsonplaceholder.typicode.com/users")
// //   .then((response) => response.json())
// //   .then((date) => setDate(date))
// //   .catch((e) => console.log(e))

// // }, [])

//   return (
//     <div className="App">
//      <Jscode />
//      {/* <form onSubmit={submitUsre}>
//       <input type='text' onChange={0}  name="name" placeholder='Enter Name' id='id'/>
//       <input type='text'  onChange={nameChange}  name="email" placeholder='Enter Email' id='id'/>
//       <input type='text'  onChange={nameChange}   name="phone" placeholder='Enter Phone' id='id'/>
//       <input type='text'  onChange={nameChange}  name="address" placeholder='Enter Address' id='id'/>
//       <button type='submit'   id='id'>Register</button>
//      </form> */}
//      {/* <Header/>
//      <Body/>
//      <Footer/> */}
//      {/* <h1>{count}</h1>
//      <button onClick={incremnet}>increment</button>
//      <button onClick={decrement}>decrement</button> */}


// {/* {date.map((each) => (
//   <div>
//     <p>{each.name}</p>
//   </div>
// ))} */}

//     </div>
//   );
// }

// export default App;
