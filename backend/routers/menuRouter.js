import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Menu from '../models/menu.js';


const menuRouter = express.Router();


menuRouter.post(
  '/menu',
  expressAsyncHandler(async (req, res) => {
    const menu = new Menu({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    const createdMenu = await menu.save();
    res.send({
      _id: createdMenu._id,
      name: createdMenu.name,
      email: createdMenu.email,
      subject: createdMenu.subject,
      message: createdMenu.mesage,
    });
  })
);



export default menuRouter;
