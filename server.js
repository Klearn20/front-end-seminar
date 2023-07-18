const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();



app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "frontend/views"));

app.use("/static", express.static(path.join(__dirname, "frontend/static")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

const appRoute = require ('./backend/routes/app')

app.use("/", appRoute);



const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
