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
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./controller/customer.controller");
const typeorm_1 = require("typeorm");
const bankaccount_controller_1 = require("./controller/bankaccount.controller");
const contact_controller_1 = require("./controller/contact.controller");
const tag_controller_1 = require("./controller/tag.controller");
class Server {
    constructor() {
        this.app = (0, express_1.default)(); // init the application
        this.configuration();
        this.routes();
    }
    /**
     * Method to configure the server,
     * If we didn't configure the port into the environment
     * variables it takes the default port 3000
     */
    configuration() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json());
    }
    /**
     * Method to configure the routes
     */
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_1.createConnection)({
                type: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'user',
                password: 'user',
                entities: ['build/database/entities/**/*.js'],
                synchronize: true,
                name: 'user'
            });
            this.customerController = new customer_controller_1.CustomerController();
            this.bankAccountController = new bankaccount_controller_1.BankAccountController();
            this.contactController = new contact_controller_1.ContactController();
            this.tagController = new tag_controller_1.TagController();
            this.app.use('/api/users/', this.customerController.router); // Configure the new routes of the controller post
            this.app.use('/api/bankaccounts/', this.bankAccountController.router);
            this.app.use('/api/contacts/', this.contactController.router);
            this.app.use('/api/tags/', this.tagController.router);
        });
    }
    /**
     * Used to start the server
     */
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`🚀 Server is up and running on port: ${process.env.PORT || 3000}`);
        });
    }
}
const server = new Server(); // Create server instance
server.start(); // Execute the server
