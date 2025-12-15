export class Specification {
    constructor({ id, bookId, name, attributes }) {
        this.id = id;
        this.bookId = bookId;
        this.name = name;
        this.attributes = attributes; // array of SpecificationAttribute
    }
}
