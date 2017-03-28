export interface IComponentOptions {
    controller?: any;
    controllerAs?: string;
    template?: string | Function;
    templateUrl?: string | Function;
    bindings?: any;
    transclude?: boolean;
    require?: Object;
    $canActivate?: () => boolean;
}