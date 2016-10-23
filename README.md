Step 1
------
Create players list in format:

    {player1_nickname}|,{gold_amount}|{player2_nickname}|{gold_amount}

i.e.:

    evio,1000|newas,1000|rupis,200

Step 2
------

Replace **data** variable value with your players list in **pay.js**

    var data = "evio,1000|newas,1000|rupis,200";

Step 3
------
Navigate into **Military Personnel** on WoT Clan Portal:
i.e. link: https://eu.wargaming.net/clans/wot/500000338/players

Step 4
------
Paste pay.js code into browser console and press enter to execute this code.
Browser console can be founded by pressing CTRL+ALT+I, But be sure that, **Military Personnel** tab is selected.

Step 5
------
Click on checkbox, that selects all players ("checkAllAccount").
Script will group players by gold amount and selects them after "checkAllAccount" checkbox is clicked.
After each payment you have to click "checkAllAccount" to select another groups of players. If no more groups available, script will show "done" alert box.