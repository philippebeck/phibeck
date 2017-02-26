(($) ->
  'use strict'

  # jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').bind 'click', (event) ->
    $anchor = $(this)
    $('html, body').stop().animate { scrollTop: $($anchor.attr('href')).offset().top - 50 }, 1250, 'easeInOutExpo'
    event.preventDefault()
    return

  # Highlight the top nav as scrolling occurs
  $('body').scrollspy
    target: '.navbar-fixed-top'
    offset: 51

  # Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click ->
    $('.navbar-toggle:visible').click()
    return

  # Offset for Main Navigation
  $('#header').affix offset: top: 100

  # Floating label headings for the contact form
  $ ->
    $('body').on('input propertychange', '.label-form-group', (e) ->
      $(this).toggleClass 'label-form-group-with-value', ! !$(e.target).val()
      return
    ).on('focus', '.label-form-group', ->
      $(this).addClass 'label-form-group-with-focus'
      return
    ).on 'blur', '.label-form-group', ->
      $(this).removeClass 'label-form-group-with-focus'
      return
    return
  return
) jQuery
