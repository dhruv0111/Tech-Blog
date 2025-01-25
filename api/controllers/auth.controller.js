import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password || username === '' || email === '' || password === '') {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'All fields are required',
    });
  }

  // Hash the password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'SignUp Successful',
    });
  } catch (error) {
    // Handle errors (e.g., duplicate keys)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Username or email already exists',
      });
    }

    // Pass unexpected errors to the error handler
    next(error);
  }
};





















// import User from '../models/user.model.js';
// import bcryptjs from 'bcryptjs'
// import { errorHandler } from '../utils/error.js';

// export const signup = async (req, res, next)=>{
//     const {username, email, password} = req.body;

//     if(!username || !email || !password || username==='' || email==='' || password === ''){
//         return res.status(400).json({message: 'All fields are required'});
//     }
//     {
//         next(errorHandler(400,'All fields are required'))
//     }
//     const hashedPassword = bcryptjs.hashSync(password, 10);

//     const newUser = new User({
//         username, 
//         email,
//         password: hashedPassword,
//     });
    
//     try{
//         await newUser.save();
//         res.json('SignUp Successful');
//     }catch(error){
        
//         next(error);
//     }

    
    
// };