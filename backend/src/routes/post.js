import { Router } from "express";
import {getpost,addpost,deletepost,editpost} from '../controllers/post.js';
import asyncHandler from "../utils/asyncHandler.js";
const postRouter=new Router();

postRouter.route('/posts').get(asyncHandler(getpost));

postRouter.route('/posts').post(asyncHandler(addpost));

postRouter.route('/delete/:id').delete(asyncHandler(deletepost));

postRouter.route('/edit/:id').patch(asyncHandler(editpost));

export default postRouter;