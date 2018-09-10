/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});
	claim.login(process.env.NDcxNzU0MzkxOTE4MjE1MTY4.DngZRw.VRwqmxR9Pm8pTmtkHh9XufP8Q3M);
