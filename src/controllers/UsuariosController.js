const mongoose = require("mongoose")
const Usuarios = mongoose.model("Usuarios")

module.exports = {
    async index(req, res){
        const usuario = await Usuarios.find()

        return res.json(usuario)
    },
    async store(req, res){
        //Criação
        const usuario = await Usuarios.create(req.body)

        return res.json(usuario)
    },
    async show(req, res){
        const usuario = await Usuarios.findById(req.params.id)

        return res.json(usuario)
    },
    
    async update(req, res){
        const usuario = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(usuario)
    },

    async destroy(req, res){
        await Usuarios.findByIdAndRemove(req.params.id)

        return res.send()       
    }

}