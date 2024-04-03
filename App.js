import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
ModuleRoutes(app)
CourseRoutes(app)
app.listen(process.env.PORT || 4000)