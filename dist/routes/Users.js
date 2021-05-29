"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = exports.updateOneUser = exports.addOneUser = exports.getAllUsers = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const UserDao_mock_1 = __importDefault(require("@daos/User/UserDao.mock"));
const constants_1 = require("@shared/constants");
const userDao = new UserDao_mock_1.default();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
/**
 * Get all users.
 *
 * @param req
 * @param res
 * @returns
 */
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield userDao.getAll();
        return res.status(OK).json({ users });
    });
}
exports.getAllUsers = getAllUsers;
/**
 * Add one user.
 *
 * @param req
 * @param res
 * @returns
 */
function addOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: constants_1.paramMissingError,
            });
        }
        yield userDao.add(user);
        return res.status(CREATED).end();
    });
}
exports.addOneUser = addOneUser;
/**
 * Update one user.
 *
 * @param req
 * @param res
 * @returns
 */
function updateOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: constants_1.paramMissingError,
            });
        }
        user.id = Number(user.id);
        yield userDao.update(user);
        return res.status(OK).end();
    });
}
exports.updateOneUser = updateOneUser;
/**
 * Delete one user.
 *
 * @param req
 * @param res
 * @returns
 */
function deleteOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield userDao.delete(Number(id));
        return res.status(OK).end();
    });
}
exports.deleteOneUser = deleteOneUser;
