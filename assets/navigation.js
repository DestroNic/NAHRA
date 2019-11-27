

function inicio(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='banner'></div>`;
    var x = document.getElementById('responsive');
    if (x.className === "navigation-items") {
        x.className += " responsive";
    }   else {
        x.className = "navigation-items";
    }
}

function historia(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>Historia</p></div>
    <hr>
    <div class="history-content">
  <div class="history-title">
    <h4>Como nacio NAHRA?</h4>
  </div>
  <div class="history-detail">
    <p>A raíz de la deportación de 60 nicaragüenses a inicios de 2019, se vio la necesidad de buscar soluciones  a un nivel mas estructurado.</p>
    <p>Nace de la necesidad de ayudar a los inmigrantes Nicaragüenses que buscan asilo en los EEUU y refugio en otros países de la región.</p>
    <p>Al compartir las historias de las personas que veníamos acompañando en diferentes estados, identificamos la magnitud de la problemática y al mismo tiempo la importancia de continuar trabajando en esa  línea a nivel nacional ya de una manera coordinada bajo una sola organización.</p>
    <p>Aproximadamente 30+ voluntarios autoconvocados y miembros de diferentes organizaciones en los EEUU nos reunimos en DC en Febrero 2019 y elaboramos un plan de Acción y estrategia de trabajo.</p>
  </div>
  </div>
  <hr>
  <div class="history-content">
  <div class="history-title">
    <h4>Estamos abogando por:</h4>
  </div>
  <div class="history-detail">
    <p>Moratoria de deportaciones desde EEUU hasta que existan garantías constitucionales en Nicaragua.
    </p>
    <p>Establecimiento de un proceso estándar a los procesos de petición de asilo político en las cortes de inmigración en los EEUU.
    </p>
    <p>Eliminación de las altas fianzas para refugiados que han calificado como aplicantes de asilo.
    </p>
    <p>Ajustar y designar un estatus de protección temporal (TPS) para los Nicaragüenses que buscan asilo en los Estados Unidos. 
    </p>
    <p>Permitir que organizaciones de derechos humanos como NAHRA puedan visitar los centros de detención y acompañar a los nicaragüenses detenidos.
    </p>
    <p>En caso de que la deportación sea inevitable, que se realice la deportación a un tercer país.
    </p>
  </div>
</div>
<hr>
<div class="history-content">
<div class="history-title">
  <h4>Quienes Somos?</h4>
</div>
<div class="history-detail">
  <p>NAHRA es una organización nacional  dentro de los Estados Unidos, registrada en Washington DC y capítulos regionales en California, Florida y Texas. <br><br>
  Alianza de individuos y organizaciones comprometidos con los derechos fundamentales de la democracia, garantías constitucionales así como también la protección y preservación de los derechos humanos de cada individuo.<br><br>
  Nuestro enfoque primordial son los Nicaragüenses buscando refugio en los Estados Unidos, escapando persecución, tortura, ejecución y encarcelación por el solo hecho de aspirar a que exista democracia y libertad en Nicaragua; principios que emanan de las declaraciones universales de derechos humanos. 
  </p>
  
</div>
</div>
<hr>
<div class="history-content">
<div class="history-title">
  <h4>Nuestra Mision</h4>
</div>
<div class="history-detail">
  <p>Apoyar y defender los principios básicos de derechos humanos comprendidos en la Declaración de Derechos Humanos de las Naciones Unidas y del Sistema Interamericano en todas nuestras acciones, programas y estrategias.  </p>
  <p>Comprometidos con los principios fundamentales de democracia, garantías constitucionales, la protección y preservación de los derechos humanos individuales.  </p>
  <p>Nos guía el amor por nuestros hermanos nicaragüenses que actualmente buscan refugio y asilo en los Estados Unidos y trabajamos para defender sus derechos constitucionales y humanos.   </p>
  <p>Estamos comprometidos al bienestar de los refugiados y sus familias, a proteger sus derechos constitucionales dentro de los Estados Unidos y promover sus derechos de tener  oportunidades económicas, educacionales y sociales para que se conviertan en miembros productivos de la Sociedad.  </p>
</div>
</div>`;
var x = document.getElementById('responsive');
if (x.className === "navigation-items") {
    x.className += " responsive";
}   else {
    x.className = "navigation-items";
}
}

function labor(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>Nuestra Labor</p></div>
    <hr>
    <div class="labor-content">
      <div class="image">
        <img src="../images/labor-es/labor1.png">
      </div>
      <div class="text">
        <p>Brindar acompañamiento a <strong>Nicaragüenses</strong> buscando asilo en Estados Unidos</p>
      </div>
    </div>
    <div class="labor-content-reverse">
      <div class="text">
        <p>Buscar alianzas con Organizaciones similares para servir mejor a la comunidad</p>
      </div>
    <div class="image">
      <img src="../images/labor-es/labor2.png">
    </div>
  </div>
  <div class="labor-content">
    <div class="image">
      <img src="../images/labor-es/labor3.png">
    </div>
    <div class="text">
      <p>Abogar por los derechos de los refugiados e imigrantes en Estados Unidos</p>
    </div>
  </div>
    `;
    var x = document.getElementById('responsive');
    if (x.className === "navigation-items") {
        x.className += " responsive";
    }   else {
        x.className = "navigation-items";
    }
}

function recursos(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>Recursos</p></div>
    <hr>
    `;
    var x = document.getElementById('responsive');
    if (x.className === "navigation-items") {
        x.className += " responsive";
    }   else {
        x.className = "navigation-items";
    }
}

function contacto(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>Contactanos</p></div>
    <hr>
  <div class="contact-wrapper">
      <div class="contact-left">
        <div class="contact-left-item">
          <div class="contact-left-title">
            <i class="far fa-envelope"></i>
          </div>
          <div class="left-text">
            <p>Si eres miembro de otra organizacion puedes ponerte en contacto con nosotros al correo:</p>
            <a href="mailto:nahra.usa@gmail.com">nahra.usa@gmail.com</a>
            <p>Si necesitas asitencia de NAHRA puede contactarnos al siguiente correo:<p>
            <a href="mailto:nahracases@gmail.com">nahracases@gmail.com</a>
          </div>
        </div>
        <div class="contact-left-item">
          <div class="contact-left-title">
            <i class="fab fa-facebook-square"></i>
          </div>
          <br>
          <div class="left-text">
            <a href="https://www.facebook.com/NahraUSA/">NAHRA Human Rights</a> 
          </div>
          </div>
      </div>
    <div class="contact-right">
      <div class="contact-form">
        <p>Si tienes alguna pregunta nos la puedes enviar llenando el siguiente formulario de contacto</p>
        <input type="text" class="form-input" placeholder="Nombre">
        <input type="email" class="form-input" placeholder="Correo">
        <textarea cols=47 rows=5 placeholder="Mensaje"></textarea>
        <div class="submit-button">
          <button type="submit" value="submit">ENVIAR</button>
        </div>
      </div>
  </div>
  

    </div>`;
    var x = document.getElementById('responsive');
    if (x.className === "navigation-items") {
        x.className += " responsive";
    }   else {
        x.className = "navigation-items";
    }
}

function responsiveMenu() {
    var x = document.getElementById('responsive');
    if (x.className === "navigation-items") {
        x.className += " responsive";
    }   else {
        x.className = "navigation-items";
    }
}
