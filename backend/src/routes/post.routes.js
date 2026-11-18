import { Router } from "express";
import {
    createPost,
    deletePost,
    getPostById,
    getPosts,
    updatePost,
} from "../controller/post.controller.js";

const postRouter = Router();

postRouter.route('/create').post(createPost);
postRouter.route('/').get(getPosts);
postRouter.route('/getPosts').get(getPosts);
postRouter.route('/:id').get(getPostById);
postRouter.route('/:id').patch(updatePost);
postRouter.route('/:id').delete(deletePost);

// Tutorial-compatible aliases
postRouter.route('/update/:id').patch(updatePost);
postRouter.route('/delete/:id').delete(deletePost);

export default postRouter;