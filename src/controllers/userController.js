import User from "../models/User.js"
import crypto from 'node:crypto'

export const createUser = async (req, res) => {
    try {
        const newUser = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }

        const user = await User.create(newUser)
        res.status(201).json(user)

    } catch (error) {
        res.status(500).json({error:"Erro ao criar usuário"})
    }
}

export const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.findAll()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar usuários"})
    }

}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error:"Erro ao deletar um usuário"})
    }

}


export const updtadeUser = async (req, res) => {
    try {
        const updated = await User.update(
            {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            },
            {
                where: {id: req.params.id}
            }

    )
        res.status(200).json(updated)

    } catch (error) {
        res.status(500).json({error:"Erro ao deletar um usuário"})
    }

}