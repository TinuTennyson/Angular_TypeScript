var app;
(function (app) {
    var component;
    (function (component) {
        var TableComponent = (function () {
            function TableComponent() {
                this.bindings = {};
                this.controller = TableComponentController;
                this.templateUrl = 'product-management/js/table-component/table-component.html';
            }
            return TableComponent;
        }());
        component.TableComponent = TableComponent;
        var TableComponentController = (function () {
            function TableComponentController() {
                this.productList = [{
                        "name": "Mobile Phones",
                        "category": "phone"
                    },
                    {
                        "name": "Television",
                        "category": "Media"
                    },
                    {
                        "name": "Laptop",
                        "category": "Utility"
                    }];
            }
            return TableComponentController;
        }());
        component.TableComponentController = TableComponentController;
    })(component = app.component || (app.component = {}));
})(app || (app = {}));
