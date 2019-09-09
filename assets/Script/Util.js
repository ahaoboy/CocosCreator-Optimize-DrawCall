export default class Util {

    /**
     * 生成随机整数
     * @param min 最小值 包含
     * @param max 最大值 包含
     * @returns number
     */
    static random(min, max) {
        return Math.floor(Math.random() * (max - min)) + 1 + min;
    }

    static seekNodeByName(rootNode, name) {
        if (!rootNode) {
            return null;
        }
        if (rootNode.name == name) {
            return rootNode;
        }
        var children = rootNode.children;
        for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            if (child) {
                var re = this.seekNodeByName(child, name);
                if (re) {
                    return re;
                }
            }
        }
        return null;
    }

}

module.exports = Util

