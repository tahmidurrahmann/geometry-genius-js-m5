function triangleCalculation(){
   const triangleBase = getInputDFieldValueById('triangle-base');
   const triangleHeight = getInputDFieldValueById('triangle-height');
   const area = 0.5 * triangleBase * triangleHeight;
   setAreaValue('triangle-area',area)
}

function rectangleCalculation(){
   const rectangleWidth = getInputDFieldValueById('rectangle-width');
   const rectangleLarge = getInputDFieldValueById("rectangle-large");
   const area = rectangleWidth * rectangleLarge;
   setAreaValue('rectangle-area',area)
}

function parallelogramCalculation(){
   const parallelogramBase = getInputDFieldValueById('parallelogram-base');
   const parallelogramHeight = getInputDFieldValueById('parallelogram-height');
   const area = parallelogramBase * parallelogramHeight;
   setAreaValue('parallelogram-area',area)
}
function rhombusCalculation(){
   const rhombusD1 = getInputDFieldValueById('rhombus-d1');
   const rhombus2 = getInputDFieldValueById('rhombus-d2');
   const area = 0.5 * rhombus2 * rhombusD1;
   setAreaValue('rhombus-area',area);
}
function pentagonCalculation(){
   const pentagonP = getInputDFieldValueById('pentagon-p');
   const pentagonB = getInputDFieldValueById('pentagon-b');
   const area = 0.5 * pentagonB * pentagonP;
   setAreaValue('pentagon-area',area)
}
function ellipseCalculation(){
   const ellipseA = getInputDFieldValueById('ellipse-a');
   const ellipseB = getInputDFieldValueById('ellipse-b');
   const area = 3.1416 * ellipseA * ellipseB;
   const areaFixed = area.toFixed(2);
   setAreaValue('ellipse-area',areaFixed)
}
// common function -- reuseable
function getInputDFieldValueById(inputId){
   const inputField = document.getElementById(inputId);
   const inputFieldText = inputField.value;
   const inputFieldValue = parseFloat(inputFieldText);
   return inputFieldValue;
}

// second reuseable function
function setAreaValue(areaId,text){
  const areaField = document.getElementById(areaId);
  areaField.innerText = text;
}