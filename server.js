
const express = require('express');
const morgan = require('morgan')
const path = require('path')

const app = express()

// Settings

app.set('AppName', 'Express Course')
app.set('port', 3000)


// Middlewares

app.use(express.json())
app.use(morgan("dev"))

// Routes


app.get("/paris", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paris.html'));
});

app.get("/tokio", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tokio.html'));
});

app.get("/roma", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'roma.html'));
});

app.get("/dashboard", (req,res) => {
    res.sendFile("Dashboard page")
})

console.log(__dirname)

app.use("/public", express.static(path.join(__dirname,'public')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

app.listen(app.get('port'))
console.log(`Server ${app.get('AppName')} on port ${app.get('port')}`)