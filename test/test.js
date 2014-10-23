'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var p = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    p.init();
    assertTrue(p.checkJuxtaposition());
};