function createUI(thisObj) {
    var myPanel = thisObj;
    myPanel.button = myPanel.add("button", [10, 10, 100, 30], "Version updater");
    myPanel.button.onClick = function() { Click(); };
    return myPanel;
}
var myToolsPanel = createUI(this);


function Click(){

  var selectedComp = [];
    for (var i = 1; i <= app.project.numItems; i++){
      if (app.project.item(i).selected){
        selectedComp[selectedComp.length] = app.project.item(i);


        var ver = parseInt(app.project.item(i).name.substr(app.project.item(i).name.length-3, app.project.item(i).name.length), 10);
        //integer = ;
        var number = '00' + (ver + 1);
        var newVer = number.substr(number.length - 3, 3);
        var cut = app.project.item(i).name.substr(0, app.project.item(i).name.length-3);
        newVer = cut + newVer;
        app.project.item(i).name = newVer;
        //

      }
    }
}
