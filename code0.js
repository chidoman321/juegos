gdjs.introCode = {};
gdjs.introCode.GDtextoObjects1= [];
gdjs.introCode.GDtextoObjects2= [];
gdjs.introCode.GDcopyObjects1= [];
gdjs.introCode.GDcopyObjects2= [];
gdjs.introCode.GDbotonObjects1= [];
gdjs.introCode.GDbotonObjects2= [];
gdjs.introCode.GDNewObjectObjects1= [];
gdjs.introCode.GDNewObjectObjects2= [];

gdjs.introCode.conditionTrue_0 = {val:false};
gdjs.introCode.condition0IsTrue_0 = {val:false};
gdjs.introCode.condition1IsTrue_0 = {val:false};
gdjs.introCode.condition2IsTrue_0 = {val:false};


gdjs.introCode.mapOfGDgdjs_46introCode_46GDbotonObjects1Objects = Hashtable.newFrom({"boton": gdjs.introCode.GDbotonObjects1});gdjs.introCode.eventsList0xb4be0 = function(runtimeScene) {

{

gdjs.introCode.GDbotonObjects1.createFrom(runtimeScene.getObjects("boton"));

gdjs.introCode.condition0IsTrue_0.val = false;
gdjs.introCode.condition1IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_46introCode_46GDbotonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.introCode.condition0IsTrue_0.val ) {
{
gdjs.introCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.introCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", true);
}}

}


}; //End of gdjs.introCode.eventsList0xb4be0


gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDtextoObjects1.length = 0;
gdjs.introCode.GDtextoObjects2.length = 0;
gdjs.introCode.GDcopyObjects1.length = 0;
gdjs.introCode.GDcopyObjects2.length = 0;
gdjs.introCode.GDbotonObjects1.length = 0;
gdjs.introCode.GDbotonObjects2.length = 0;
gdjs.introCode.GDNewObjectObjects1.length = 0;
gdjs.introCode.GDNewObjectObjects2.length = 0;

gdjs.introCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['introCode'] = gdjs.introCode;
