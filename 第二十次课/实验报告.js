
function City(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName = cityName;
    this.cityArea = cityArea;
    this.cityPostcode = cityPostcode;
    this.cityRegions = cityRegions;
}
var cR =[
    {orgionName:"东湖区",orgionPostCode:"000001",orgionArea:10000},
    {orgionName:"西湖区",orgionPostCode:"000002",orgionArea:20000},
    {orgionName:"青山湖区",orgionPostCode:"000003",orgionArea:30000},
    {orgionName:"新建区",orgionPostCode:"000004",orgionArea:40000}
]   
City.prototype = {
    printName:function(){
        console.log(this.cityName)
    },
    printArea:function(){
        console.log("面积为："+this.cityArea+"公顷")
    },
    printPostCode:function(){
        console.log("邮编为："+this.cityPostcode)
    },
    printRegions:function(){
        console.log(this.cityName + "划分为：")
        for(var i of cR){
            console.log(i.orgionName + "，\t邮编为：" 
            + i.orgionPostCode + "\t面积为：" + i.orgionArea + "公顷")
        }
    }
}
var c1 = new City("南昌市",100000,"360000",cR);
c1.printName()
c1.printArea()
c1.printPostCode()
c1.printRegions()
