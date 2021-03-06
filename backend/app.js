const express = require("express");
const morgan = require("morgan");
const expressSession = require("express-session");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorControler");
const authRouter = require("./routes/authRoutes");
const genRouter = require("./routes/generalRouter");
const app = express();
const sessionStore = require("session-file-store")(expressSession);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(
  expressSession({
    name: "bearer",
    secret: "secretkey",
    store: new sessionStore(),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.use((req, res, next) => {
  req.requestedTime = new Date().toString();
  next();
});

// 2.) Route handler
app.use("/api/v1", authRouter);
app.use("/api/v1", genRouter);

//wrong api urlhandle
app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
