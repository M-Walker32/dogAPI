import BaseController from "../utils/BaseController.js";
import { dogsService } from "../services/DogsService.js";

export class DogsController extends BaseController {
  constructor() {
    super('api/dogs')
    this.router
      .get('', this.getAllDogs)
      .get('/:id', this.getDogById)
      .post('', this.createDog)
      .delete('/:id', this.deleteDog)
      .put('/:id', this.editDog)
  }
  async getAllDogs(req, res, next) {
    try {
      const dogs = await dogsService.getAllDogs(req.guery)
      res.send(dogs)
    } catch (error) {
      next(error)
    }
  }
  async getDogById(req, res, next) {
    try {
      const dogId = req.params.id
      const foundDog = await dogsService.getDogById(dogId)
      res.send(foundDog)
    } catch (error) {
      next(error)
    }
  }

  async createDog(req, res, next) {
    try {
      const dogToCreate = req.body
      const createdDog = await dogsService.createDog(dogToCreate)
      res.send(createdDog)
    } catch (error) {
      next(error)
    }
  }

  async deleteDog(req, res, next) {
    try {
      const dogToDeleteId = req.params.id
      const delortedDog = await dogsService.deleteDog(dogToDeleteId)
      res.send(delortedDog)
    } catch (error) {
      next(error)
    }
  }

  async editDog(req, res, next) {
    try {
      req.body.id = req.params.id
      const editedDog = await dogsService.editDog(req.body)
      res.send(editedDog)

    } catch (error) {
      next(error)
    }
  }
}