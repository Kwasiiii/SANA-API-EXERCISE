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
exports.BankAccountEntity = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const tag_entity_1 = require("./tag.entity"); //import Tag entity
let BankAccountEntity = class BankAccountEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BankAccountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BankAccountEntity.prototype, "accNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BankAccountEntity.prototype, "sortCode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => customer_entity_1.CustomerEntity, customer => customer.bankAccount, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], BankAccountEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tag_entity_1.TagEntity, tag => tag.bankAccount),
    __metadata("design:type", Array)
], BankAccountEntity.prototype, "tag", void 0);
BankAccountEntity = __decorate([
    (0, typeorm_1.Entity)('bank account')
], BankAccountEntity);
exports.BankAccountEntity = BankAccountEntity;
