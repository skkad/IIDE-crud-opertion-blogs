const express = require('express');
const app = express();
const routes = require('./routes/useRoutes');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/',routes);

app.listen(3000,()=>{
    console.log("server running on port 3000");
})