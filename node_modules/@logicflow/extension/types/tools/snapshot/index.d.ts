/**
 * 快照插件，生成视图
 */
declare const Snapshot: {
    pluginName: string;
    install(lf: any): void;
    getSvgRootElement(lf: any): any;
    triggerDownload(imgURI: string): void;
    removeAnchor(element: any): void;
    downloadSvg(svg: SVGGraphicsElement, fileName: string, backgroundColor: string): void;
    getBase64(svg: SVGGraphicsElement, backgroundColor: string): Promise<unknown>;
    getBlob(svg: SVGGraphicsElement, backgroundColor: string): Promise<unknown>;
    getClassRules(): string;
    getCanvasData(svg: SVGGraphicsElement, backgroundColor: string): Promise<unknown>;
};
export default Snapshot;
export { Snapshot, };
