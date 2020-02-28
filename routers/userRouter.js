import express from "express";
import routes from "../routes";
import { editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, (req, res) => res.send("User Details2"));

userRouter.get(routes.changePassword, changePassword);

export default userRouter;
