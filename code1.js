gdjs.juegoCode = {};
gdjs.juegoCode.forEachIndex2 = 0;

gdjs.juegoCode.forEachObjects2 = [];

gdjs.juegoCode.forEachTemporary2 = null;

gdjs.juegoCode.forEachTotalCount2 = 0;

gdjs.juegoCode.GDjugadorObjects1= [];
gdjs.juegoCode.GDjugadorObjects2= [];
gdjs.juegoCode.GDjugadorObjects3= [];
gdjs.juegoCode.GDNewObjectObjects1= [];
gdjs.juegoCode.GDNewObjectObjects2= [];
gdjs.juegoCode.GDNewObjectObjects3= [];
gdjs.juegoCode.GDfObjects1= [];
gdjs.juegoCode.GDfObjects2= [];
gdjs.juegoCode.GDfObjects3= [];
gdjs.juegoCode.GDjumptruObjects1= [];
gdjs.juegoCode.GDjumptruObjects2= [];
gdjs.juegoCode.GDjumptruObjects3= [];
gdjs.juegoCode.GDNewObject2Objects1= [];
gdjs.juegoCode.GDNewObject2Objects2= [];
gdjs.juegoCode.GDNewObject2Objects3= [];
gdjs.juegoCode.GDsushiObjects1= [];
gdjs.juegoCode.GDsushiObjects2= [];
gdjs.juegoCode.GDsushiObjects3= [];
gdjs.juegoCode.GDpuntuacionObjects1= [];
gdjs.juegoCode.GDpuntuacionObjects2= [];
gdjs.juegoCode.GDpuntuacionObjects3= [];
gdjs.juegoCode.GDNewObject3Objects1= [];
gdjs.juegoCode.GDNewObject3Objects2= [];
gdjs.juegoCode.GDNewObject3Objects3= [];
gdjs.juegoCode.GDNewObject4Objects1= [];
gdjs.juegoCode.GDNewObject4Objects2= [];
gdjs.juegoCode.GDNewObject4Objects3= [];
gdjs.juegoCode.GDNewObject5Objects1= [];
gdjs.juegoCode.GDNewObject5Objects2= [];
gdjs.juegoCode.GDNewObject5Objects3= [];
gdjs.juegoCode.GDeneObjects1= [];
gdjs.juegoCode.GDeneObjects2= [];
gdjs.juegoCode.GDeneObjects3= [];
gdjs.juegoCode.GDizqObjects1= [];
gdjs.juegoCode.GDizqObjects2= [];
gdjs.juegoCode.GDizqObjects3= [];
gdjs.juegoCode.GDderObjects1= [];
gdjs.juegoCode.GDderObjects2= [];
gdjs.juegoCode.GDderObjects3= [];
gdjs.juegoCode.GDjumpiObjects1= [];
gdjs.juegoCode.GDjumpiObjects2= [];
gdjs.juegoCode.GDjumpiObjects3= [];
gdjs.juegoCode.GDcamiObjects1= [];
gdjs.juegoCode.GDcamiObjects2= [];
gdjs.juegoCode.GDcamiObjects3= [];
gdjs.juegoCode.GDborderObjects1= [];
gdjs.juegoCode.GDborderObjects2= [];
gdjs.juegoCode.GDborderObjects3= [];
gdjs.juegoCode.GDfast2Objects1= [];
gdjs.juegoCode.GDfast2Objects2= [];
gdjs.juegoCode.GDfast2Objects3= [];
gdjs.juegoCode.GDfastObjects1= [];
gdjs.juegoCode.GDfastObjects2= [];
gdjs.juegoCode.GDfastObjects3= [];

gdjs.juegoCode.conditionTrue_0 = {val:false};
gdjs.juegoCode.condition0IsTrue_0 = {val:false};
gdjs.juegoCode.condition1IsTrue_0 = {val:false};


gdjs.juegoCode.eventsList0x72051c = function(runtimeScene) {

{

gdjs.juegoCode.GDjugadorObjects2.createFrom(gdjs.juegoCode.GDjugadorObjects1);


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDjugadorObjects2.length;i<l;++i) {
    if ( !(gdjs.juegoCode.GDjugadorObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDjugadorObjects2[k] = gdjs.juegoCode.GDjugadorObjects2[i];
        ++k;
    }
}
gdjs.juegoCode.GDjugadorObjects2.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects2 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects2.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects2[i].setAnimationName("idle");
}
}}

}


