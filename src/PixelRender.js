'use strict'
var folders = ["Astronaut Ascending","BunjeeSkate", "Rose Meadow Farms", "TSP Calculator", "Dream Run"];
var fields = [["Red Astronaut Riding Equmander.gif" ,"Red Astronaut.gif" ,"Spaceship Passive.gif", "Ziward.gif" ],
["Bouncing Player.gif","Moose Running.gif","Moose Still.gif","Shooting  Player.gif","Skating Player.gif","Stuck Player.gif","Test Run.gif" ], 
["FarmerPlant1.gif","FarmerShoo.gif","PigRun.gif","RatRun.gif","RoseUp.gif","SnakeRun.gif","tutorial1.gif" ],
["Add Hover.png","Add Pressed.png","Add.png","Clear Hover.png","Clear Pressed.png","Clear.png","Point Excluded and Selected.gif","Point Included and Selected.gif","Tour Hover.png","Tour Pressed.png","Tour.png" ],
["Go button on.gif", "green elephant.gif", "ice cream.gif", "Player Jump.gif" ]
];

function generateInnerHtml()
{
    let msg = ""
    for (let i = 0; i < folders.length; i++)
    {
        msg += "<h1>"+folders[i]+"</h1>";
        for (let pic of fields[i])
        {
            msg += "<img width = '200' alt = '" + pic + "' src='../images/pixelArt/" + folders[i] +"/"+ pic + "'>";
        }
    }
    return msg;
}
export default function buildPixelArt() {
    document.getElementById("art").innerHTML = generateInnerHtml();
}