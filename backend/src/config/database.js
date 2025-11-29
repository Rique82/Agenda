import { Sequelize } from "sequelize"

class Database {
    constructor() {
        this.init()
    }

    init(){
        this.db = new Sequelize({
            database:'agenda_u0c9',
            host:'dpg-d4l3eoali9vc73e2o090-a',
            username:'agenda_u0c9_user',
            password:'r8i93ponSlVdPJ8RF1fOD1rA2jPia98f',
            dialect:'postgres'
        })
    }
}
export default new Database()