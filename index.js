const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(cors())
app.use(express.json())

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sportsdiary"
})

//Продукты - вывод, добавление, удаление, редактирование

app.get('/product', (req, res) => {
    pool.query('SELECT * FROM products', (err, results) => {
        if(err)
        {
            res.status(400).json({message: err})
        }
        else
        {
            return res.json({
                data: results
            })
        }

    })
})

app.post('/addProduct', (req, res) =>{
    const {NameProduct, Category, Protein, Fats, Carbohydrates, Calorie} = req.body
    pool.query(`INSERT INTO products (NameProduct, Category, Protein, Fats, Carbohydrates, Calorie) VALUES('${NameProduct}', '${Category}', '${Protein}', '${Fats}', '${Carbohydrates}', '${Calorie}')`, (err, results) =>{
        if(err){
            res.status(400).json({message: err})
        }
        else{
            return res.status(201).json({message: 'Successfully added product '})
        }
    })
})

app.patch('/product', (req, res) =>{
    const {Id, NameProduct, Category, Protein, Fats, Carbohydrates, Calorie} = req.query
    pool.query(`UPDATE products SET NameProduct='${NameProduct}', Category='${Category}', Protein='${Protein}', Fats='${Fats}', Carbohydrates='${Carbohydrates}', Calorie='${Calorie}' WHERE Id=${Id}`, (err, results) =>{
        if(err){
            res.status(400).json({message: err})
        }
        else{
            return res.status(201).json({message: 'Successfully updated product '})
        }
    })
})

app.delete('/product', (req, res) =>{
    const {Id} = req.query
    pool.query(`DELETE FROM products WHERE Id=${Id}`, (err, results) =>{
        if(err){
            res.status(400).json({message: err})
        }
        else{
            return res.status(201).json({message: 'Successfully deleted product '})

        }
    })
})

//Записи дневника - вывод, добавление,

app.get('/diary', (req, res) => {
    pool.query('SELECT * FROM eating', (err, results) => {
        if(err)
        {
            res.status(400).json({message: err})
        }
        else
        {
            return res.json({
                data: results
            })
        }
    })
})

app.post('/addNotation', (req, res) =>{
    const {DayNumber, DateTime, Breakfast, Lunch, Dinner} = req.body
    pool.query(`INSERT INTO eating (DayNumber, DateTime, Breakfast, Lunch, Dinner) VALUES('${DayNumber}', '${DateTime}', '${Breakfast}', '${Lunch}', '${Dinner}')`, (err, results) =>{
        if(err){
            res.status(400).json({message: err})
        }
        else{
            return res.status(201).json({message: 'Successfully added notation '})
        }
    })
})

app.listen(4000, () =>{
    console.log('Server has been started at port 4000')
})
