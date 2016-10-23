/*
data format:
{player1_nickname},{gold_ammount}|{player2nickname},{gold_ammount}
*/

var data = "evio,3|newas,1";
var players = data.split("|");
var playersSalary = {};
players.forEach(function(element, index, array){
    element = element.split(",");
    if(!playersSalary[element[1]]){
        playersSalary[element[1]] = [];
    }
    playersSalary[element[1]].push(element[0]);
    //console.log(element);
});

var rows = document.getElementsByClassName("js-account-row");

var clicked = false;
document.getElementsByClassName("js-check-all-accounts")[0].parentElement.addEventListener("click", function () {
    if(clicked) return;
    clicked = true;
    var is_any_payment = false;
    for(var key in playersSalary){
        var players = playersSalary[key];
        if(players){
            is_any_payment = true;
            setTimeout(function(){
                document.getElementsByClassName("js-check-all-accounts")[0].parentElement.click();
                playersSalary[key] = null;
                setTimeout(function(){
                    players.forEach(function(element, index, array){

                        for(var i = 0; i<rows.length; i++){
                            var pName = rows[i].querySelector(".js-account-name").textContent.trim();
                            if(pName == element){
                                rows[i].querySelector(".b-checkbox").click();
                            }
                        }
                    });
                    setTimeout(function(){
                        document.getElementsByClassName("js-action-separate-treasury")[0].click();
                        setTimeout(function(){
                            document.getElementsByClassName("js-treasury-amount")[0].value = key;
                            clicked = false;
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 500);
            break;
        }

    }
    if(!is_any_payment){
        alert("done");
    }
});

alert("Ready, select all players");
