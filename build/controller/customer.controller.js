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
exports.CustomerController = void 0;
const express_1 = require("express");
const customer_service_1 = require("../services/customer.service"); //import Customer service
class CustomerController {
    constructor() {
        /**
         * Method to execute index in customer service and return customers in json format
         */
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerService.index();
            res.send(customers).json();
        });
        /**
         * Method to execute getOne method in customer service and return customer
         */
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            const getCustomer = yield this.customerService.getOne(Number(id));
            res.send(getCustomer);
        });
        /**
         * Method to execute create method in customer service and return newly created customer
         */
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customer = req['body'];
            const newCustomer = yield this.customerService.create(customer);
            res.send(newCustomer);
        });
        /**
         * Method to execute update in customer service and return updated customer
         */
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customer = req['body'];
            const id = req['params']['id'];
            res.send(this.customerService.update(customer, Number(id)));
        });
        /**
         * Method to execute delete in customer service and return {}
         */
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            res.send(this.customerService.delete(Number(id)));
        });
        this.router = (0, express_1.Router)();
        this.customerService = new customer_service_1.CustomerServices(); //create new customer service
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
exports.CustomerController = CustomerController;
