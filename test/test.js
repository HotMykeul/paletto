'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var p = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    p.init();
    assertTrue(p.check_juxtaposition());
};

var PalettoTestCase2 = TestCase("PalettoTestCase2");
PalettoTestCase2.prototype.testStory2 = function () {
    assertTrue(p.check_marble(5, 'a') == "yellow");
};

var PalettoTestCase3 = TestCase("PalettoTestCase3");
PalettoTestCase3.prototype.testStory3 = function () {
    p.get_marble(5, 'a');
    assertTrue(p.check_marble(5, 'a') == "null");
    assertTrue(p.count_marble() == 35);
    assertTrue(p.check_marble_nb(0) == 1);
};

var PalettoTestCase4 = TestCase("PalettoTestCase4");
PalettoTestCase4.prototype.testStory4 = function () {
    p.change_player();
    p.get_marble(0, 'a');
    p.get_marble(5, 'f');
    assertTrue(p.check_marble(0, 'a') == "null");
    assertTrue(p.check_marble(5, 'f') == "null");
    assertTrue(p.count_marble() == 33);
    assertTrue(p.check_marble_nb(1) == 2);

};
