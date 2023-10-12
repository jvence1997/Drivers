const axios = require('axios')
const { Team } = require('../db')

const GetAllTeams = async () => {
    const teams = await Team.findAll();

    if (teams.length === 0) {
        const teamsApi = (await axios.get('http://localhost:5000/drivers')).data
            .map((driver) => driver.teams)
            .sort()
            .filter((teams) => teams !== undefined)
            .reduce((acc, teams) => {
                const splitTeams = teams.split(',').map(team => team.trim());// Divide las cadenas de equipos en subcadenas separadas por comas y elimina los espacios en blanco alrededor
                return [...acc, ...splitTeams];// Concatena las subcadenas de equipos en un solo arreglo
            }, []) // Inicializa el acumulador como un arreglo vacío y usa reduce para combinar los elementos en un solo arreglo
            .filter((team, index, arr) => arr.indexOf(team) === index);// Filtra los elementos duplicados del arreglo

        const teamObjects = teamsApi.map(name => ({ name }))
            

        return await Team.bulkCreate(teamObjects);
    }
    else {
        return teams
    }


}

module.exports = { GetAllTeams }