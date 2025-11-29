import { Sequelize } from "sequelize"

class Database {
    constructor() {
        this.init()
    }

    init(){
        this.db = new Sequelize({
            database: process.env.DBname ?? 'agenda_u0c9',
            host: process.env.DBHost ?? 'dpg-d4l3eoali9vc73e2o090-a',
            username: process.env.DBusername ?? 'agenda_u0c9_user',
            password: process.env.DBpassword  ?? 'r8i93ponSlVdPJ8RF1fOD1rA2jPia98f',
            dialect: process.env.Dialect  ?? 'postgres'
        })
    }
}
export default new Database()