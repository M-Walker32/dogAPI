import { generateId } from '../../client/app/Utils/generateId'
import { DogDB } from '../db/DogDB'
import { BadRequest } from '../utils/Errors'

class DogsService {
  async editDog(newDog) {
    const orginalDog = await this.getDogById(newDog.id)
    orginalDog.name = newDog.name || orginalDog.name
    orginalDog.age = newDog.age || orginalDog.age
    return orginalDog
  }
  async deleteDog(dogToDeleteId) {
    const dogToDelete = await this.getDogById(dogToDeleteId)
    DogDB.dogs = DogDB.dogs.filter(d => d.id !== dogToDeleteId)
  }
  async getAllDogs(query = {}) {
    return DogDB.dogs
  }
  async getDogById(dogId) {
    const foundDog = await DogDB.dogs.find(d => d.id === dogId)
    if (!foundDog) {
      throw new BadRequest('unable to find that pooch')
    }
    return foundDog
  }

  async createDog(dogToCreate) {
    dogToCreate.id = generateId()
    DogDB.dogs.push(dogToCreate)
    return DogDB.dogs
  }
}

export const dogsService = new DogsService()