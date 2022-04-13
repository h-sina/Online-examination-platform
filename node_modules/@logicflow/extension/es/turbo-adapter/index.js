var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TurboType;
(function (TurboType) {
    TurboType[TurboType["SEQUENCE_FLOW"] = 1] = "SEQUENCE_FLOW";
    TurboType[TurboType["START_EVENT"] = 2] = "START_EVENT";
    TurboType[TurboType["END_EVENT"] = 3] = "END_EVENT";
    TurboType[TurboType["USER_TASK"] = 4] = "USER_TASK";
    // SERVICE_TASK = 5, 暂不支持
    TurboType[TurboType["EXCLUSIVE_GATEWAY"] = 6] = "EXCLUSIVE_GATEWAY";
})(TurboType || (TurboType = {}));
// 转换Turbo识别的类型
function getTurboType(type) {
    switch (type) {
        case 'bpmn:sequenceFlow':
            return TurboType.SEQUENCE_FLOW;
        case 'bpmn:startEvent':
            return TurboType.START_EVENT;
        case 'bpmn:endEvent':
            return TurboType.END_EVENT;
        case 'bpmn:userTask':
            return TurboType.USER_TASK;
        // case 'bpmn:serviceTask':
        //   return TurboType.SERVICE_TASK;
        case 'bpmn:exclusiveGateway':
            return TurboType.EXCLUSIVE_GATEWAY;
        default:
            return type;
    }
}
// 将LogicFlow中的Node数据转换为Turbo元素数据
function convertNodeToTurboElement(node) {
    var id = node.id, type = node.type, x = node.x, y = node.y, _a = node.text, text = _a === void 0 ? '' : _a, properties = node.properties;
    return {
        incoming: [],
        outgoing: [],
        dockers: [],
        type: getTurboType(node.type),
        properties: __assign(__assign({}, properties), { name: (text && text.value) || '', x: x,
            y: y,
            text: text, logicFlowType: type }),
        key: id,
    };
}
// 将LogicFlow中的Eedg数据转换为Turbo元素数据
function convertEdgeToTurboElement(edge) {
    var id = edge.id, type = edge.type, sourceNodeId = edge.sourceNodeId, targetNodeId = edge.targetNodeId, startPoint = edge.startPoint, endPoint = edge.endPoint, pointsList = edge.pointsList, _a = edge.text, text = _a === void 0 ? '' : _a, properties = edge.properties;
    return {
        incoming: [sourceNodeId],
        outgoing: [targetNodeId],
        type: getTurboType(type),
        dockers: [],
        properties: __assign(__assign({}, properties), { name: (text && text.value) || '', text: text,
            startPoint: startPoint,
            endPoint: endPoint,
            pointsList: pointsList, logicFlowType: type }),
        key: id,
    };
}
// 将LogicFlow中数据转换为Turbo数据
export function toTurboData(data) {
    var nodeMap = new Map();
    var turboData = {
        flowElementList: [],
    };
    data.nodes.forEach(function (node) {
        var flowElement = convertNodeToTurboElement(node);
        turboData.flowElementList.push(flowElement);
        nodeMap.set(node.id, flowElement);
    });
    data.edges.forEach(function (edge) {
        var flowElement = convertEdgeToTurboElement(edge);
        var sourceElement = nodeMap.get(edge.sourceNodeId);
        sourceElement.outgoing.push(flowElement.key);
        var targetElement = nodeMap.get(edge.targetNodeId);
        targetElement.incoming.push(flowElement.key);
        turboData.flowElementList.push(flowElement);
    });
    return turboData;
}
// 将Turbo元素数据转换为LogicFlow中的Eedg数据
function convertFlowElementToEdge(element) {
    var incoming = element.incoming, outgoing = element.outgoing, properties = element.properties, key = element.key;
    var text = properties.text, startPoint = properties.startPoint, endPoint = properties.endPoint, pointsList = properties.pointsList, logicFlowType = properties.logicFlowType;
    var edge = {
        id: key,
        type: logicFlowType,
        sourceNodeId: incoming[0],
        targetNodeId: outgoing[0],
        text: text,
        startPoint: startPoint,
        endPoint: endPoint,
        pointsList: pointsList,
        properties: {},
    };
    // 这种转换方式，在自定义属性中不能与excludeProperties中的属性重名，否则将在转换过程中丢失
    var excludeProperties = ['startPoint', 'endPoint', 'pointsList', 'text', 'logicFlowType'];
    Object.keys(element.properties).forEach(function (property) {
        if (excludeProperties.indexOf(property) === -1) {
            edge.properties[property] = element.properties[property];
        }
    });
    return edge;
}
// 将Turbo元素数据转换为LogicFlow中的Node数据
function convertFlowElementToNode(element) {
    var properties = element.properties, key = element.key;
    var x = properties.x, y = properties.y, text = properties.text, logicFlowType = properties.logicFlowType;
    var node = {
        id: key,
        type: logicFlowType,
        x: x,
        y: y,
        text: text,
        properties: {},
    };
    // 这种转换方式，在自定义属性中不能与excludeProperties中的属性重名，否则将在转换过程中丢失
    var excludeProperties = ['x', 'y', 'text', 'logicFlowType'];
    Object.keys(element.properties).forEach(function (property) {
        if (excludeProperties.indexOf(property) === -1) {
            node.properties[property] = element.properties[property];
        }
    });
    return node;
}
// 将Turbo元素数据转换为LogicFlow数据
export function toLogicflowData(data) {
    var lfData = {
        nodes: [],
        edges: [],
    };
    var list = data.flowElementList;
    list && list.length > 0 && list.forEach(function (element) {
        if (element.type === TurboType.SEQUENCE_FLOW) {
            var edge = convertFlowElementToEdge(element);
            lfData.edges.push(edge);
        }
        else {
            var node = convertFlowElementToNode(element);
            lfData.nodes.push(node);
        }
    });
    return lfData;
}
var TurboAdapter = {
    pluginName: 'turboAdapter',
    install: function (lf) {
        lf.adapterIn = this.adapterIn;
        lf.adapterOut = this.adapterOut;
    },
    shapeConfigMap: new Map(),
    setCustomShape: function (key, val) {
        this.shapeConfigMap.set(key, val);
    },
    adapterOut: function (logicflowData) {
        if (logicflowData) {
            return toTurboData(logicflowData);
        }
    },
    adapterIn: function (turboData) {
        if (turboData) {
            return toLogicflowData(turboData);
        }
    },
};
export { TurboAdapter };
export default TurboAdapter;
