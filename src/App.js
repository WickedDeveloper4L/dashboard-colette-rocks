import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { auth } from './firebase/firebase.utils';
import { getDoc } from 'firebase/firestore/lite';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from './redux/user/userReducer';

function App() {

  const dispatch = useDispatch()

  React.useEffect(
    ()=>{
      auth.onAuthStateChanged(async (userAuth)=>{
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth)
          const snapshot = await getDoc(userRef)

          dispatch(updateCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          }))
        } else{
          dispatch(updateCurrentUser(null))
        }
      })
    },[dispatch]
  )
  
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
