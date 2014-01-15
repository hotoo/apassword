define("alipay/spassword/1.0.0/spassword-debug", [ "./spassword-debug.css", "$-debug", "arale/events/1.1.0/events-debug" ], function(require, exports, module) {
    require("./spassword-debug.css");
    var $ = require("$-debug");
    var Events = require("arale/events/1.1.0/events-debug");
    var DEFAULT_LENGTH = 6;
    // constructor
    //
    // @param {String} password element selector.
    var spassword = function(passwordElement) {
        this._element = $(passwordElement);
        this._length = parseInt(this._element.attr("maxlength"), 10) || DEFAULT_LENGTH;
        this._event = new Events();
        this._mo;
    };
    spassword.prototype = {
        // render security password control on the page.
        render: function() {
            var ME = this;
            if (!this._mo) {
                this._mo = $('<div class="spassword" tabIndex="0">' + repeat("<i><b></b></i>", this._length) + "</div>");
            }
            var points = $("b", this._mo);
            this._element.addClass("spassword").on("keyup", function() {
                var len = ME._element.val().length;
                points.each(function(index) {
                    $(this).css({
                        visibility: index < len ? "visible" : "hidden"
                    });
                });
                var val = ME._element.val();
                if (len === ME._length) {
                    ME._event.trigger("complete", val);
                }
            }).on("focus", function() {
                ME._mo.addClass("active");
                ME._event.trigger("focus");
            }).on("blur", function() {
                ME._mo.removeClass("active");
                ME._event.trigger("blur");
            }).after(this._mo);
            this._mo.focus(focusInput(ME._element)).click(focusInput(ME._element));
            return this;
        },
        // event binding.
        //
        // @param {String} eventName: now support [`complete`]
        // @param {Function} handler.
        on: function(eventName, handler) {
            this._event.on(eventName, handler, this);
            return this;
        },
        // event unbinding.
        //
        // @param {String} eventName: now support [`complete`]
        // @param {Function} handler.
        off: function(eventName, handler) {
            this._event.off(eventName, handler);
            return this;
        },
        // get password value.
        //
        // @return {String}
        val: function() {
            return this._element.val();
        },
        // clear password.
        clear: function() {
            this._element.val("");
            $("b", this._mo).css({
                visibility: "hidden"
            });
            return this;
        },
        focus: function() {
            focusInput(this._element)();
            return this;
        },
        blur: function() {
            this._element.blur();
            return this;
        }
    };
    // 让文本输入框获得焦点。
    // 同时光标定位到最后。
    function focusInput(elem) {
        return function() {
            var len = elem.val().length;
            try {
                elem.focus();
                elem[0].setSelectionRange(len, len);
            } catch (ex) {}
        };
    }
    function repeat(string, times) {
        return new Array(times + 1).join(string);
    }
    module.exports = spassword;
});

define("alipay/spassword/1.0.0/spassword-debug.css", [], function() {
    seajs.importStyle("input.spassword{position:absolute;color:#fff;opacity:0;width:1px;height:1px;font-size:1px;left:0;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:initial}div.spassword{display:-webkit-box;border:1px solid #666;-webkit-border-radius:4px;background:#ebebeb;width:100%;height:40px;-webkit-box-sizing:border-box;cursor:text;background:#fff}div.spassword.active{border-color:rgba(82,168,236,.8);outline:0;outline:thin dotted \\9;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)}div.spassword i{display:block;-webkit-box-flex:1;background:0;padding:15px 0}div.spassword i:nth-child(n+2){border-left:1px solid #ccc}div.spassword b{display:block;margin:0 auto;width:10px;height:10px;overflow:hidden;background:#000;-webkit-border-radius:10px;visibility:hidden}");
});
