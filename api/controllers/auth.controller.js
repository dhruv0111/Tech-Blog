import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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


export const signin = async (req, res, next) =>{
  const {email, password} = req.body;

  if(!email || !password || email === '' || password===''){
    next(errorHandler(400, 'All fields are required'));
  }
  try{
    const validUser = await User.findOne({email});
    if(!validUser){
      next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return next(errorHandler(400, 'Invalid password'));
    }

    const token = jwt.sign(
      {id:validUser._id}, process.env.JWT_SECRET
    );
    const {password: pass, ...rest} = validUser._doc;
    res.status(200).cookie('access_token', token, {
      httpOnly: true,
    }).json(rest);


    
  }catch(error){
    next(error);
  }
}





















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