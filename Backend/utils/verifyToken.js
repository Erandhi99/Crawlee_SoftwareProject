import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(createError(401, "You are not authorized"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Token invalid."));
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyTeacher = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isTeacher) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyTecherOrAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isTeacher || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};
