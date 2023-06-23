import express  from "express";
import { deleteUser, getSpecificUser, displayAllUsers, userLoginController, userRegisterController, updateUser } from "../controller/userController.js";
import isLogin from "../middleware/isLogin.js";

import { createContributor } from '../controller/contributor.js';
import { createCampaign } from '../controller/createCampaign.js';


const userRouters = express.Router();



// Register User
userRouters.post("/signup", userRegisterController)

// Login user
userRouters.post("/signin", userLoginController)


// Contributor routes
userRouters.post('/contributor', createContributor);

// Campaign routes
userRouters.post('/create_campaign',isLogin, createCampaign);



// get all users from
userRouters.get("", displayAllUsers)

// get user profile
userRouters.get("/profile/",isLogin, getSpecificUser)

// delete user
// userRouters.delete("/:id", deleteUserController)
userRouters.put("/:id", deleteUser)

// update user
// userRouters.put("/:id", userUpdateController)
userRouters.put("/:id", updateUser)

// userRouters.post("/profile-image",isLogin, upload.single("profile"), profilePhotoUploadController )

export default userRouters;
