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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const express_1 = require("express");
const customer_service_1 = require("../services/customer.service");
// import { CustomerEntity } from '../database/entities/customer.entity'
class CustomerController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerService.index();
            res.send(customers).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { bankAccount } = _a, body = __rest(_a, ["bankAccount"]);
            const customer = req.body;
            const newCustomer = yield this.customerService.create(customer);
            res.send(newCustomer);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _b = req.body, { bankAccount } = _b, body = __rest(_b, ["bankAccount"]);
            const customer = req.body;
            const id = req['params']['id'];
            res.send(this.customerService.update(customer, Number(id)));
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            res.send(this.customerService.delete(Number(id)));
        });
        this.router = (0, express_1.Router)();
        this.customerService = new customer_service_1.CustomerServices();
        this.routes();
    }
    routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
exports.CustomerController = CustomerController;