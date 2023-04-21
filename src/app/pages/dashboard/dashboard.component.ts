import { Component, OnInit ,ElementRef, Renderer2 } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexPlotOptions } from 'ng-apexcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'prime';
  customer:boolean | undefined;
  value:Date | undefined;


  //this function is to decide css based on conditions in table for status
  getClassName(status:string){
    return status=='Success' ? 'success-text': status=='On Process' ? 'on-process' : 'fail-text';
  }


//This data is shown in the primeNg Table
 product: any[]=[
    {
      "id": "1000",
      "customer": "Rohit Bairwa",
      "item": "Bamboo Watch",
      "date": "22 Aug 2022",
      "status":"Success"
    },
    {
      "id": "1001",
      "customer": "Tanisha",
      "item": "Match Box",
      "date": "18 Aug 2022",
      "status":"Fail"
    },
    {
      "id": "1002",
      "customer": "Asad",
      "item": "Coconut",
      "date": "18 Aug 2022",
      "status":"On Process"
    },
    {
      "id": "1003",
      "customer": "Sunil Bairwa",
      "item": "Smartphone",
      "date": "17 Aug 2022",
      "status":"Success"
    },
    {
      "id": "1004",
      "customer": "Rohit Jawalkar",
      "item": "Pot",
      "date":" 16 Aug 2022",
      "status":"Fail"
    },
    {
      "id": "1005",
      "customer": "Chandan",
      "item": "Yogi Watch",
      "date": "15 Aug 2022",
      "status":"Success"
    },
    {
      "id": "1006",
      "customer": "Tiger",
      "item": "Aeroplane",
      "date":"14 Aug 2022",
      "status":"Success"
    },
    
   ]
   isLoading:boolean=true;


   //this code will show  real component data after 3 seconds
   ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }



  serie: ApexAxisChartSeries= [
    {
     
       "color": '#D1D1D1',
       "name": "India",
        "data": [
            {
                "x": "Sun",
                "y": "3000"
            },
            {
                "x": "Mon",
                "y": "4000"
            },
            {
                "x": "Tue",
                "y": "3000"
            },
            {
              "x": "Wed",
              "y": "2300"
          },
            {
                "x": "Thu",
                "y": "3409"
            },
            {
                "x": "Fri",
                "y": "1000"
            },
            {
                "x": "Sat",
                "y": "3900"
            }
        ]
    },
    {
        "color": '#041C34',
        "name": "America",
        "data": [
            {
                "x": "Sun",
                "y": "2000"
            },
            {
                "x": "Mon",
                "y": "2330"
            },
            {
                "x": "Tue",
                "y": "1240"
            },
            {
              "x": "Wed",
              "y": "2000"
          },
            {
                "x": "Thu",
                "y": "4000"
            },
            {
                "x": "Fri",
                "y": "3000"
            },
            {
                "x": "Sat",
                "y": "2000"
            }
        ]
    }
]

xaxis: ApexXAxis={
  labels:{
    show:true,
  },
  crosshairs: {
    show: true
  }
};

legend:ApexLegend={
  show:false
}

stroke: ApexStroke= {
  show: true,
  curve: 'smooth',
  lineCap: 'butt',
  colors: undefined,
  width: 2,
  dashArray: 0,      
}



"charts":ApexChart= {
  "animations": {
      "enabled": true,
  },
  "background": "transparent",
  "foreColor": "#333",
  "fontFamily": "Roboto",
  "height": 250,
  "toolbar": {
      "show": false
  },
  "type": "bar",
  "width": 750


}
  "plotOptions": ApexPlotOptions={

    "radialBar": {
        "hollow": {
            "background": "#fff"
        },
  
    },

    
    bar: {
      horizontal: false,
      columnWidth: '70%',
      borderRadius:5,
      borderRadiusApplication:"end",
      dataLabels:{
        hideOverflowingLabels:true,
        total:{
          enabled:false
        }
      }
    }
  
  }


  
states:ApexStates= {
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

clickCount:boolean=false;
CountAdd(){
  this.clickCount=true;
}

  SelectAny():any {
  return this.clickCount==true ? 'activecalbtn': '';
  }


   
  "dataLabels": ApexDataLabels= {
    "enabled": false,
    "style": {
        "fontWeight": 700
    }
}

"grid": {
  "padding": {
      "right": 25,
      "left": 15
  }
}



    
yaxis:ApexYAxis ={
  show: false,
  "tickAmount": 5,
  labels:{
    formatter: function (value) {
      return "$" + value;
    }
  }
}



   }


