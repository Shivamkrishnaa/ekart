const Sequelize = require('sequelize');
const db = new Sequelize('example', 'postgres', 'shivam', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});
const todos = db.define('todo', {
    task_person: {
        type: Sequelize.STRING,
        validate: {
            is: ["^[a-z]+$",'i']
        },
        get() {
            const task_title = this.getDataValue('task_title');
            return this.getDataValue('task_person') + '(' + task_title + ')';
        },
    },
    task_title:{
        type:Sequelize.STRING,
        set(val){
            this.setDataValue('task_title', val.toUpperCase());
        }
    },
    status: {
        type: Sequelize.BOOLEAN, defaultValue:true
    },
    my_date:{
        type: Sequelize.DATE , defaultValue: Sequelize.NOW
    }
});
const person = db.define('person', {
    name : {
        type : Sequelize.STRING
    },
    title : { type: Sequelize.STRING
},
    }
,
{ getterMethods :
    {
    fullname()
    {
         return this.name
    }
    }
    },
    {
setterMethods: {
    fullname(value){
        this.setDataValue('name',value.toUpperCase());
    }
}
    }
)
// todos.findAll({
//     where : {
//
//     }
// })
// person.create({
//     name: 'ragg',
//     title: 'advo'
// }).then( person => {console.log('name')})

// force: true will drop the table if it already exists
// todos.sync({force: true}).then(() => {
//     // Table created
//     return
//         todos.create({        task_person: 'ragg',
//             task_title: '420'
//     }).then(todos => {
//         console.log(todos.get('task_person'));
//         });
// });
// const student = db.define('example_table',{
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type:Sequelize.INTEGER,
//         allowNull: false
//     }
// })
//
// student.create({
//     name:"shivam",
//     age: 19
// }).then((student)=>{console.log(student.dataValues.name);
// }).catch( err=> console.log(err))
// //
// student.findAll({
//     where: {
//         name: "shivam"
//     }
// }).then((data) => {
//     console.log(data[0].dataValues.id)
// }).catch(err => console.log(err))
db.sync({alter: true}).then(()=>{console.log('connection est')}).catch((err)=>{console.log(err)})
db.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});
module.exports = {
    todos, person
}