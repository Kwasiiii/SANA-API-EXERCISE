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
exports.TagController = void 0;
const express_1 = require("express");
const tag_service_1 = require("../services/tag.service");
class TagController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tags = yield this.tagService.index();
            res.send(tags).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tag = req['body'];
            const newTag = yield this.tagService.create(tag);
            res.send(newTag);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tag = req['body'];
            const id = req['params']['id'];
            res.send(this.tagService.update(tag, Number(id)));
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            res.send(this.tagService.delete(Number(id)));
        });
        this.tagService = new tag_service_1.TagService();
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
exports.TagController = TagController;
