$(document).ready(function(){

    //On start
    var readed = false;
    var info = "";
    $.getJSON('http://albertsoriano.com/json/paragraphs.json', function(data) {
       readed = true;
       info = data;
       console.log(data);
    });
    
    $("#numPar").val('1');
    populatePanel(1);


    // Get value on button click and show alert
    $("#btnGen").click(function(){
        var str = $("#numPar").val();
        populatePanel(str);
    });

    //Generate paragraphs according to the number
    function populatePanel(n_par){
        n_par = parseInt(n_par);
        var lorem = "";
        for(var i = 0; i < n_par; i++){
            if(readed){
                lorem = lorem + "<p>" + randomParagraph() + "</p>";
            }
        }
        document.querySelector("#panel-gen").innerHTML = lorem;
    }

    function randomParagraph(){
        var ret = "";
        if(readed){
            var limit = info.paragraphs.length - 1;
            var number = 0 + Math.floor(Math.random() * limit);
            ret = info.paragraphs[number];
        }
        return ret;
    }
});