window.onload = function () {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9d2cfc39c7msh3f991e24c5ae59cp1d1a91jsn16e4ec494996",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(result =>{
    console.log(result);
    let lengths = result.results
    let listAll = result.response
    let arr = [] , htmls =[]
    function getListOfCountry(index) {
        index++
        if (index < lengths) {
            arr[index] = listAll[index].country.toLowerCase()
            getListOfCountry(index)  
        }else {getHTMLOfSelectTag(arr,0)}
    }
    function getHTMLOfSelectTag(arr,index) {
        ++index
        if (index < lengths) {
            htmls[index] = `<li list-data="${index}">${arr[index]}</li>`
            getHTMLOfSelectTag(arr,index)
        }else{
            document.querySelector('#listCountry').innerHTML = htmls.join('')
			handleEvent(result,arr)
        }
    }
    getListOfCountry(0)
}).catch(err => {
	console.error(err);
});
let chart = new CanvasJS.Chart("chartContainer", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "Statistics of covid-19 cases"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc.
		type: "bar",
		dataPoints: [
			{ label: "apple",  y: 10000  },
			{ label: "orange", y: 1500  },
			{ label: "banana", y: 2503554  },
			{ label: "mango",  y: 300000  },
			{ label: "grape",  y: 20000  }
		]
	}
	]
});
chart.render();

}