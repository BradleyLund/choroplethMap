var width = 720;
var height = 500;

var projection = d3.geoAlbers()
    .scale(1000)
    .translate([width / 2, height/2]);

var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("heightd",height);





d3.queue()
    .defer(d3.json,'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json')
    .await(ready)


    function ready(error,us) {

        
        console.log(us.objects.counties)
        if (error) throw error;
    
        svg.append("g")
            .attr("class", "counties")
            .selectAll("path")
                .data(topojson.feature(us,us.objects.counties).features)
            .enter().append("path")
                .attr("d",path)
                .style("fill","white")
                .style("stroke","black")
    }

