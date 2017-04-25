var arr = [];
var arrFinal = [];

function getSocial(){
    var urlArray = ["./cake", "./maya", "./elhefe", "./mint", "./international", "./livewire", "./wasted", "./whiskey", "./blonde", "./dakota"];

    for(i = 0; i < urlArray.length; i++){
        
    loadFile(urlArray[i], function(d){
        
       var data = JSON.parse(d);
        //console.log(data);
        var total = 0;
        for(var i = 0; i < data.posts.length; i++)
        {
            //console.log(data.posts[i].popularity[0].count);
            //total += data.posts[i].popularity[0].count;
           /* 
            else
                total+= 0;
*/          if(data.posts[i].sentiment == "positive"){
                total += 1;
            }
            
            if(data.posts[i].popularity){
                total += data.posts[i].popularity[0].count;
            }
           
        }

        console.log(total);
        

       // if(i == 0){arr.push}
         arr.push(total);
		 
         
         

         
});

    }
	setTimeout(sort,20000);

    
}


var sorting = ['3', '1', '2', '4', '6', '8', '9', '10', '7', '5'];
function sort(){
    
    var list = ['1','2','3','4','5','6','7','8','9','10'];
    var hshs = [];
    for(var i = 0; i < 10; i++){
    arrFinal.push([list[i],arr[i]]);
    }
     arrFinal = arrFinal.sort(Comparator);
     var arrrrr = [[1,2]];
     for(var i = 0; i < 10; i++){
         var near = arrFinal[(i)];
         var almost = near[0];
         hshs.push(almost);
		 window.sorting = hshs;
     }
     
    console.log(hshs);
	loadJSON("feed.json",sortData);
}

 function Comparator(a, b) {
   if (a[1] < b[1]) return 1;
   if (a[1] > b[1]) return -1;
   return 0;
 }


	function load() {
	
	//loadJSON("./feed.json",formatJSON);
}

var jsonFeed = [];

function sortData(data) {
		
	var items = [];
	items = JSON.parse(data).feed; 
	
	/*items = [ 
		['Cake', '1'],
		['Maya', '2'],
		['El Hefe', '3'],
		['Mint', '4'],
		['International', '5'],
		['Livewire', '6'],
		['Wasted Grain', '7'],
		['Whiskey Row', '8'],
		['Bottled Blonde', '9'],
		['Dakota', '10'],
	];*/

	
	var result = []

	sorting.forEach(function(key) {
		var found = false;
		items = items.filter(function(item) {
			if(!found && item.id == key) {
				result.push(item);
				found = true;
				return false;
			} else 
				return true;
		})
	});

	console.log(result);
	
	/*/result.forEach(function(item) {
		//document.writeln(item[0])
		console.log(item["name"].label)
	});*/
	
	formatJSON(result);

}

function formatJSON(data) {
	jsonFeed = data; 
	var output = "";
	for(var i = 0; i < jsonFeed.length; i++) {
		output = output + "<div class='list-item' id='item-" + i + "'>"; // Accent Image on Container
		output = output + "<div class='accent-image' style='background-image:url(" + jsonFeed[i].accent + ")'></div>"; // Accent Image on Container
		output = output + "<div class='top-triangle'></div>";
		output = output + "<div class='bottom-triangle'></div>";
		output = output + "<div class='content'>";
		output = output + "<div class='show-more' id='item" + i + "' onclick='javascript:itemSelected(" + i + ")'><i class='material-icons'>add</i></div>"; // Show extra info
		output = output + "<div class='title'>" + jsonFeed[i].name + "</div>"; // Bar Name
		output = output + "<div class='desc'>" + jsonFeed[i].summary + "</div>"; // Bar summary/description
		output = output + "<div class='logo'><img src=" + jsonFeed[i].logo + "></div>"; // Bar Logo		
		output = output + "<div class='rank'>" + (i+1) + "</div>"; // Bar Rank		
		output = output + "</div>";
		output = output + "</div>";
				
		//console.log("this works");
	}
	document.getElementById('loading').innerHTML = "";
	document.getElementById('list').innerHTML = output;
	scrolling()
}

function itemSelected(i) {
	$("#list div").removeClass("selected");
	$("#item-" + i).addClass("selected");
	$("#details").addClass("active");
	
	var listItem = jsonFeed[i];
	var output = "";
	
	output = output + "<div class='background-triangle'></div>";
	output = output + "<div id='close-details' onclick='javascript:closeDetails()'><i class='material-icons'>close</i></div>";
	output = output + "<div class='content'>";

	output = output + "<div class='hours'><h3>Hours</h3>" + jsonFeed[i].hours + "</div>"; // Bar summary/description
	
	output = output + "<div class='type'><h3>Type</h3>" + jsonFeed[i].type + "</div>"; // Bar summary/description
	output = output + "<div class='crowd'><h3>Crowd</h3>" + jsonFeed[i].crowd + "</div>"; // Bar summary/description

	output = output + "<div class='logo'><img src=" + jsonFeed[i].logo + "></div>"; // Bar Logo		
	output = output +  jsonFeed[i].map;
	
	output = output + "<div class='social'>";
	output = output + "<a href='" + jsonFeed[i]["social"].facebook + "'><i class='fa fa-facebook-official'></i></a>"; 
	output = output + "<a href='" + jsonFeed[i]["social"].twitter + "'><i class='fa fa-twitter'></i></a>"; 
	
	if(jsonFeed[i]["social"].snapchat !== "") {
		output = output + "<a href='" + jsonFeed[i]["social"].snapchat + "'><i class='fa fa-snapchat-ghost'></i></a>"; 
	} 

	output = output + "<a href='" + jsonFeed[i]["social"].instagram + "'><i class='fa fa-instagram''</i></a>";
	output = output + "</div>";

	output = output + "</div>";
	

	var contents = document.getElementById("details").innerHTML = output; // places output into vew variable
	var replace = contents.replace(/\n/gi, "<br>"); // replaces \n in json file with line breaks
	document.getElementById("details").innerHTML = replace; // puts new output into container div
	
	
	$("#details").stop().slideDown("fast");
	$("#list div.content").stop().hide("fast");
	
	window.addEventListener('scroll', noscroll);
}


function closeDetails() {
	
	$("#details").slideUp("fast");
	$("#list div").removeClass("selected");
	$("#details").removeClass("active");
	$("#list div.content").stop().show("slow");
	
	window.removeEventListener('scroll', noscroll);
	
}

/*function noscroll() {
	window.scrollTo( 0, 0 );
	Alisha Bussart, Marco Galvan, Eric Stahl, Michael Warnick, Ryan Wertz, Julian Wililams
}*/

function scrolling() {
	$.scrollify({
		section : ".list-item",
		//sectionName : "section-name",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: false,
		overflowScroll: true,
		updateHash: true,
		touchScroll:true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});
};
