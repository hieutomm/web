export class Book {
    constructor({
        id,
        name,
        description,
        shortDescription,
        listPrice,
        originalPrice,
        ratingAverage,
        categoryId,
        category,
        authors,
        images,
        specifications,
        sellers
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.shortDescription = shortDescription;
        this.listPrice = listPrice;
        this.originalPrice = originalPrice;
        this.ratingAverage = ratingAverage;
        this.categoryId = categoryId;

        this.category = category;
        this.authors = authors;
        this.images = images;
        this.specifications = specifications;
        this.sellers = sellers;
    }
}
