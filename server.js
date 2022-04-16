const express = require('express')
const mongoClient = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoClient.connect('mongodb://localhost/blog', 

    /*{ userNewUrlParser: true, useUnifiedTopology: true }*/

    /*process.env.RESTREVIEWS_DB_URI,*/
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    } 
)

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', { articles: articles }) 
})

app.use('/articles', articleRouter) /* all content will be in this directory */

app.listen(5000)