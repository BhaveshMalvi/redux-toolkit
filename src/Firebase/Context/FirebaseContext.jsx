import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useSelector } from "react-redux";



const firebaseConfig = {
    apiKey: "AIzaSyC-9dB2d0XH0zb7-iY46hHwfwQO_ByOZvU",
    authDomain: "react-intern-project.firebaseapp.com",
    projectId: "react-intern-project",
    storageBucket: "react-intern-project.appspot.com",
    messagingSenderId: "522099272303",
    appId: "1:522099272303:web:6cd3f0864198052ed5bb9a",

  };



export const FirebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth =   getAuth(FirebaseApp)
export const FirebaseStoredb = getFirestore(FirebaseApp)


export const FirebaseContext = createContext(null)

export const useFirebaseAuth = () =>  useContext(FirebaseContext) // custom hook


export const FirebaseContextProvider = (props) => {

//  const emails =  useSelector(state => state.userData.currentUsers)
//  console.log(emails);
    

    const signup = (email, password) => {
     return   createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const signIn = (email, password) => {

       return    signInWithEmailAndPassword(firebaseAuth, email, password)         
    }

    const handlesignOut = async(resp) => {
      return await signOut(firebaseAuth).then((resp) => resp)
    }




//   const getUserData =  (emails) => {
//     const querySnapshot =  getDocs(collection(FirebaseStoredb, "signupUsers"));
//     // console.log(emails);
//   //  return console.log(querySnapshot);
//       // querySnapshot.then((resp) =>  resp)
    

//   // const newDta =  querySnapshot.forEach((doc) => {
//   //       const userData = doc.data();
//   //       if (userData.email === emails) {
//   //           console.log("shf", userData);
//   //           return userData; // exit forEach loop early once user is found
//   //       }
//   //   });

//     // return newDta;
// };



// const getUserData = (email) => {
//   console.log("email", email);
//   return new Promise((resolve, reject) => {
//     getDocs(collection(FirebaseStoredb, "signupUsers"))
//       .then(async (querySnapshot) => {
//         let userFound = null;
//         for (const doc of querySnapshot.docs) {
//           const userData = doc.data();
//           if (userData.email === email) {
//             userFound = userData;
//             console.log(userData.email);
//             resolve(userFound);
//             return; // exit the loop once user is found
//           }
//         }
//         resolve(userFound); // Resolve with null if user not found
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

    // getUserData("nik@gmail.com").then((user) => console.log("user", user) )


    // const getUserData = async (email) => {

    //  let resp = await getDocs(collection(FirebaseStoredb, "signupUsers"))

    //  return await resp.forEach((item) =>{ if((item.data().email) === email) return item.data()})
    // }

    // getUserData("nik@gmail.com").then((user) => console.log(user))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  //   const getUserData = async (email) => {
  //     const querySnapshot = await getDocs(collection(FirebaseStoredb, "signupUsers"));
      
  //     const user = querySnapshot.docs.find((doc) => {
  //         return doc.data().email === email;
  //     });
  
  //     return user ? user.data() : null;
  // };
  
  //      getUserData("nik@gmail.com").then((user) => console.log(user));
    
   
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  const getUserData = async (email) => {
    const querySnapshot = await getDocs(collection(FirebaseStoredb, "signupUsers"));
    
    let userData = null;

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === email) {
            userData = data;
        }
    });

    return userData;
};

// getUserData("nik@gmail.com").then((user) => console.log(user));






   return (
            <FirebaseContext.Provider value={{signup, signIn, handlesignOut, getUserData}}> 
                 {props.children}
          </FirebaseContext.Provider>
    )
}



