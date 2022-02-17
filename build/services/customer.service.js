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
exports.CustomerServices = void 0;
const typeorm_1 = require("typeorm");
const customer_repository_1 = require("../repository/customer.repository"); //import Customer repository
class CustomerServices {
    constructor() {
        /**
         * Find method to find all customers in the database
         * @returns all customers
         */
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerRepository.find({
                relations: ['bankAccount', 'contact', 'tag']
            });
            return customers;
        });
        /**
         * FindOne method to retrieve a specific customer
         * @param id of customer
         * @returns customer
         */
        this.getOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const findCustomer = yield this.customerRepository.findOne(id, {
                relations: ['bankAccount', 'contact', 'tag']
            });
            return findCustomer;
        });
        /**
         * Save method to create/add a new customer to the database
         * @returns the new tag
         */
        this.create = (customer) => __awaiter(this, void 0, void 0, function* () {
            const newCustomer = yield this.customerRepository.save(customer);
            return newCustomer;
        });
        /**
         * Update method to update a specific customer on the database
         * @param id of customer
         * @returns updated customer
         */
        this.update = (customer, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedCustomer = yield this.customerRepository.update(id, customer);
            return updatedCustomer;
        });
        /**
         * Delete method to delete specific customer from database
         * @param id of customer
         * @returns deleted customer
         */
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedCustomer = yield this.customerRepository.delete(id);
            return deletedCustomer;
        });
        this.customerRepository = (0, typeorm_1.getConnection)('user').getCustomRepository(customer_repository_1.CustomerRepository);
    }
}
exports.CustomerServices = CustomerServices;
