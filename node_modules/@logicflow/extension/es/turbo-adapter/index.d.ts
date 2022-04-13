export declare function toTurboData(data: any): {
    flowElementList: any[];
};
export declare function toLogicflowData(data: any): {
    nodes: any[];
    edges: any[];
};
declare const TurboAdapter: {
    pluginName: string;
    install(lf: any): void;
    shapeConfigMap: Map<any, any>;
    setCustomShape(key: any, val: any): void;
    adapterOut(logicflowData: any): {
        flowElementList: any[];
    };
    adapterIn(turboData: any): {
        nodes: any[];
        edges: any[];
    };
};
export { TurboAdapter };
export default TurboAdapter;
