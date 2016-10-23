var data = "Salota,100|iron_ball,100|darkwind0000,100|5TEELR0N1N,100|baciukas,100|Rabbit_Terminator,100|Laimenas,100|Kovinukas,100|ziopliai,100|lazlow,100|volvo850tdi,100|tranas,100|Tadzka_LT,100|_kerber_,100|eurotrip,100|Padejas,100|Tr3zbas,200|deivisss666,200|deivas,200|Aramburu,200|Litofcas,200|Mik7,200|futurity30,200|MacBurgeris,200|Doomas,200|pavlitto83,200|BOSERONAS,200|Rafteris,200|PabadytojasLT,200|Starkis044,200|easyman111,200|onest,200|museika,300|ramuunas,300|Alchas,300|Tamosius,300|uzpakalis,300|gramas,300|astravic11,300|Vincas624,300|Jopernyjceatar,400|ciunamis,400|Bagaa,400|Rimvis78,500|Dunk3r,500|WWAARRAA,500|TODASG_indaTANK,500|trapatatai,500|deivuzas,500|KORSHUN_LT,600|slaptas_vadas,700|sriegis222,700|Finalfour333,700|Edv166nas,700|ciunas,800|Lord003_1,900|newas,1100|evio,1300|piela,1600";
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

var $rows = $(".js-account-row");
var clicked = false;
$(".js-check-all-accounts").parent().click(function(){
    if(clicked) return;
    clicked = true;
    var is_any_payment = false;
    for(var key in playersSalary){
    	var players = playersSalary[key];    
        if(players){
            is_any_payment = true;
            setTimeout(function(){
                $(".js-check-all-accounts").parent().click();
                playersSalary[key] = null;
                setTimeout(function(){
                    players.forEach(function(element, index, array){
                        $rows.each(function(){
                           var pName = $(this).find(".js-account-name").html().trim();
                           if(pName == element){
                               $(this).find(".b-checkbox").click();
                           }
                        });
                    });
                    setTimeout(function(){
                        $(".js-action-separate-treasury").click();
                        setTimeout(function(){
                            $(".js-treasury-amount").val(key);
                            clicked = false;
                        }, 1000);
                    }, 1000);
                }, 1000);                
            }, 500);
            break;
        }
        
    }
    if(!is_any_payment){
        alert("all salary payed");
    }
})
