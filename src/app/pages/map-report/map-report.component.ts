import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels } from 'ng-apexcharts';


@Component({
  selector: 'app-map-report',
  templateUrl: './map-report.component.html',
  styleUrls: ['./map-report.component.css']
})
export class MapReportComponent implements OnInit {
  isLoading: boolean=true;

  constructor() { }



//this code will show the real content after 3 seconds
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Set the duration to 3 seconds

  }


//creating objects and passing it to component
  "chart":ApexChart= {
    "animations": {
        "enabled": true
    },
    "background": "#fff",
    "foreColor": "#373D3F",
    "fontFamily": "Roboto",
    "height": 200,
    "id": "wOc7r",
    "toolbar": {
        "show": false
    },
    "type": "donut",
    "width": 180

}

"series"= [
  20,
  20,
  80,
  23,
  20
]

"labels"= ['Facebooks', 'Others', 'Websites', 'Ecommerce','Instagram'];



states: ApexStates= {
  normal: {
      filter: {
          type: 'none',
          value: 0,
      }
  },
  hover: {
      filter: {
          type: 'darken',
          value: 0.35,
      }
  }
}

"colors"= [
  "#CFCBCB",
  "#D8D8D8",
  "#061D34",
  "#7B7B7B",
  "#6E6D6D"
]

legend:ApexLegend={
  show:false
}
"plotOptions"= {


  "pie": {
      "donut": {
          "size": "80%",
          "labels": {
              "show": true,
              "name": {},
              "value": {},
              "total": {
                show: true,
                showAlways: false,
                label: 'Total Sales',
                fontSize: '17px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                color: '#373d3f',
                formatter: function (w) {
                  return '$'+ w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
          }
      }
  }
}

 
"dataLabels": ApexDataLabels= {
  "enabled": false,
  "style": {
      "fontWeight": 700
  },

}

}