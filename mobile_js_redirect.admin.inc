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
    '#default_value' => variable_get('mobile_js_redirect_enable', 0),
  );

  $form['mobile_js_domain_redirect'] = array(
    '#type' => 'textfield',
    '#title' => 'Mobile Domain',
    '#description' => t('Enter the domain a mobile user should be redirected to (ex: http://m.example.com), including the HTTP prefix.'),
    '#default_value' => variable_get('mobile_js_domain_redirect', ''),
    '#required' => TRUE,
  );

  $form['mobile_js_desktop_domain'] = array(
    '#type' => 'textfield',
    '#title' => 'Desktop Domain',
    '#description' => t('Enter the desktop domain a mobile user should be redirected to if they request to view the full site (ex: www.example.com), including the HTTP prefix.'),
    '#default_value' => variable_get('mobile_js_desktop_domain', ''),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}