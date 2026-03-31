<?php
/**
 * Condo Landing Page Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* -----------------------------------------------
   THEME SETUP
----------------------------------------------- */
function condo_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
    add_theme_support( 'customize-selective-refresh-widgets' );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'condo-landing' ),
    ] );
}
add_action( 'after_setup_theme', 'condo_theme_setup' );

/* -----------------------------------------------
   ENQUEUE SCRIPTS & STYLES
----------------------------------------------- */
function condo_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Sarabun:wght@300;400;500;600;700&display=swap',
        [],
        null
    );

    // Theme stylesheet
    wp_enqueue_style(
        'condo-style',
        get_stylesheet_uri(),
        [ 'google-fonts' ],
        wp_get_theme()->get( 'Version' )
    );

    // Theme script
    wp_enqueue_script(
        'condo-script',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'condo_enqueue_assets' );

/* -----------------------------------------------
   CUSTOM EXCERPT LENGTH
----------------------------------------------- */
function condo_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'condo_excerpt_length' );

/* -----------------------------------------------
   REMOVE ADMIN BAR (OPTIONAL FOR LANDING PAGES)
----------------------------------------------- */
add_filter( 'show_admin_bar', '__return_false' );
