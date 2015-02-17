function init() {

    setPageAnimcations();

}

function setPageAnimcations() {

    var speed = "slow";

    $("body").hide();

    $(document).ready(function() {

        /**
         * Page fade-in
         */
        $("body").fadeIn(speed, function() {

            $("a[href]").click(function(event) {

                var url = $(this).attr("href");

                if (url.indexOf("#") == 0 || url.indexOf("javascript:") == 0) { return; }

                event.preventDefault();

                $("body").fadeOut(speed, function() {
                    window.location = url;
                });

            });

        });

        /**
         * Page fade-out onclick
         */
        $(function() {

//            $("a[href*=#]:not([href=#])").click(function() {
            $("a[href]").click(function() {

                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")) {

                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");

                    if (target.length) {

                        $("body").animate({ scrollTop: target.offset().top }, 1000);

                        return false;

                    }

                }

            });

        });

    });

}