{

/* Reuse gdjs.juegoCode.GDjugadorObjects1 */

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDjugadorObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDjugadorObjects1[k] = gdjs.juegoCode.GDjugadorObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDjugadorObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].setAnimationName("run");
}
}}

}


}; //End of gdjs.juegoCode.eventsList0x72051c
gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDsushiObjects1Objects = Hashtable.newFrom({"sushi": gdjs.juegoCode.GDsushiObjects1});gdjs.juegoCode.eventsList0x6c7134 = function(runtimeScene) {

}; //End of gdjs.juegoCode.eventsList0x6c7134
gdjs.juegoCode.eventsList0x6c6fd4 = function(runtimeScene) {

{

/* Reuse gdjs.juegoCode.GDsushiObjects1 */

for(gdjs.juegoCode.forEachIndex2 = 0;gdjs.juegoCode.forEachIndex2 < gdjs.juegoCode.GDsushiObjects1.length;++gdjs.juegoCode.forEachIndex2) {
gdjs.juegoCode.GDpuntuacionObjects2.createFrom(runtimeScene.getObjects("puntuacion"));
gdjs.juegoCode.GDsushiObjects2.length = 0;


gdjs.juegoCode.forEachTemporary2 = gdjs.juegoCode.GDsushiObjects1[gdjs.juegoCode.forEachIndex2];
gdjs.juegoCode.GDsushiObjects2.push(gdjs.juegoCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.juegoCode.GDsushiObjects2.length ;i < len;++i) {
    gdjs.juegoCode.GDsushiObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.juegoCode.GDpuntuacionObjects2.length ;i < len;++i) {
    gdjs.juegoCode.GDpuntuacionObjects2[i].setString("Puntuacion :" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}
}

}


}; //End of gdjs.juegoCode.eventsList0x6c6fd4
gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDeneObjects1Objects = Hashtable.newFrom({"ene": gdjs.juegoCode.GDeneObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDizqObjects1Objects = Hashtable.newFrom({"izq": gdjs.juegoCode.GDizqObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDeneObjects1Objects = Hashtable.newFrom({"ene": gdjs.juegoCode.GDeneObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDderObjects1Objects = Hashtable.newFrom({"der": gdjs.juegoCode.GDderObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDeneObjects1Objects = Hashtable.newFrom({"ene": gdjs.juegoCode.GDeneObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDfastObjects1Objects = Hashtable.newFrom({"fast": gdjs.juegoCode.GDfastObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjumpiObjects1Objects = Hashtable.newFrom({"jumpi": gdjs.juegoCode.GDjumpiObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.juegoCode.GDNewObject2Objects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDcamiObjects1Objects = Hashtable.newFrom({"cami": gdjs.juegoCode.GDcamiObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDizqObjects1Objects = Hashtable.newFrom({"izq": gdjs.juegoCode.GDizqObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDcamiObjects1Objects = Hashtable.newFrom({"cami": gdjs.juegoCode.GDcamiObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDderObjects1Objects = Hashtable.newFrom({"der": gdjs.juegoCode.GDderObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDcamiObjects1Objects = Hashtable.newFrom({"cami": gdjs.juegoCode.GDcamiObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects = Hashtable.newFrom({"jugador": gdjs.juegoCode.GDjugadorObjects1});gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.juegoCode.GDborderObjects1});gdjs.juegoCode.eventsList0xb4be0 = function(runtimeScene) {

{

gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDjugadorObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDjugadorObjects1[k] = gdjs.juegoCode.GDjugadorObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDjugadorObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].setAnimationName("salto");
}
}}

}


{

gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDjugadorObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDjugadorObjects1[k] = gdjs.juegoCode.GDjugadorObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDjugadorObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].setAnimationName("salto");
}
}}

}


{

gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDjugadorObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDjugadorObjects1[k] = gdjs.juegoCode.GDjugadorObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDjugadorObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.juegoCode.eventsList0x72051c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.juegoCode.GDjugadorObjects1.length !== 0 ? gdjs.juegoCode.GDjugadorObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].flipX(true);
}
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].flipX(false);
}
}}

}


{

gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));
gdjs.juegoCode.GDsushiObjects1.createFrom(runtimeScene.getObjects("sushi"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDsushiObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.juegoCode.eventsList0x6c6fd4(runtimeScene);} //End of subevents
}

}


{

gdjs.juegoCode.GDeneObjects1.createFrom(runtimeScene.getObjects("ene"));
gdjs.juegoCode.GDizqObjects1.createFrom(runtimeScene.getObjects("izq"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDeneObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDizqObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDeneObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDeneObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDeneObjects1[i].returnVariable(gdjs.juegoCode.GDeneObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.juegoCode.GDeneObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDeneObjects1[i].flipX(true);
}
}}

}


{

gdjs.juegoCode.GDderObjects1.createFrom(runtimeScene.getObjects("der"));
gdjs.juegoCode.GDeneObjects1.createFrom(runtimeScene.getObjects("ene"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDeneObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDderObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDeneObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDeneObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDeneObjects1[i].returnVariable(gdjs.juegoCode.GDeneObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.juegoCode.GDeneObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDeneObjects1[i].flipX(false);
}
}}

}


{

gdjs.juegoCode.GDeneObjects1.createFrom(runtimeScene.getObjects("ene"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDeneObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDeneObjects1[i].getVariableString(gdjs.juegoCode.GDeneObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDeneObjects1[k] = gdjs.juegoCode.GDeneObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDeneObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDeneObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDeneObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDeneObjects1[i].addPolarForce(180, 400, 0);
}
}}

}


{

gdjs.juegoCode.GDeneObjects1.createFrom(runtimeScene.getObjects("ene"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDeneObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDeneObjects1[i].getVariableString(gdjs.juegoCode.GDeneObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDeneObjects1[k] = gdjs.juegoCode.GDeneObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDeneObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDeneObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDeneObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDeneObjects1[i].addPolarForce(0, 400, 0);
}
}}

}


{

gdjs.juegoCode.GDeneObjects1.createFrom(runtimeScene.getObjects("ene"));
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDeneObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.juegoCode.GDjugadorObjects1.length !== 0 ? gdjs.juegoCode.GDjugadorObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.juegoCode.GDfastObjects1.createFrom(runtimeScene.getObjects("fast"));
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDfastObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").getMaxSpeed() + (1000));
}
}{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").getAcceleration() + (1000));
}
}}

}


{

gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));
gdjs.juegoCode.GDjumpiObjects1.createFrom(runtimeScene.getObjects("jumpi"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjumpiObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(1200);
}
}{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
gdjs.juegoCode.GDderObjects1.createFrom(runtimeScene.getObjects("der"));
gdjs.juegoCode.GDizqObjects1.createFrom(runtimeScene.getObjects("izq"));
{for(var i = 0, len = gdjs.juegoCode.GDizqObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDizqObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.juegoCode.GDderObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDderObjects1[i].hide();
}
}}

}


{

gdjs.juegoCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDNewObject2Objects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{runtimeScene.getVariables().getFromIndex(1).setNumber((( gdjs.juegoCode.GDjugadorObjects1.length === 0 ) ? 0 :gdjs.juegoCode.GDjugadorObjects1[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(2).setNumber((( gdjs.juegoCode.GDjugadorObjects1.length === 0 ) ? 0 :gdjs.juegoCode.GDjugadorObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(800);
}
}}

}


{

gdjs.juegoCode.GDcamiObjects1.createFrom(runtimeScene.getObjects("cami"));
gdjs.juegoCode.GDizqObjects1.createFrom(runtimeScene.getObjects("izq"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDcamiObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDizqObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDcamiObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDcamiObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDcamiObjects1[i].returnVariable(gdjs.juegoCode.GDcamiObjects1[i].getVariables().getFromIndex(0)).setString("abajo");
}
}{for(var i = 0, len = gdjs.juegoCode.GDcamiObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDcamiObjects1[i].flipX(true);
}
}}

}


{

gdjs.juegoCode.GDcamiObjects1.createFrom(runtimeScene.getObjects("cami"));
gdjs.juegoCode.GDderObjects1.createFrom(runtimeScene.getObjects("der"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDcamiObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDderObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDcamiObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDcamiObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDcamiObjects1[i].returnVariable(gdjs.juegoCode.GDcamiObjects1[i].getVariables().getFromIndex(0)).setString("arriba");
}
}{for(var i = 0, len = gdjs.juegoCode.GDcamiObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDcamiObjects1[i].flipX(false);
}
}}

}


{

gdjs.juegoCode.GDcamiObjects1.createFrom(runtimeScene.getObjects("cami"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDcamiObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDcamiObjects1[i].getVariableString(gdjs.juegoCode.GDcamiObjects1[i].getVariables().getFromIndex(0)) == "arriba" ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDcamiObjects1[k] = gdjs.juegoCode.GDcamiObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDcamiObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDcamiObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDcamiObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDcamiObjects1[i].addPolarForce(270, 400, 0);
}
}}

}


{

gdjs.juegoCode.GDcamiObjects1.createFrom(runtimeScene.getObjects("cami"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDcamiObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDcamiObjects1[i].getVariableString(gdjs.juegoCode.GDcamiObjects1[i].getVariables().getFromIndex(0)) == "abajo" ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDcamiObjects1[k] = gdjs.juegoCode.GDcamiObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDcamiObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDcamiObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDcamiObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDcamiObjects1[i].addPolarForce(90, 400, 0);
}
}}

}


{

gdjs.juegoCode.GDcamiObjects1.createFrom(runtimeScene.getObjects("cami"));
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDcamiObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.juegoCode.GDjugadorObjects1.length !== 0 ? gdjs.juegoCode.GDjugadorObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.juegoCode.GDborderObjects1.createFrom(runtimeScene.getObjects("border"));
gdjs.juegoCode.GDjugadorObjects1.createFrom(runtimeScene.getObjects("jugador"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDjugadorObjects1Objects, gdjs.juegoCode.mapOfGDgdjs_46juegoCode_46GDborderObjects1Objects, false, runtimeScene, false);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDjugadorObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDjugadorObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDjugadorObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.juegoCode.GDjugadorObjects1.length !== 0 ? gdjs.juegoCode.GDjugadorObjects1[0] : null), true, "", 0);
}}

}


}; //End of gdjs.juegoCode.eventsList0xb4be0


