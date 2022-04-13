declare class GroupShrink {
    static pluginName: string;
    group: any;
    lf: any;
    shrinkWidth: number;
    shrinkHeight: number;
    constructor({ lf }: {
        lf: any;
    });
    /**
     * 收缩
     */
    startShrink(group: any): void;
    /**
     * 展开
     */
    startExpand(group: any): void;
    /**
     * 获取分组内的节点上的所有边,以及计算新的分组节点需要连接的边，之后删除原来的边
     */
    private getGroupEdges;
    /**
     * 获取分组内的节点和左上角节点,获取到有效信息后，删除节点
     */
    private getGroupNodes;
    private getGraphDataWithGroup;
}
export { GroupShrink, };
