import {Routes, Route} from 'react-router-dom'

import Navigation from "./routes/navigation/navigation";
import Directory from "./components/directory/directory";
import Shop from "./routes/shop/shop";
import Authentication from './routes/authentication/authentication';
import CheckOut from './routes/checkout/checkout';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';

import {useEffect} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./firebase/fiirebase.utils";




const App = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
    })
    return unsubcribe;
}, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Directory />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>

  );
}

export default App;
