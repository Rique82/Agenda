import { Sequelize } from "sequelize"

class Database {
    constructor() {
        this.init()
    }

    init(){
        this.db = new Sequelize({
            DBname:'agenda_u0c9',
            DBHost:'dpg-d4l3eoali9vc73e2o090-a',
            DBusername:'agenda_u0c9_user',
            DBpassword:'r8i93ponSlVdPJ8RF1fOD1rA2jPia98f',
            Dialect:'postgres'
        })
    }
}
export default new Database()