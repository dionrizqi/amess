import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import MasterRoute from "./routes/MasterRoute.js";
import TemplateRoute from "./routes/TemplateRoute.js";
import FileUpload from "express-fileupload";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: "rahasianegara",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(MasterRoute);
app.use(TemplateRoute);

// store.sync();

app.listen(process.env.PORT || 5000, ()=> {
    console.log('Server up and running...');
});
