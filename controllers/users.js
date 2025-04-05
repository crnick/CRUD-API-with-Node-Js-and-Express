"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserById = exports.createUser = void 0;
//have all the logic for your callbaack function in this particular file
var uuid_1 = require("uuid");
//browsers can only make get request
var users = []; //acting as a database for storing user data
var createUser = function (req, res) {
    var users = req.body;
    var userId = (0, uuid_1.v4)();
    var userWithId = __assign(__assign({}, users), { id: userId });
    users.push(userWithId);
    res.send("User Added successfuly");
};
exports.createUser = createUser;
var getUserById = function (req, res) {
    var id = req.params.id;
    var foundUser = users.find(function (user) { return user.id === id; });
    res.status(200).json({ message: "Found user ".concat(foundUser) });
};
exports.getUserById = getUserById;
var deleteUser = function (req, res) {
    var id = req.params.id;
    // if condition is true user is kept in array otherwise deleted
    users = users.filter(function (user) { return user.id !== id; });
    res.status(200).json({ message: "User is deleted" });
};
exports.deleteUser = deleteUser;
var updateUser = function (req, res) {
    var id = req.params.id;
    var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, age = _a.age;
    if (!firstName || !lastName || !age) {
        res.status(400).json({ error: "FirstName/ LastName / Age is required" });
    }
    var user = users.find(function (user) { return user.id === id; });
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.status(200).json({ message: "User info has been updated" });
};
exports.updateUser = updateUser;
