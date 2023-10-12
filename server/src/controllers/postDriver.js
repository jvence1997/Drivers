const { Driver } = require('../db.js')

const CreateDriver = async (data) => {
    const { name, surname, nationality, image, dob, description, teams } = data;
    //utilizando el metodo create de sequelize .create() realizo un post
    //al modelo de Driver validando que todos los datos ingresen correctamente
    if (name && surname && nationality && image && dob && description && teams) {
        const newDriver = await Driver.create({
            name,
            surname,
            nationality,
            image,
            dob,
            description,
            teams
        })
        return newDriver
    } else {
        throw new Error ('Faltan campos por llenar');
    }
}

module.exports = {
    CreateDriver
}
