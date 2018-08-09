export var protectedEnv = function (key) {
    var val = process.env[key];
    if (!val) {
        throw new Error(key + " is not provided");
    }
    return val;
};
//# sourceMappingURL=protectedEnv.js.map