<?php

/**
 * Configuration settings form. Allow the user to enter the domain to redirect to.
 * @return mixed
 */

function mobile_js_redirect_admin_settings() {
  $form = array();

  $form['mobile_js_redirect_enable'] = array(
    '#type' => 'checkbox',
    '#title' => 'Enable mobile redirection',
    '#description' => t('Enter the domain a mobile user should be redirected to.'),
    '#default_value' => variable_get('mobile_js_redirect_enable', 1),
  );

  $form['mobile_js_domain_redirect'] = array(
    '#type' => 'textfield',
    '#title' => 'Mobile Domain',
    '#description' => t('Enter the domain a mobile user should be redirected to.'),
    '#default_value' => variable_get('mobile_domain_redirect', ''),
  );

  return system_settings_form($form);
}