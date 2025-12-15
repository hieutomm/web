import axios from "axios";

import { Book } from "../../domain/models/book.js";
import { Category } from "../../domain/models/category.js";   // ← sửa đúng file
import { Author } from "../../domain/models/author.js";
import { BookImage } from "../../domain/models/book_image.js";
import { Specification } from "../../domain/models/specification.js";
import { SpecificationAttribute } from "../../domain/models/specification_attribute.js";
import { Seller } from "../../domain/models/seller.js";

export default class BookRepository {
  API_URL = "http://localhost:8080/api";
    // GET 1 quyển sách
    async getBookById(id) {
        const res = await axios.get(`${this.API_URL}/books/${id}`);
        return this.toBook(res.data);
    }

    // GET danh sách sách
    async getBooks() {
        const res = await axios.get(`${this.API_URL}/books`);
        return res.data.map(item => this.toBook(item));
    }
    async searchBooks(keyword) {
        const res = await axios.get(`${this.API_URL}/books`);
        return res.data
            .filter(book =>
                keyword &&
                book.name &&
                book.name.toLowerCase().includes(keyword.toLowerCase())
            )
            .map(dto => this.toBook(dto));
    }

  async createBook(bookDto) {
        const res = await axios.post(`${this.API_URL}/books`, bookDto);
        return this.toBook(res.data);
    }
async updateBook(id, bookDto) {
        const res = await axios.put(`${this.API_URL}/books/${id}`, bookDto);
        return this.toBook(res.data);
    }
async deleteBook(id) {
        await axios.delete(`${this.API_URL}/books/${id}`);
        return true;
    }


    // DTO → Domain Model
    toBook(dto) {
        return new Book({
            id: dto.id,
            name: dto.name,
            description: dto.description,
            shortDescription: dto.shortDescription,
            listPrice: dto.listPrice,
            originalPrice: dto.originalPrice,
            ratingAverage: dto.ratingAverage,

            // mapping domain
            category: dto.category ? new Category(dto.category) : null,
            authors: dto.authors?.map(a => new Author(a)) || [],
            images: dto.images?.map(img => new BookImage(img)) || [],

            specifications:
                dto.specifications?.map(s =>
                    new Specification({
                        ...s,
                        attributes: s.attributes?.map(a => new SpecificationAttribute(a)) || []
                    })
                ) || [],

            sellers: dto.sellers?.map(s => new Seller(s)) || []
        });
    }
}
