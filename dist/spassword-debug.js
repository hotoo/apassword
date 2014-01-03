define("arale/spassword/1.0.0/spassword-debug", [ "$-debug", "arale/events/1.1.0/events-debug" ], function(require, exports, module) {
    //require("./spassword.css");
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
            var cur_val = ME._element.val();
            setInterval(function() {
                var v = ME._element.val();
                if (v !== cur_val) {
                    cur_val = v;
                    onchange();
                }
            }, 200);
            function onchange() {
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
            }
            this._element.addClass("spassword").on("focus", function() {
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
