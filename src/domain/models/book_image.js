export class BookImage {
    constructor({
        id,
        bookId,
        baseUrl,
        largeUrl,
        mediumUrl,
        smallUrl,
        thumbnailUrl,
        isGallery,
        label,
        position
    }) {
        this.id = id;
        this.bookId = bookId;
        this.baseUrl = baseUrl;
        this.largeUrl = largeUrl;
        this.mediumUrl = mediumUrl;
        this.smallUrl = smallUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.isGallery = isGallery;
        this.label = label;
        this.position = position;
    }
}
