
var camara = document.querySelector('#camara1');
var puertap1 = document.querySelector('#puerta_p1');
var elevador = document.querySelector('#elevadorfull');
var luz_elev = document.querySelector('#luz_elev');

var btn1 = document.querySelector('#btn1full');
var btn2 = document.querySelector('#btn2full');
var btn3 = document.querySelector('#btn3full');


btn1.addEventListener('click',function(){
  camara.setAttribute('animation','property: position; to: -2 10 -5; dur: 5000;');
  elevador.setAttribute('animation','property: position; to: 0 0.1 10; dur: 5000;');
  luz_elev.setAttribute('animation','property: position; to: -1 15 0; dur: 5000;');
 //puertap1.setAttribute('animation','property: position; to:-2 11 6.5; dur: 500;');


 btn1.setAttribute('animation','property: position; to:6 7 6.5; dur: 5000;');
 btn2.setAttribute('animation','property: position; to:6 9 6.5; dur: 5000;');
 btn3.setAttribute('animation','property: position; to:6 11 6.5; dur: 5000;');


 
}); 
     


      btn2.addEventListener('click',function(){
          camara.setAttribute('animation','property: position; to: -2 71 -5; dur: 5000;');
          elevador.setAttribute('animation','property: position; to: 0 60 10; dur: 5000;');
          luz_elev.setAttribute('animation','property: position; to: -1 70 0; dur: 5000;');
       // puertap1.setAttribute('animation','property: position; to:-2 71 6.5; dur: 500;');

      
        btn1.setAttribute('animation','property: position; to:6 66 6.5; dur: 5000;');
        btn2.setAttribute('animation','property: position; to:6 68 6.5; dur: 5000;');
        btn3.setAttribute('animation','property: position; to:6 70 6.5; dur: 5000;');
      }); 



              btn3.addEventListener('click',function(){
                camara.setAttribute('animation','property: position; to: -2 132 -5; dur: 5000;');
                elevador.setAttribute('animation','property: position; to: 0 120 9.8; dur: 5000;');
                luz_elev.setAttribute('animation','property: position; to: -1 135 0; dur: 5000;');
              //puertap1.setAttribute('animation','property: position; to:-2 71 6.5; dur: 500;');


              btn1.setAttribute('animation','property: position; to:6 127 6.2; dur: 5000;');
              btn2.setAttribute('animation','property: position; to:6 129 6.2; dur: 5000;');
              btn3.setAttribute('animation','property: position; to:6 131 6.2; dur: 5000;');
              }); 




   


 /*Posiciones en Y camara

 1er piso = 10
 2do = 70
 3ro = 132
 */




 // Obtener la referencia del objeto y del sonido
 

 /*AFRAME.registerComponent('nextbot', {
  schema: {
    target: {type: 'selector'},
    speed: {type: 'number', default: 0.05}
  },
  tick: function () {
    var targetPosition = this.data.target.object3D.position;
    var currentPosition = this.el.object3D.position;

    // Calcula la dirección hacia el objetivo
    var direction = new THREE.Vector3().subVectors(targetPosition, currentPosition).normalize();

    // Ajusta la posición del Nextbot
    currentPosition.addScaledVector(direction, this.data.speed);

    // Actualiza la posición del Nextbot
    this.el.object3D.position.copy(currentPosition);
  }
});

// Asigna el comportamiento al Nextbot
document.querySelector('#homero').setAttribute('nextbot', {
  target: '#camara1',
  speed: 0.3 // Ajusta la velocidad
});*/
   
