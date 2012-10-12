<?php

/**
 * Configuration settings form. Allow the user to enter the domain to redirect to.
 * @return mixed
 */

function mobile_js_redirect_admin_settings() {
  $form = array();
  return system_settings_form($form);
}