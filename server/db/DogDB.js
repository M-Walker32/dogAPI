import { generateId } from '../../client/app/Utils/generateId'

export const DogDB = {
  dogs: [
    {
      name: 'Myra',
      age: 4,
      id: generateId()
    },
    {
      name: 'Milo',
      age: 80,
      id: generateId()
    },
    {
      name: 'Pennywise',
      age: 47298,
      id: generateId()
    },
  ]
}