var Util = require("Util");

cc.Class({
    extends: cc.Component,
    editor: {
        executionOrder: 500
    },

    properties: {
        // _isOptimize: {
        //     default: true,
        //     // type: cc.Boolean,
        //     displayName: "开启优化",
        //     tooltip: "选中开始label优化",
        //     visible: true,
        // },
        // _labelContainer: {
        //     default: null,
        //     type: cc.Node,
        //     displayName: "label容器",
        //     tooltip: "",
        //     visible: true,
        // },
        _isOptimize: true,
        _labelContainer: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("OptimizeLabelManager Onload");
    },

    start() {
        this.init();
    },

    init(isOptimize = true) {
        this._isOptimize = isOptimize;
        this._labelContainer = Util.seekNodeByName(this.node, "container");
        if (this._isOptimize && this._labelContainer) {
            this._labelContainer.zIndex = 1;
            var OptimizeLabelArr = this.node.getComponentsInChildren("OptimizeLabel");
            for (let i = 0; i < OptimizeLabelArr.length; i++) {
                // OptimizeLabelArr[i].getAllLabel(this._labelContainer);
                for (let j = 0; j < OptimizeLabelArr[i].LabelNodeArr.length; j++) {
                    let node = OptimizeLabelArr[i].LabelNodeArr[j];
                    let pos = this._labelContainer.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.Vec2.ZERO))
                    node.parent = this._labelContainer;
                    node.position = pos;
                    // node.active = false;
                }
            }
        }
    },

    // update (dt) {},
});

// module.exports = OptimizeLabelManager;