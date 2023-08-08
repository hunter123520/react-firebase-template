import React , {useState,useEffect} from 'react'
import { db } from '../Config/firebase'
import { getDocs,collection } from 'firebase/firestore';

const HomePage = () => {
  const [users,setUsers] = useState([]);
  const usersCollection = collection(db,"table")
  useEffect(()=>{
    const getUsers = async () =>{
      try{
        const data = await getDocs(usersCollection)
        const FiltredData = data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }));
        console.log(FiltredData)
        setUsers(FiltredData)
      }catch(err){
        console.error(err)
      }
      
    }
    getUsers()
  },[])

  return (
    <div>
      {users.map((user)=>{
        return <div>
          <h1>
            {user.firstName}
          </h1>
          <h2>
            {user.lastName}
          </h2>
        </div>
      })}
    </div>
  )
}

export default HomePage