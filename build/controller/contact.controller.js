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
exports.ContactController = void 0;
const express_1 = require("express");
const contact_service_1 = require("../services/contact.service");
class ContactController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const contact = yield this.contactService.index();
            res.send(contact).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const contact = req['body'];
            const newContact = yield this.contactService.create(contact);
            res.send(newContact);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const contact = req['body'];
            const id = req['params']['id'];
            res.send(this.contactService.update(contact, Number(id)));
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            res.send(this.contactService.delete(Number(id)));
        });
        this.contactService = new contact_service_1.ContactService;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
exports.ContactController = ContactController;
