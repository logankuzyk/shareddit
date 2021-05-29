"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = __importDefault(require("jsonfile"));
class MockDaoMock {
    constructor() {
        this.dbFilePath = 'src/daos/MockDb/MockDb.json';
    }
    openDb() {
        return jsonfile_1.default.readFile(this.dbFilePath);
    }
    saveDb(db) {
        return jsonfile_1.default.writeFile(this.dbFilePath, db);
    }
}
exports.default = MockDaoMock;
