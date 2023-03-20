import { Burger, dbBurger } from "../db/dbBurger.js"
import { BadRequest } from "../utils/Errors.js"


class BurgersService {
  async createBurger(burgerData) {
    if (!burgerData.bun || !burgerData.patty) {
      throw new BadRequest('Please include bun and patty choice')
    }
    const burger = new Burger(burgerData)
    await dbBurger.burgers.push(burger)
    return burger
  }
  async getBurgers(burgerReq) {
    let burgers = await dbBurger.burgers
    return burgers

  }

  async getBurgerById(bId) {
    let burger = await dbBurger.burgers.find(b => b.burgerId == bId)

    if (!burger) {
      throw new BadRequest('Invalid ID, please try a different ID')
    }
    return burger
  }

  async deleteBurger(bId) {
    let burgerIndex = dbBurger.burgers.findIndex(b => b.burgerId == bId)

    if (burgerIndex == -1) {
      throw new BadRequest("Burger not found")
    }
    dbBurger.burgers.splice(burgerIndex, 1)
  }

}

export const burgersService = new BurgersService()