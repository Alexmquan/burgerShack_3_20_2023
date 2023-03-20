import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:burgerId', this.getBurgerById)
      .post('', this.createBurger)
      .delete('/:burgerID', this.deleteBurger)
  }
  async createBurger(req, res, next) {
    try {
      let burgerData = req.body
      let burger = await burgersService.createBurger(burgerData)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burgers = await burgersService.getBurgerById(burgerId)
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async getBurgers(req, res, next) {
    try {
      const query = req.query
      const burgers = await burgersService.getBurgers(query)
      return res.send(burgers)

    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      await burgersService.deleteBurger(burgerId)
      return res.send('Deleted Burger')
    } catch (error) {
      next(error)
    }
  }
}