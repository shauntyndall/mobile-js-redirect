(function ($) {
    Drupal.behaviors.mobileDetection = {
        attach: function (context, settings) {
            if (/DEVICE_LIST/i.test(navigator.userAgent)) {
                // first time visit, set the cookie and redirect
                if ($.cookie('device') === null) {
                    $.cookie('device', 'mobile', { domain: DOMAIN, path: '/' });
                    window.location.replace(MOBILE_DOMAIN);
                }

                // user clicked 'view mobile site' link, set the cookie and redirect
                if( /(device=mobile)/i.test(window.location.search) ) {
                    $.cookie('device', 'mobile', { domain: DOMAIN, path: '/' });
                    window.location.replace(MOBILE_DOMAIN);
                }

                // user clicked 'view full site' link, set the cookie and redirect
                if ( /(device=desktop)/i.test(window.location.search) ) {
                    $.cookie('device', 'desktop', { domain: DOMAIN, path: '/' });
                    window.location.replace(DESKTOP_DOMAIN);
                }

                if ($.cookie('device') === 'desktop' && window.location.search === "" && window.location.host === MOBILE_DOMAIN) {
                    window.location.replace(DESKTOP_DOMAIN);
                }

                if ($.cookie('device') === 'mobile' && window.location.search === "" && window.location.host === DESKTOP_DOMAIN) {
                    window.location.replace(MOBILE_DOMAIN);
                }
            }
        }
    }
}(jQuery));