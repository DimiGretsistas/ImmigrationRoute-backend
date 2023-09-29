require("dotenv").config();
require("./db");
const jwt = require("express-jwt");
const express = require("express");
const { isAuthenticated } = require('./middleware/jwt.middleware');

const app = express();

require("./config")(app);

//  Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api/", indexRoutes);

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)

const journeyRouter = require('./routes/journey.routes');
app.use('/journeys', isAuthenticated, journeyRouter);

const taskRouter = require('./routes/task.routes');
app.use('/task', taskRouter);

const userRouter = require("./routes/user.routes");
app.use("/user", isAuthenticated, userRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
