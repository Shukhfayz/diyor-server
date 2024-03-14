import { T } from "./libs/types/common";
import { app } from "./app";

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  try {
  } catch (error) {}
  res.locals.member;
  sessionInstance.member;
});
