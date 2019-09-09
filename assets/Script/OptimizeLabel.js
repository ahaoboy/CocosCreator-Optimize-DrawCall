
var Util = require("Util");

cc.Node.prototype.updateLanguage = function (text) {
    var self = this;
    var nodeLabel = self.getComponent("cc.Label");
    if (nodeLabel) {
        nodeLabel.string = text;
    } else {
        cc.log(">>>>>>>this node not label " + this.node.name);
    }
}

cc.Class({
    extends: cc.Component,
    editor: {
        executionOrder: -500
    },
    properties: {
        LabelNodeArr: [cc.Node]
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("OptimizeLabel Onload");
        // this.node.active = false;
    },

    start() {
        this.updateLanguage();
    },

    updateLanguage() {
        this.LabelNodeArr[0].updateLanguage("关卡");
        this.LabelNodeArr[1].updateLanguage("开始");
        this.LabelNodeArr[2].updateLanguage("开始");
        var rand = Util.random(0, 100);
        this.LabelNodeArr[3].updateLanguage(rand);
        rand = Util.random(0, 100);
        this.LabelNodeArr[4].updateLanguage("1-100");
        rand = Util.random(0, 100);
        this.LabelNodeArr[5].updateLanguage(rand);
        rand = Util.random(0, 100);
        this.LabelNodeArr[6].updateLanguage("/" + rand);
    },

    getAllLabbel(container) {
        for (let i = 0; i < LabelNodeArr.length; i++) {
            LabelNodeArr[i].parent = container;
        }
    },

});
