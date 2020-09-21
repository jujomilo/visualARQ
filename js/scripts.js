//EXP-SLK_V.0.0.1 - mezclando orbit controls +  dat Gui
//___________________VARIABLES_____________________________________

var scene, renderer, camera;
var cube;
var controls;
let mat;


/*
//______________________IMAGEN FONDO_________________________________
//Cargando la imagen de fondo
var texture = THREE.ImageUtils.loadTexture('./assets/fm84.png');
var backgroundMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2, 0),
  new THREE.MeshBasicMaterial({
    map: texture
  }));

  backgroundMesh.material.depthTest = false;
  backgroundMesh.material.depthWrite = false;

  //Creando la escena de fondo
  var backgroundScene = new THREE.Scene();
  var backgroundCamera = new THREE.Camera();
  backgroundScene.add(backgroundCamera);
  backgroundScene.add(backgroundMesh);  
*/


  function init(){
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x3a3a3a, 1.0);  //establece el color ambiente y la opacidad
  renderer.physicallyCorrectLights = true;
  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  renderer.shadowMap.enabled = true;
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.setPixelRatio( window.devicePixelRatio );
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);


  scene = new THREE.Scene();




 //__________________CARGA DE TEXTURAS________________________
    var texturaMadera = THREE.ImageUtils.loadTexture('./assets/suelo.png',{},function(){ renderer.render(scene, camera);});texturaMadera.needsUpdate = true;
          
      var material4 = new THREE.MeshPhongMaterial(
      {
        color: 0x90abed,
        map: texturaMadera,
        transparent: true,

        opacity:1}); 




  
             

//______________________PLANO________________________________________
  var plano = new THREE.PlaneGeometry(40, 40);
  var materialplano = new THREE.MeshLambertMaterial({color: 0xcccccc});

  suelo = new THREE.Mesh (plano, material4);
  suelo.receiveShadow = true;
  suelo.rotation.x = -1.3;
  suelo.position.y = 0;
  suelo.position.z = 0;
  scene.add(suelo);
  //________________________CUBO_________________________________________
 cube = new THREE.BoxGeometry(25, 1, 8);
  var materialcubo = new THREE.MeshLambertMaterial({color: 0x90abed,});
  caja = new THREE.Mesh(cube, materialcubo);
  caja.castshadow = true;
  caja.rotation.x = -1.3;
  caja.position.x = 1;
  caja.position.y = 4;
  caja.position.z = 0;

  caja.castShadow = true;
  scene.add(caja);



  //_______________________CAMARAS____________________________________
  camera = new THREE.PerspectiveCamera (45, width/height, 1,1000);
  camera.position.y = 16;
  camera.position.z =30;
  //camera.lookAt(new THREE.Vector3(0,0,0));
  camera.lookAt(scene.position);
  //______________________CONTROLES  ORBITALES________________________
  controls = new THREE.OrbitControls (camera, renderer.domElement);

  //_____________________________LUCES________________________________
  
  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambient);

  var sol = new THREE.DirectionalLight(0xffffff,4,100,2);
  sol.position.set(50,10,20);
  sol.castShadow = true;
  scene.add(sol);

}

function animate(){
  requestAnimationFrame( animate );
  //renderer.render(backgroundScene, backgroundCamera);  <--SOLO PARA IMAGEN DE FONDO
  renderer.render(scene, camera);
  window.addEventListener('resize', reajustarDimensiones, false);  
}

//_____________________________FUNCIONES_____________________________________________

function reajustarDimensiones(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function queMaterial(){

document.getElementById("1").addEventListener("click", function(){
  //console.log(this.id);
  scene.remove(caja);
  var texturaApli1 = THREE.ImageUtils.loadTexture('./assets/cemento.jpg',{},function(){ renderer.render(scene, camera);});texturaApli1.needsUpdate = true;
  var materialApli1 = new THREE.MeshPhongMaterial(
    {
      color: 0x90abed,
      map: texturaApli1,
      transparent: true,
      opacity:1}); 
      var cubo = new THREE.BoxGeometry(25, 1, 8);
      caja = new THREE.Mesh(cubo, materialApli1);
      caja.castshadow = true;
      caja.rotation.x = -1.3;
      caja.position.x = 1;
      caja.position.y = 4;
      caja.position.z = 0;
      caja.castShadow = true;
      scene.remove(caja);
      scene.add(caja);


});
document.getElementById("2").addEventListener("click", function(){
  //console.log(this.id);
  scene.remove(caja);
  var texturaApli2 = THREE.ImageUtils.loadTexture('./assets/abeto.jpg',{},function(){ renderer.render(scene, camera);});texturaApli2.needsUpdate = true;
  var materialApli2 = new THREE.MeshPhongMaterial(
    {
      color: 0x90abed,
      map: texturaApli2,
      transparent: true,
      opacity:1}); 
      var cubo = new THREE.BoxGeometry(25, 1, 8);
      caja = new THREE.Mesh(cubo, materialApli2);
      caja.castshadow = true;
      caja.rotation.x = -1.3;
      caja.position.x = 1;
      caja.position.y = 4;
      caja.position.z = 0;
      caja.castShadow = true;
      scene.remove(caja);
      scene.add(caja);

});
document.getElementById("3").addEventListener("click", function(){
  //console.log(this.id);
  scene.remove(caja);
  var texturaApli3 = THREE.ImageUtils.loadTexture('./assets/metal.jpg',{},function(){ renderer.render(scene, camera);});texturaApli3.needsUpdate = true;
  var materialApli3 = new THREE.MeshPhongMaterial(
    {
      color: 0x90abed,
      map: texturaApli3,
      transparent: true,
      opacity:1}); 
      var cubo = new THREE.BoxGeometry(25, 1, 8);
      caja = new THREE.Mesh(cubo, materialApli3);
      caja.castshadow = true;
      caja.rotation.x = -1.3;
      caja.position.x = 1;
      caja.position.y = 4;
      caja.position.z = 0;
      caja.castShadow = true;
      scene.remove(caja);
      scene.add(caja);
  

});
document.getElementById("4").addEventListener("click", function(){
  //console.log(this.id);
  scene.remove(caja);
  var materialApli4 = new THREE.MeshPhongMaterial(
    {
      color: 0x90abed,
      transparent: true,
      opacity:0.5}); 
      var cubo = new THREE.BoxGeometry(25, 1, 8);
      caja = new THREE.Mesh(cubo, materialApli4);
      caja.castshadow = true;
      caja.rotation.x = -1.3;
      caja.position.x = 1;
      caja.position.y = 4;
      caja.position.z = 0;
      caja.castShadow = true;
      scene.add(caja);

});

}









//_______________________________INICIALIZACIONES____________________________________
queMaterial();
init();
animate();




/*
---------WHAT´S NEXT--------
Mientras averiguo como cargar modelos obj, lo siguiente es crear unas esferas seleccionables usando la librería domevent
La idea es que al selecionar cada una de las esferas con distintos materiales, una función aplique el material de la efera
al muro.
tareas.-
* crear esferas seleccionables
* aplicar texto emergente en las eferas
* crear función que aplique los materiales

*/
