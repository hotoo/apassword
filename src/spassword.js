define(function(require, exports, module) {

  require("./spassword.css");

  var $ = require("zepto");
  var Events = require("events");

  var DEFAULT_LENGTH = 6;

  var spassword = function(passwordElement, options){
    this._element = $(passwordElement);

    this._length = parseInt(this._element.attr("maxlength"), 10);
    if(options && options.length){
      this._length =  options.length || DEFAULT_LENGTH;
    }

    this._event = new Events();

    this._mo;
  };

  spassword.prototype = {
    render: function(){
      var ME = this;

      if(!this._mo){
        this._mo = $('<div class="spassword" tabIndex="0">' +
          repeat('<i><b></b></i>', this._length) +
          '</div>');
      }

      this._element.parent().css({
        "position": "relative"
      });

      this._element.css({
        "position": "absolute",
        "left": "-1000px"
        //"top": this._element.css("top")
      }).on("keyup", function(evt){

        var len = ME._element.val().length;
        $("b", this._mo).each(function(index){
          $(this).css({
            "visibility": index < len ? "visible" : "hidden"
          });
        });

        var val = ME._element.val();

        ME._event.trigger("input", val);

        if(len == ME._length){
          ME._event.trigger("complete", val);
        }

      }).on("focus", function(){
        ME._mo.addClass("active");
        ME._event.trigger("focus");
      }).on("blur", function(){
        ME._mo.removeClass("active");
        ME._event.trigger("blur");
      }).after(this._mo);

      this._mo.css({
        "cursor": "text"
      }).focus(function(){
        ME._element.focus();
      }).click(function(){
        ME._element.focus();
      });

      return this;
    },

    on: function(eventName, handler){
      this._event.on(eventName, handler);
      return this;
    },
    off: function(eventName, handler){
      this._event.off(eventName, handler);
      return this;
    },

    val: function(){
      return this._element.val();
    },

    clear: function(){
      this._element.val("");
      $("b", this._mo).css({
        "visibility": "hidden"
      });
      return this;
    },

    focus: function(){
      this._element.focus();
      return this;
    },
    blur: function(){
      this._element.blur();
      return this;
    }
  };

  function repeat(string, times){
    return new Array(times + 1).join(string);
  }

  module.exports = spassword;

});
