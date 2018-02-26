/** @description all tests are placed inside JQuery function
 * to ensure DOM loads prior to running
 */
$(function() {
    /** @description New test suite for testing RSS feeds */
    describe('RSS Feeds', () => {
      /** @description Tests to ensure the allFeeds variable has been defined
       * and is not empty
       */
      it('are defined', () => {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      /** @description Tests to ensure all feeds a URL defined
       * and that the URL is not empty
       */
      it('have URLs', () =>  {
      allFeeds.forEach(feed => {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
      });
      /** @description Tests to ensure all feeds have a name defined
       * and that the name is not empty.
       */
      it('have names', () =>  {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        });
      });
    });


    /**  @description New test suite for testing menu */
    describe('The menu', () =>  {
      let body;

      beforeEach(function() {
         body = document.querySelector('body');
      })

        /** @description Tests that the menu element is hidden by default. */
        it('is hidden by default', () => {
          expect(body.classList).toContain('menu-hidden');
        });


         /** @description Tests that the menu changes visibility
          * when the menu icon is clicked.
          */
         it('changes visibility on click', () => {
          const body = document.querySelector('body');
          const menuIcon = $('.menu-icon-link');

          menuIcon.trigger('click');
          expect(body.classList).not.toContain('menu-hidden');

          menuIcon.trigger('click');
          expect(body.classList).toContain('menu-hidden');
         });
    });

    /** @description New test suite for initial entries */
    describe('Initial entries', function() {

      beforeEach(function(done) {
        loadFeed(0, done)
      })

      /** @description Tests that when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      */
      it('are defined', function(done) {
        const feed = document.querySelector('.feed');
        const entry = document.querySelector('.entry');
        expect(feed.children[1].children)
          .toContain(entry);
        done();
      });
    });

    /** @description New test suite for new feed selection */
    describe('New Feed Selection', () => {
      /** @description Tests that when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        */
      beforeEach(function(done) {
        loadFeed(0, function() {
          loadFeed(1, done);
        })
      });

      it('content changes', function(done) {
        const entries = document.querySelectorAll('.entry');
        const entry1 = entries[0].children[0].innerText;
        const entry2 = entries[1].children[0].innerText;
        expect(entry1)
          .not.toEqual(entry2);
        done();
      });
  })
}());
