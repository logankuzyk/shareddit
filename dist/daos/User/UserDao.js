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
Object.defineProperty(exports, "__esModule", { value: true });
class UserDao {
    /**
     * @param email
     */
    getOne(email) {
        // TODO
        return Promise.resolve(null);
    }
    /**
     *
     */
    getAll() {
        // TODO
        return Promise.resolve([]);
    }
    /**
     *
     * @param user
     */
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            return Promise.resolve(undefined);
        });
    }
    /**
     *
     * @param user
     */
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            return Promise.resolve(undefined);
        });
    }
    /**
     *
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            return Promise.resolve(undefined);
        });
    }
}
exports.default = UserDao;