gdjs.juegoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.juegoCode.GDjugadorObjects1.length = 0;
gdjs.juegoCode.GDjugadorObjects2.length = 0;
gdjs.juegoCode.GDjugadorObjects3.length = 0;
gdjs.juegoCode.GDNewObjectObjects1.length = 0;
gdjs.juegoCode.GDNewObjectObjects2.length = 0;
gdjs.juegoCode.GDNewObjectObjects3.length = 0;
gdjs.juegoCode.GDfObjects1.length = 0;
gdjs.juegoCode.GDfObjects2.length = 0;
gdjs.juegoCode.GDfObjects3.length = 0;
gdjs.juegoCode.GDjumptruObjects1.length = 0;
gdjs.juegoCode.GDjumptruObjects2.length = 0;
gdjs.juegoCode.GDjumptruObjects3.length = 0;
gdjs.juegoCode.GDNewObject2Objects1.length = 0;
gdjs.juegoCode.GDNewObject2Objects2.length = 0;
gdjs.juegoCode.GDNewObject2Objects3.length = 0;
gdjs.juegoCode.GDsushiObjects1.length = 0;
gdjs.juegoCode.GDsushiObjects2.length = 0;
gdjs.juegoCode.GDsushiObjects3.length = 0;
gdjs.juegoCode.GDpuntuacionObjects1.length = 0;
gdjs.juegoCode.GDpuntuacionObjects2.length = 0;
gdjs.juegoCode.GDpuntuacionObjects3.length = 0;
gdjs.juegoCode.GDNewObject3Objects1.length = 0;
gdjs.juegoCode.GDNewObject3Objects2.length = 0;
gdjs.juegoCode.GDNewObject3Objects3.length = 0;
gdjs.juegoCode.GDNewObject4Objects1.length = 0;
gdjs.juegoCode.GDNewObject4Objects2.length = 0;
gdjs.juegoCode.GDNewObject4Objects3.length = 0;
gdjs.juegoCode.GDNewObject5Objects1.length = 0;
gdjs.juegoCode.GDNewObject5Objects2.length = 0;
gdjs.juegoCode.GDNewObject5Objects3.length = 0;
gdjs.juegoCode.GDeneObjects1.length = 0;
gdjs.juegoCode.GDeneObjects2.length = 0;
gdjs.juegoCode.GDeneObjects3.length = 0;
gdjs.juegoCode.GDizqObjects1.length = 0;
gdjs.juegoCode.GDizqObjects2.length = 0;
gdjs.juegoCode.GDizqObjects3.length = 0;
gdjs.juegoCode.GDderObjects1.length = 0;
gdjs.juegoCode.GDderObjects2.length = 0;
gdjs.juegoCode.GDderObjects3.length = 0;
gdjs.juegoCode.GDjumpiObjects1.length = 0;
gdjs.juegoCode.GDjumpiObjects2.length = 0;
gdjs.juegoCode.GDjumpiObjects3.length = 0;
gdjs.juegoCode.GDcamiObjects1.length = 0;
gdjs.juegoCode.GDcamiObjects2.length = 0;
gdjs.juegoCode.GDcamiObjects3.length = 0;
gdjs.juegoCode.GDborderObjects1.length = 0;
gdjs.juegoCode.GDborderObjects2.length = 0;
gdjs.juegoCode.GDborderObjects3.length = 0;
gdjs.juegoCode.GDfast2Objects1.length = 0;
gdjs.juegoCode.GDfast2Objects2.length = 0;
gdjs.juegoCode.GDfast2Objects3.length = 0;
gdjs.juegoCode.GDfastObjects1.length = 0;
gdjs.juegoCode.GDfastObjects2.length = 0;
gdjs.juegoCode.GDfastObjects3.length = 0;

gdjs.juegoCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['juegoCode'] = gdjs.juegoCode;
