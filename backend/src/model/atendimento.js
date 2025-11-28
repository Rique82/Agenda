import database from "../config/database.js"

class Atendimento {
    constructor() {
        this.model = database.db.define('atendimentos', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.INTEGER
            },
            hora: {
                type: database.db.Sequelize.STRING
            },
            valor: {
                type: database.db.Sequelize.STRING
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN
            },
            idCliente: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'clientes',
                    CONSTRAINT: 'FK_Atendimento_Clientes',
                    key: 'id',
                    references: 'clientes'
                }
            }
        }
        )
    }
}

export default new Atendimento().model