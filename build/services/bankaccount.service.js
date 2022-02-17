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
const bankaccount_repository_1 = require("../repository/bankaccount.repository"); //import Back Account repository
class BankAccountService {
    constructor() {
        /**
         * Find method to find all bank accounts in the database
         * @returns all bank accounts
         */
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const bankAccounts = yield this.bankAccountRepository.find({
                relations: ['customer', 'tag']
            });
            return bankAccounts;
        });
        /**
         * FindOne method to retrieve a specific bank account
         * @param id of bank account
         * @returns back account
         */
        this.getOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const findBankAccount = yield this.bankAccountRepository.findOne(id, {
                relations: ['tag']
            });
            return findBankAccount;
        });
        /**
         * Save method to create/add a new bank account to the database
         * @returns the new bank account
         */
        this.create = (bankAccount) => __awaiter(this, void 0, void 0, function* () {
            const newBankAccount = yield this.bankAccountRepository.save(bankAccount);
            return newBankAccount;
        });
        /**
         * Update method to update a specific bank account on the database
         * @param id of bank account
         * @returns updated bank account
         */
        this.update = (bankAccount, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedBankAccount = yield this.bankAccountRepository.update(id, bankAccount);
            return updatedBankAccount;
        });
        /**
         * Delete method to delete specific bank account from database
         * @param id of bank account
         * @returns deleted bank account
         */
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedPost = yield this.bankAccountRepository.delete(id);
            return deletedPost;
        });
        this.bankAccountRepository = (0, typeorm_1.getConnection)('user').getCustomRepository(bankaccount_repository_1.BankAccountRepository);
    }
}
exports.BankAccountService = BankAccountService;
