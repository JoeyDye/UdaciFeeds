# UdaciFeeds

UdaciFeeds is an app that displays articles from some of the top development blogs on the web:

* CSS Tricks
* HTML5 Rocks
* Linear Digressions
* and of course the Udacity Blog

Use the nav menu to switch between feeds. You can then browse the various articles, and when you find one that interests you, follow the link to read more.

## Getting Starting

To get started, clone the repository to your local computer.

Next, open the index.html file in your favorite browser.

## Test Suites

This project includes the Jasmine test suite to test important functionality. You will find 7 specs defined in the feedreader.js file under the jasmine/spec directory. 

Tests will automatically run each time you refresh the page. If tests run successfully, you will see a green bar at the bottom of the screen. If there is a testing error, you will see a red bar displayed, with an explanation as to what went wrong.

**The included specs:**

  * **RSS Feeds**
    * are defined - ensures the allFeeds variable has been defined
    * have URLs - ensures all feeds have a URL defined
    * have names - ensures all feeds have a name defined
  * **The menu**
    * is hidden by default - tests that the menu has been hidden by default
    * changes visibility on click - tests that the menu changes visibility when clicked
  * **Initial entries**
    * are defined - tests to ensure the feed has at least 1 entry
  * **New Feed Selection**
    * content changes - tests to ensure new feeds contain new content


