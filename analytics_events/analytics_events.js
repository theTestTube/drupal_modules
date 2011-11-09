// $Id: analytics_events.module,v 0.1 2011/11/05 01:23:47 theTestTube Exp $
(function ($) {
	
	function analytics_eventsAttach(context)
	{
	
		push = function(category, event, label, value)
		{ 
			if(window._gaq != undefined && typeof window._gaq.push == 'function')
			{
				_gaq.push(['_trackEvent', category, event, label, value]);
			}
		}  // function [push]

	  ae = {};
		ae.include = Drupal.settings.analytics_events.aeInclude;
		ae.exclude = Drupal.settings.analytics_events.aeExclude;
		ae.event =  Drupal.settings.analytics_events.aeEvent;
		ae.attribute = Drupal.settings.analytics_events.aeGaLabelAttribute;
		ae.ga = {};
		ae.ga.event = Drupal.settings.analytics_events.aeGaEvent;
		ae.ga.category = Drupal.settings.analytics_events.aeGaCategory;

		$(ae.include + (ae.exclude != undefined && ae.exclude != '' ? ":not(" + ae.exclude + ")" : '')).bind(
			ae.event,
			function()
			{
				ae.ga.label = (ae.attribute != '' ? this[ae.attribute] : null);
				push(ae.ga.category, ae.ga.event, ae.ga.label);
			}
		);

	}

	Drupal.behaviors.analytics_events = function(context)
	{
		analytics_eventsAttach(context);
	}

})(jQuery);

