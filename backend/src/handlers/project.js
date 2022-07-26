import Project from '../model/Project.js'

import { checkUserIsProjectOwner } from '../api/utils.js'

export const createProjectMongo = async (userEmail, projectData) => {
  try {
    const project = await Project({ userEmail, ...projectData }).save()

    return project
  } catch (err) {}
}

export const findAllProjectsByUserIdMongo = async userEmail => {
  try {
    const projects = await Project.find({ userEmail })
    return projects
  } catch (err) {
    throw Error('error when trying to find user projects in mongoDB')
  }
}

export const updateProjectByIdMongo = async (userEmail, _id, projectData) => {
  try {
    const updatedProject = { ...projectData, userEmail }
    await Project.findOneAndUpdate({ _id }, updatedProject)

    return updatedProject
  } catch (err) {}
}

export const deleteProjectByIdMongo = async (userEmail, _id) => {
  try {
    const project = await Project.findOne({ _id })

    if (project === null) return { message: 'project not found' }

    if (!checkUserIsProjectOwner(userEmail, project))
      return { message: 'this user is not the owner of the project!' }

    const delationResponse = await Project.deleteOne({ _id })

    if (delationResponse.deletedCount === 0)
      return { message: 'error finding your project for delation' }

    return { message: 'project deleted successfully' }
  } catch (err) {}
}

export const findOneProjectsById = async _id => {
  const project = await Project.findOne({ _id })

  if (project === null) return undefined

  return project
}
