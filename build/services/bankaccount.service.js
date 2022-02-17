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
exports.BankAccountService = void 0;
const typeorm_1 = require("typeorm");
const bankaccount_repository_1 = require("../repository/bankaccount.repository");
class BankAccountService {
    constructor() {
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const bankAccounts = yield this.bankAccountRepository.find({
                relations: ['tag']
            });
            return bankAccounts;
        });
        this.getOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const findBankAccount = yield this.bankAccountRepository.findOne(id, {
                relations: ['tag']
            });
            return findBankAccount;
        });
        this.create = (bankAccount) => __awaiter(this, void 0, void 0, function* () {
            const newBankAccount = yield this.bankAccountRepository.save(bankAccount);
            return newBankAccount;
        });
        this.update = (bankAccount, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedBankAccount = yield this.bankAccountRepository.update(id, bankAccount);
            return updatedBankAccount;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedPost = yield this.bankAccountRepository.delete(id);
            return deletedPost;
        });
        this.bankAccountRepository = (0, typeorm_1.getConnection)('user').getCustomRepository(bankaccount_repository_1.BankAccountRepository);
    }
}
exports.BankAccountService = BankAccountService;
