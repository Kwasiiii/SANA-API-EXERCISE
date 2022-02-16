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
exports.ContactService = void 0;
const typeorm_1 = require("typeorm");
const contact_repository_1 = require("../repository/contact.repository");
class ContactService {
    constructor() {
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const contact = yield this.contactRepository.find({
                relations: ['tag']
            });
            return contact;
        });
        this.create = (contact) => __awaiter(this, void 0, void 0, function* () {
            const newContact = yield this.contactRepository.save(contact);
            return newContact;
        });
        this.update = (contact, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedContact = yield this.contactRepository.update(id, contact);
            return updatedContact;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedContact = yield this.contactRepository.delete(id);
            return deletedContact;
        });
        this.contactRepository = (0, typeorm_1.getConnection)('user').getCustomRepository(contact_repository_1.ContactRepository);
    }
}
exports.ContactService = ContactService;
