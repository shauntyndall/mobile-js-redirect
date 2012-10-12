Mobile JS Redirect
==================

Mobile redirection for Drupal based on javascript detection and redirection for sites hosted behind Varnish/nginx.

A lot of the 'mobile switch' solutions for Drupal rely on PHP to detect browser or HTTP header information. For some people that's fine, but there is a growing number of people who are running their websites behind layers of caching and reverse proxies like Varnish and nginx.

While servers can be configured to pass additional/custom headers along to be inspected, not every host will accomodate such a request.

The best alternative to this is to allow javascript to do the detection and redirect.

How to Use
==========

This module comes with a simple administration page to enter the domain a mobile user should be redirected to. Once the module is enabled and this domain is set, it will begin working. Be sure to fully clear the site cache as well as Varnish/nginx etc cache after enabling.