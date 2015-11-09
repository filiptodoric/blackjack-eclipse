$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("T1.feature");
formatter.feature({
  "id": "start-game",
  "description": "",
  "name": "Start Game",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I open \"chrome\"",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I visit \"http://localhost:8080/blackjack/\"",
  "keyword": "Given ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 8
    }
  ],
  "location": "StepDef.i_open(String)"
});
formatter.result({
  "duration": 52196072000,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(/Applications/Firefox.app/Contents/MacOS/firefox-bin) on port 7055; process output follows: \nr resource://gre/modules/addons/GMPProvider.jsm\n1447105699495\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/PluginProvider.jsm\n1447105699497\taddons.manager\tDEBUG\tStarting provider: XPIProvider\n1447105699497\taddons.xpi\tDEBUG\tstartup\n1447105699499\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to /var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/fxdriver@googlecode.com\n1447105699499\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: /var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/webdriver-staging\n1447105699499\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to /Applications/Firefox.app/Contents/Resources/browser/extensions/{972ce4c6-7e08-4474-a285-3208198ce6fd}\n1447105699499\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\n1447105699501\taddons.xpi\tDEBUG\tcheckForChanges\n1447105699502\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"/var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1447105692000,\"mt\":1447105692000}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"/Applications/Firefox.app/Contents/Resources/browser/extensions/{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"42.0\",\"st\":1447089621000,\"mt\":1447089620000}}}\n1447105699504\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\n1447105699504\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"/var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1447105692000,\"mt\":1447105692000}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"/Applications/Firefox.app/Contents/Resources/browser/extensions/{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"42.0\",\"st\":1447089621000,\"mt\":1447089620000}}}\n1447105699506\taddons.xpi\tDEBUG\tNo changes found\n1447105699515\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\n1447105699516\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\n1447105699517\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\n1447105699517\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\n1447105699518\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\n1447105699518\taddons.manager\tDEBUG\tStarting provider: GMPProvider\n1447105699525\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\n1447105699526\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\n1447105699526\taddons.manager\tDEBUG\tStarting provider: PluginProvider\n1447105699526\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\n1447105699526\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\n1447105699527\taddons.manager\tDEBUG\tCompleted startup sequence\n1447105699567\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database /var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions.json\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\n1447105699722\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\n1447105699722\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\n1447105699723\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\n1447105699887\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\n1447105699887\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\n1447105699888\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\n1447105699986\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\n1447105699987\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\n1447105699987\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\n\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Filips-MacBook-Pro.local\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11\u0027, java.version: \u00271.7.0_80\u0027\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\n\tat com.bdt.webdriver.StepDef.i_open(StepDef.java:34)\n\tat ✽.Given I open \"chrome\"(T1.feature:4)\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nr resource://gre/modules/addons/GMPProvider.jsm\n1447105699495\taddons.manager\tDEBUG\tLoaded provider scope for resource://gre/modules/addons/PluginProvider.jsm\n1447105699497\taddons.manager\tDEBUG\tStarting provider: XPIProvider\n1447105699497\taddons.xpi\tDEBUG\tstartup\n1447105699499\taddons.xpi\tINFO\tMapping fxdriver@googlecode.com to /var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/fxdriver@googlecode.com\n1447105699499\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: /var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/webdriver-staging\n1447105699499\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to /Applications/Firefox.app/Contents/Resources/browser/extensions/{972ce4c6-7e08-4474-a285-3208198ce6fd}\n1447105699499\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\n1447105699501\taddons.xpi\tDEBUG\tcheckForChanges\n1447105699502\taddons.xpi\tDEBUG\tLoaded add-on state from prefs: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"/var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1447105692000,\"mt\":1447105692000}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"/Applications/Firefox.app/Contents/Resources/browser/extensions/{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"42.0\",\"st\":1447089621000,\"mt\":1447089620000}}}\n1447105699504\taddons.xpi\tDEBUG\tgetModTime: Recursive scan of {972ce4c6-7e08-4474-a285-3208198ce6fd}\n1447105699504\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {\"app-profile\":{\"fxdriver@googlecode.com\":{\"d\":\"/var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions/fxdriver@googlecode.com\",\"e\":false,\"v\":\"2.41.0\",\"st\":1447105692000,\"mt\":1447105692000}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"/Applications/Firefox.app/Contents/Resources/browser/extensions/{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"e\":true,\"v\":\"42.0\",\"st\":1447089621000,\"mt\":1447089620000}}}\n1447105699506\taddons.xpi\tDEBUG\tNo changes found\n1447105699515\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\n1447105699516\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\n1447105699517\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\n1447105699517\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\n1447105699518\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\n1447105699518\taddons.manager\tDEBUG\tStarting provider: GMPProvider\n1447105699525\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\n1447105699526\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\n1447105699526\taddons.manager\tDEBUG\tStarting provider: PluginProvider\n1447105699526\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\n1447105699526\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\n1447105699527\taddons.manager\tDEBUG\tCompleted startup sequence\n1447105699567\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database /var/folders/93/13q26vls6bn1gxdd3hmdkbb00000gn/T/anonymous2221276296250550793webdriver-profile/extensions.json\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\n1447105699722\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\n1447105699722\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\n1447105699723\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\n1447105699887\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\n1447105699887\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\n1447105699888\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\n1447105699986\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\n1447105699987\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\n1447105699987\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\n\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\n\tat com.bdt.webdriver.StepDef.i_open(StepDef.java:34)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:297)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:62)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/blackjack/",
      "offset": 9
    }
  ],
  "location": "StepDef.i_visit(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "start-game;start-game",
  "description": "",
  "name": "Start game",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I enter click the \"start\" button",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I should see the alert pop up",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "I type \"2\"",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "I should see the \"player2_hand\" div",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "start",
      "offset": 19
    }
  ],
  "location": "StepDef.i_enter_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_should_see_the_alert_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "StepDef.i_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "player2_hand",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_div(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("T2.feature");
formatter.feature({
  "id": "game-play-(hidden-cards,-player-order,-must-declare-winners)",
  "description": "",
  "name": "Game play (hidden cards, player order, must declare winners)",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I open \"chrome\"",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I visit \"http://localhost:8080/blackjack/\"",
  "keyword": "Given ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 8
    }
  ],
  "location": "StepDef.i_open(String)"
});
