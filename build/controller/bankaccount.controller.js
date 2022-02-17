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
exports.BankAccountController = void 0;
const express_1 = require("express");
const bankaccount_service_1 = require("../services/bankaccount.service"); //import Bank Account service
class BankAccountController {
    constructor() {
        /**
         * Method to execute index in bank account service and return bank account in json format
         */
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const bankAccount = yield this.bankAccountService.index();
            res.send(bankAccount).json();
        });
        /**
         * Method to execute getOne method in bank account service and return bank account
         */
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            const getBankAccount = yield this.bankAccountService.getOne(Number(id));
            res.send(getBankAccount);
        });
        /**
         * Method to execute create method in bank account service and return newly created bank account
         */
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const bankAccount = req['body'];
            const newBankAccount = yield this.bankAccountService.create(bankAccount);
            res.send(newBankAccount);
        });
        /**
         * Method to execute update in bank account service and return updated bank account
         */
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const bankAccount = req['body'];
            const id = req['params']['id'];
            res.send(this.bankAccountService.update(bankAccount, Number(id)));
        });
        /**
         * Method to execute delete in bank account service and return {}
         */
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            res.send(this.bankAccountService.delete(Number(id)));
        });
        this.bankAccountService = new bankaccount_service_1.BankAccountService(); // create new instance of service
        this.router = (0, express_1.Router)();
        this.routes();
    }
    /**
     * Configure the routes of controller
     */
    routes() {
        this.router.get('/', this.index);
        this.router.get('/:id', this.getOne);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
exports.BankAccountController = BankAccountController;
