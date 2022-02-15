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
exports.tagEntity = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const bankaccount_entity_1 = require("./bankaccount.entity");
let tagEntity = class tagEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], tagEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tagEntity.prototype, "tagName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", Number)
], tagEntity.prototype, "tagCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.CustomerEntity, customer => customer.tag),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], tagEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bankaccount_entity_1.BankAccountEntity, bankAccount => bankAccount),
    __metadata("design:type", bankaccount_entity_1.BankAccountEntity)
], tagEntity.prototype, "bankAccount", void 0);
tagEntity = __decorate([
    (0, typeorm_1.Entity)('tag')
], tagEntity);
exports.tagEntity = tagEntity;
