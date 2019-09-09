var Util = require("Util");
var OptimizeLabelManager = require("OptimizeLabelManager");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.poolSize = 50;
        this.nodePool = new cc.NodePool();
        this.initNodePool();
        this.init();

        // var scrollView = Util.seekNodeByName(this.node, "New ScrollView");
        // scrollView.getComponent("OptimizeLabelManager").enabled = false;
    },

    start() {
        
    },

    initNodePool() {
        var self = this;
        this.nodePool = new cc.NodePool();
        cc.loader.loadRes("Prefab/Board_1_Stage", function (err, prefab) {
            if (err) {
                return;
            }
            for (let i = 0; i < self.poolSize; i++) {
                var node = cc.instantiate(prefab);
                self.nodePool.put(node);
            }
        });
    },

    init() {
        var self = this;

        var content = Util.seekNodeByName(this.node, "content");
        var scrollView = Util.seekNodeByName(this.node, "New ScrollView");
        content.height = 12800;

        cc.loader.loadRes("Prefab/Board_1_Stage", function (err, prefab) {
            if (err) {
                return;
            }
            for (let i = 0; i < 50; i++) {
                var node = cc.instantiate(prefab);
                content.addChild(node);
                node.x = 0;
                node.y = -(i + 1) * 200;
            }
            // scrollView.active = true;
            // scrollView.getComponent("OptimizeLabelManager").enabled = true;
            self.node.addComponent("OptimizeLabelManager");
        });
    }

    // update (dt) {},
});
