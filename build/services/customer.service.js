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
const customer_repository_1 = require("../repository/customer.repository");
class CustomerServices {
    constructor() {
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerRepository.find({
                relations: ['bankAccount']
            });
            return customers;
        });
        this.create = (customer) => __awaiter(this, void 0, void 0, function* () {
            const newCustomer = yield this.customerRepository.save(customer);
            return newCustomer;
        });
        this.update = (customer, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedCustomer = yield this.customerRepository.update(id, customer);
            return updatedCustomer;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedCustomer = yield this.customerRepository.delete(id);
            return deletedCustomer;
        });
        this.customerRepository = (0, typeorm_1.getConnection)('user').getCustomRepository(customer_repository_1.CustomerRepository);
    }
}
exports.CustomerServices = CustomerServices;
