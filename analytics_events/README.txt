// $Id: README.txt,v 0.2 2011-11-11 18:59:00 theTestTube Exp $

The Google Analytics Events module is a very simple approach to bind DOM events with Google Analytics
events using jQuery selectors to match the HTML objects you want. It is a purely JavaScript
implementation

Google Analytics Events was written by theTestTube, http://blog.labprobeta.net

Install
-------
Google Analytics Events requires some external way to initialize GA user account. This could
be simply done using a module like http://drupal.org/project/google_analytics or equivalent.

Then instal Google Analytics Events like you would any other module.

1) Copy the analytics_events folder to the modules folder in your installation.

2) Enable the module using Administer -> Modules (/admin/build/modules).

3) Fine-tune your settings at Administer -> Site configuration -> Google Analytics Events
(/admin/settings/analytics_events).

Configure
---------
Set the jQuery patterns to include (for example 'object') and optionally exclude.

Set the DOM event you want to capture (for example 'mousedown').

Set the Google Analytics category and name (for example, 'HTML Object', 'Clic') you want to set for
your event. You can also set an optional atribute (for example, 'id') to set your event label.

