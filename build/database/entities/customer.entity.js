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
exports.CustomerEntity = void 0;
const typeorm_1 = require("typeorm");
const bankaccount_entity_1 = require("./bankaccount.entity");
const contact_entity_1 = require("./contact.entity");
const tag_entity_1 = require("./tag.entity");
let CustomerEntity = class CustomerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CustomerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bankaccount_entity_1.BankAccountEntity, bankAccount => bankAccount.customer, {
        cascade: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", bankaccount_entity_1.BankAccountEntity)
], CustomerEntity.prototype, "bankAccount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contact_entity_1.ContactEntity, contact => contact.customer, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CustomerEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tag_entity_1.TagEntity, tag => tag.customer, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CustomerEntity.prototype, "tag", void 0);
CustomerEntity = __decorate([
    (0, typeorm_1.Entity)('customer')
], CustomerEntity);
exports.CustomerEntity = CustomerEntity;
