const express =  require('express');
const cors = require('cors') // This is new
const app = express(); // invoking express
const PORT = 8000;
const DB = "pets";  

//--- MIDDLEWARE ---
app.use( express.json() );
app.use(cors())

app.use( express.urlencoded({ extended: true }) );


//CONNECT to the DB using mongoose
require ("./config/config")(DB)

// === import the routes AFTER the DB connected ===
require("./routes/route")(app)


//START THE SERVER
app.listen(PORT, () => console.log(`>>>>server up on PORT : ${PORT}<<<`))