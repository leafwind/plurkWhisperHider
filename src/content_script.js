(function($) {
    var DEBUG_ = false;

    function mutePlurk(pid, v) {
        $.ajax({
            type: "POST",
            url: "/TimeLine/setMutePlurk",
            data: "plurk_id=" + pid + "&value=" + v,
            success: function(msg) {
                if(DEBUG_) console.debug( "set_mute:" + msg  );
            }
        });
    }

    var hideWhisperPlurk = function() {
        $("#timeline_cnt").find("div[data-uid='99999']")
        .each(function(idx, whisperPlurk) {
            if(DEBUG_) console.log($(whisperPlurk).html());
            $(whisperPlurk).css({
                "display": "none",
                "height": "0", // !important;
                "width": "0", //!important;
                "overflow": "hidden", //_overflow:none;
                "position": "fixed",
                "top": "-9000px",
                "filter": "alpha(opacity=0)", //!important;
                "opacity": "0", //!important;
                "zoom": "1"
            });

            var me = $(this);
            var plurk = me.get(0).id.match(/p(\d+)/);
            if (plurk) {
                var plurk_id = plurk[1];
                mutePlurk(plurk_id, 2);
            }
        });
    };

    var main = function() {
        setInterval(function() {
            hideWhisperPlurk();
        }, 3000); // repeat per 3 second
    };

    main();

})(jQuery);