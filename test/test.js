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

var PalettoTestCase6 = TestCase("PalettoTestCase6");
PalettoTestCase6.prototype.testStory6 = function () {
    p.init();
    assertTrue(p.get_marble(0, 'a') == 0);
    assertTrue(p.get_marble(5, 'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(0, 'b') == 0);
    assertTrue(p.get_marble(5, 'e') == 0);
    assertTrue(p.get_marble(4, 'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(1, 'a') == 0);
    assertTrue(p.get_marble(5, 'a') == 0);
    p.change_player();
    assertTrue(p.get_marble(2, 'a') == 0);
    p.change_player();
    assertTrue(p.get_marble(4,'a') == 0);
    assertTrue(p.get_marble(3,'f') == 0);
    assertTrue(p.get_marble(0, 'f') == 0);
    assertTrue(p.get_marble(0,'c') == 0);
    p.change_player();
    assertTrue(p.get_marble(0,'e') == 0);
    assertTrue(p.get_marble(2,'f') == 0);
    assertTrue(p.get_marble(5,'d') == 0);
    assertTrue(p.get_marble(3,'a') == 0);
    p.change_player();
    assertTrue(p.get_marble(2,'d') == 0);
    assertTrue(p.get_marble(1,'f') == 0);
    assertTrue(p.get_marble(5, 'b') == 0);
    p.change_player();
    assertTrue(p.get_marble(2, 'b') == 0);
    assertTrue(p.get_marble(1,'e') == 0);
    assertTrue(p.get_marble(4, 'e') == 0);
    p.change_player();
    assertTrue(p.get_marble(3, 'b') == 0);
    assertTrue(p.get_marble(5, 'c') == 0);
    assertTrue(p.get_marble(4,'d') == 0);
    assertTrue(p.get_marble(2,'e') == 1);
};

var PalettoTestCase7 = TestCase("PalettoTestCase7");
PalettoTestCase7.prototype.testStory7 = function () {
    p.init();
    assertTrue(p.get_marble(0, 'a') == 0);
    assertTrue(p.get_marble(0, 'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(1, 'a') == 0);
    assertTrue(p.get_marble(5, 'a') == 0);
    p.change_player();
    assertTrue(p.get_marble(4, 'a') == 0);
    assertTrue(p.get_marble(5, 'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(5, 'e') == 0);
    assertTrue(p.get_marble(0, 'b') == 0);
    assertTrue(p.get_marble(4, 'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(2,'a') == 0);
    assertTrue(p.get_marble(1,'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(0,'c') == 0);
    assertTrue(p.get_marble(3,'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(0,'e') == 0);
    assertTrue(p.get_marble(5,'d') == 0);
    assertTrue(p.get_marble(3, 'a') == 0);
    assertTrue(p.get_marble(2, 'f') == 0);
    p.change_player();
    assertTrue(p.get_marble(0, 'd') == 0);
    assertTrue(p.get_marble(5,'b') == 0);
    p.change_player();
    assertTrue(p.get_marble(1, 'e') == 0);
    assertTrue(p.get_marble(4, 'e') == 0);
    p.change_player();
    assertTrue(p.get_marble(5,'c') == 0);
    assertTrue(p.get_marble(4,'d') == 0);
    assertTrue(p.get_marble(2,'e') == 0);
    p.change_player();
    assertTrue(p.get_marble(4,'b') == 0);
    p.change_player();
    assertTrue(p.get_marble(1,'d') == 0);
    p.change_player();
    assertTrue(p.get_marble(1,'b') == 0);
    assertTrue(p.get_marble(2,'d') == 0);
    p.change_player();
    assertTrue(p.get_marble(3,'e') == 0);
    p.change_player();
    assertTrue(p.get_marble(4,'c') == 0);
    assertTrue(p.get_marble(2,'b') == 0);
    p.change_player();
    assertTrue(p.get_marble(3,'d') == 0);
    assertTrue(p.get_marble(1,'c') == 0);
    p.change_player();
    assertTrue(p.get_marble(2,'c') == 0);
    p.change_player();
    assertTrue(p.get_marble(3,'b') == 0);
    p.change_player();
    assertTrue(p.get_marble(3,'c') == 1);
};
