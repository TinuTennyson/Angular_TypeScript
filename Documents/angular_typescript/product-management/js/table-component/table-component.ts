module app.component {
    export class TableComponent {
        public bindings: any;
        public controller: any;
        public templateUrl: string;
        constructor() {
            this.bindings = {

            };
            this.controller = TableComponentController;
            this.templateUrl = 'product-management/js/table-component/table-component.html';
        }
    }

    export class TableComponentController {
        public productList: any[];
        constructor() {
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
    }
    
}