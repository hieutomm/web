export class Seller {
    constructor({
        id,
        sku,
        name,
        link,
        logo,
        price,
        productId,
        storeId,
        isBestStore,
        isOfflineInstallmentSupported
    }) {
        this.id = id;
        this.sku = sku;
        this.name = name;
        this.link = link;
        this.logo = logo;
        this.price = price;
        this.productId = productId;
        this.storeId = storeId;
        this.isBestStore = isBestStore;
        this.isOfflineInstallmentSupported = isOfflineInstallmentSupported;
    }
}
