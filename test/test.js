'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var p = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    p.init();
    assertTrue(p.checkJuxtaposition());
};

var PalettoTestCase2 = TestCase("PalettoTestCase2");
PalettoTestCase2.prototype.testStory2 = function () {
    assertTrue(p.chooseMarble(5,0) == "yellow");
};