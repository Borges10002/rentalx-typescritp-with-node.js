import uploadConfig from "../../../../config/upload";
import multer from "multer";
import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ProfileUserController } from "@modules/accounts/useCases/profileUser/ProfileUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  uploadAvatar.single("avatar"),
  ensureAuthenticated,
  updateUserAvatarController.handle
);

usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { usersRoutes };
