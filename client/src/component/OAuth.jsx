import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice'; // ✅ Import signInFailure
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const user = resultsFromGoogle.user;

            // ✅ Make sure you handle API response correctly
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    googlePhotoUrl: user.photoURL,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Google sign-in failed');
            }

            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            dispatch(signInFailure(error.message)); // ✅ Proper error handling
        }
    };

    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className='w-6 h-6 mr-2' />
            Continue with Google
        </Button>
    );
}



// import {Button} from 'flowbite-react';
// import {AiFillGoogleCircle} from 'react-icons/ai';
// import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
// import { app } from '../firebase';
// import { useDispatch } from 'react-redux';
// import { signInSuccess } from '../redux/user/userSlice';
// import { useNavigate } from 'react-router-dom';

// export default function OAuth(){
//     const dispatch = useDispatch();
//     const auth = getAuth(app);
//     const navigate = useNavigate();
//     const handleGoogleClick = async () =>{
//         const provider = new GoogleAuthProvider()
//         provider.setCustomParameters({prompt: 'select_account'})
//         try{
//             const resultsFromGoogle = await signInWithPopup(auth, provider)
//             const res = await fetch('/api/auth/google', {
//                 method: 'POST', 
//                 headers: { 'Content-Type': 'application/json'},
//                 body: JSON.stringify({
//                     name: resultsFromGoogle.user.displayName,
//                     email: resultsFromGoogle.user.email,
//                     googlePhotoUrl: resultsFromGoogle.user.photoURL,
//                 }),
//             })
//             const data = await res.json()
//             if(res.ok){
//                 dispatch(signInSuccess(data))
//                 navigate('/');
//             }
//         }catch(error){
//             console.log(error);
//         }
//     }
//     return (
//         <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
//             <AiFillGoogleCircle className='w-6 h-6 mr-2' />
//             Continue with Google
//         </Button>
//     )
// }