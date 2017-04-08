var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EmailConfig = (function () {
    function EmailConfig() {
    }
    Object.defineProperty(EmailConfig, "instance", {
        get: function () {
            if (!EmailConfig._instance) {
                EmailConfig._instance = new EmailConfig();
            }
            return EmailConfig._instance;
        },
        enumerable: true,
        configurable: true
    });
    return EmailConfig;
}());
__reflect(EmailConfig.prototype, "EmailConfig");
//# sourceMappingURL=EmailConfig.js.map