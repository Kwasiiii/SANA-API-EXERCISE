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
exports.TagService = void 0;
const typeorm_1 = require("typeorm");
const tag_repository_1 = require("../repository/tag.repository");
class TagService {
    constructor() {
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const tag = yield this.tagRepository.find({
            // relations: ['customer', 'bankAccount', 'contact' ]
            });
            return tag;
        });
        this.getOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const findtag = yield this.tagRepository.findOne(id, {
            // relations: ['bankAccount', 'contact', 'tag']
            });
            return findtag;
        });
        this.create = (tag) => __awaiter(this, void 0, void 0, function* () {
            const newTag = yield this.tagRepository.save(tag);
            return newTag;
        });
        this.update = (tag, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedTag = yield this.tagRepository.update(id, tag);
            return updatedTag;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedTag = yield this.tagRepository.delete(id);
            return deletedTag;
        });
        this.tagRepository = (0, typeorm_1.getConnection)('user').getCustomRepository(tag_repository_1.TagRepository);
    }
}
exports.TagService = TagService;
