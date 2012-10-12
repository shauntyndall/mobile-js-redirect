(function ($) {
    Drupal.behaviors.mobile_redirect = {
        attach: function (context, settings) {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                // first time visit, set the cookie and redirect
                if ($.cookie('device') === null) {
                    $.cookie('device', 'mobile', { /*domain: Drupal.settings.mobile_js_redirect.base_domain,*/ path: '/' });
                    window.location.replace(Drupal.settings.mobile_js_redirect.mobile_domain);
                }

                // user clicked 'view mobile site' link, set the cookie and redirect
                if ( /(device=mobile)/i.test(window.location.search) ) {
                    $.cookie('device', 'mobile', { /*domain: Drupal.settings.mobile_js_redirect.base_domain,*/ path: '/' });
                    window.location.replace(Drupal.settings.mobile_js_redirect.mobile_domain);
                }

                // user clicked 'view full site' link, set the cookie and redirect
                if ( /(device=desktop)/i.test(window.location.search) ) {
                    $.cookie('device', 'desktop', { /*domain: Drupal.settings.mobile_js_redirect.base_domain,*/ path: '/' });
                    window.location.replace(Drupal.settings.mobile_js_redirect.desktop_domain);
                }

                if ($.cookie('device') === 'desktop' && window.location.search === "" && window.location.host === Drupal.settings.mobile_js_redirect.mobile_domain) {
                    window.location.replace(Drupal.settings.mobile_js_redirect.desktop_domain);
                }

                if ($.cookie('device') === 'mobile' && window.location.search === "" && window.location.host === Drupal.settings.mobile_js_redirect.desktop_domain) {
                    window.location.replace(Drupal.settings.mobile_js_redirect.mobile_domain);
                }
            }
        }
    }
}(jQuery));