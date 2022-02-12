google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    
    var data = google.visualization.arrayToDataTable([
        ['Years', '6',],
        ['HTML/CSS', 6],
        ['JavaScript', 6],
        ['Bootstrap', 6],
        ['jQuery', 5],
        ['React', 1],
        ['PHP', 3,],
        ['Python', 3],
        ['Node.js', 1],
        ['MySQL', 4],
        ['MVC', 2],
        ['Git', 4],
        ['Gitflow', 4],
    ]);

    var options = {
        title: "Experiences",
        bar: {groupWidth: "55%"},
        legend: { position: "none" },
        height: 500,
        colors: ['#DA70D6'],
        'chartArea': {
            'backgroundColor': {
                fill: 'rgba(254, 255, 251, 0)',
                fillOpacity: 0.4
            },
        } ,
        'backgroundColor': {
            fill: 'rgba(254, 255, 251, 0)',
            fillOpacity: 0.4
        },
    };
     
    

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}