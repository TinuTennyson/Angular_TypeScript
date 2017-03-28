interface IProductManagement {
    productList: any[];
    title: string;
}
class ProductManagementCtrl implements IProductManagement {
    public productList: any[];
    title: string;
    constructor() {
        this.productList = [{
            "name": "Mobile Phones",
            "category": "phone"
        },
        {
            "name": "Oelevision",
            "category": "Media"
        },
        {
            "name": "Laptop",
            "category": "Utility"
        }];

        this.title = "Product Management App";
    }
}
