"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagEntity = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity"); //import Customer entity
const bankaccount_entity_1 = require("./bankaccount.entity"); //import Bank Account entity
const contact_entity_1 = require("./contact.entity"); //import Contact entity
let TagEntity = class TagEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TagEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TagEntity.prototype, "tagName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", Number)
], TagEntity.prototype, "tagCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.CustomerEntity, customer => customer.tag, {
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], TagEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contact_entity_1.ContactEntity, contact => contact.tag),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", contact_entity_1.ContactEntity)
], TagEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bankaccount_entity_1.BankAccountEntity, bankAccount => bankAccount),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", bankaccount_entity_1.BankAccountEntity)
], TagEntity.prototype, "bankAccount", void 0);
TagEntity = __decorate([
    (0, typeorm_1.Entity)('tag')
], TagEntity);
exports.TagEntity = TagEntity;
