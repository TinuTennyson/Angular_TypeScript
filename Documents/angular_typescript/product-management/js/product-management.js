var ProductManagementCtrl = (function () {
    function ProductManagementCtrl() {
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
    return ProductManagementCtrl;
}());
