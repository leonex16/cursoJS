const Component = (function () {
  //Creamos el Constructor del Componente
  let Constructor = function(options){
    this.elem = options.elem;
    this.data = options.data;
    this.template = options.template;
  };

  //Agregamos los métodos al prototipo del constructor del componente

  //Render UI
  Constructor.prototype.render = function(){
    let $elem = document.querySelector(this.elem);
    if(!$elem) return;
    $elem.innerHTML = this.template(this.data);
    console.log(this.data);
  };

  
  //Actualizar el State de forma reactiva
  Constructor.prototype.setState = function(obj){
    for(let key in obj) {
      if(this.data.hasOwnProperty(key)){
        this.data[key] = obj[key];
      }
    }
    this.render();
  };
  
  //Obtenemos una copia inmutable del State
  Constructor.prototype.getState = function(){
    return JSON.parse(JSON.stringify(template.data));
  };


  return Constructor;
})();
