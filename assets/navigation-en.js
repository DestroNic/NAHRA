

function inicio(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `
    <div class="home-content">
                <div class="main-logo">
                    <div class="acronym">
                        <p>NAHRA</p>
                    </div>
                    <div class="divider">
                        <p>|</p>
                    </div>
                    <div class="nahra-meaning">
                        <p>Nicaraguan American Human Rights Alliance</p>
                    </div>
                </div>
                <div class="home-body">
                    <p>NAHRA is a national Organization in the United Stated, registered in Washington DC
                        and regional chapters in California, Florida and Texas. <br><br>
                        
                        An Alliance of individuals and organizations commited to Democracy Rights fundamentals
                        , constitutional guarantees also the protection and perseverance of Human Rights of each individual.<br><br>
                        
                        Our primary focus are the Nicaraguan seekeing refugee in the United States, scaping from
                        prosecution, torture, execution and incarceration just because of the aspiration to have liberty
                        and democracy in Nicaragua, principles source from the universal declaration of Human Rights.</p>
                </div>
    
                <div class="learn-more">
                    <a href="#" onclick="historia()">Read More..</a>
    
                </div><br><br>
                
                </div>
    `;
}

function historia(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>History</p></div>
    <hr>
    <div class="history-content">
  <div class="history-title">
    <h4>NAHRA Beginnings</h4>
  </div>
  <div class="history-detail">
    <p>After the deportation of 60 of Nicaraguans at the beginning of 2019, we saw the need for a more structured approach to the Nicaraguan immigration issue.</p>
    <p>Born out of the need to help Nicaraguan refugees seeking asylum in the U.S. and other countries in the region.</p>
    <p>Sharing experiences of support for cases in different countries, we realized the magnitude of the issue and the importance of continuing to work at the national level under the umbrella of one organization.</p>
    <p>Approximately 30+ volunteers ‘autoconvocados’ and members of different organizations in the U.S. met in DC in February 2019 and elaborated a plan of action.</p>
    </div>
  </div>
  <hr>
  <div class="history-content">
  <div class="history-title">
    <h4>We advocte for:</h4>
  </div>
  <div class="history-detail">
    <p>Moratorium of deportations from the U.S. until constitutional guarantees exist in  Nicaragua.</p>
    <p>Establishment of a standard process within the immigrations courts in the U.S. </p>
    <p>Waive of bonds for refugees that have qualified as asylum applicants.</p>
    <p>Adjust and designate the status of temporal protection for Nicaraguans in the U.S.</p>
    <p>Allow human rights organizations such as NAHRA to visit detentions centers and accompany the cases of nicaraguan detainees.</p>
    <p>Such deportation be the last resort, allow deportation to a third country.</p>
  </div>
</div>
<hr>
<div class="history-content">
<div class="history-title">
  <h4>Who we are</h4>
</div>
<div class="history-detail">
  <p>NAHRA  is a national organization in the United States, registered in Washington DC, with chapters in California/Arizona, Florida and Texas.  <br><br>
  NAHRA consists of an alliance of individuals and organizations committed to the fundamental rights of democracy, constitutional guarantees, as well as the protection and preservation of individual human rights. <br><br>
  Our prime focus is to support Nicaraguans seeking refuge and asylum in to the United States, those scaping persecution, torture, execution and incarceration solely for aspiring to have a democratic and free country; principles contained in universal human rights declarations. </p>
  
</div>
</div>
<hr>
<div class="history-content">
<div class="history-title">
  <h4>Our Mission</h4>
</div>
<div class="history-detail">
  <p>Support and defend in all of our actions, programs and strategies, the basic principles of human rights as stated in the Human Rights Declaration of the United Nations and the Inter-American System.</p>
  <p>Committed with the fundamental principles of democracy, constitutional guarantees, protection and preservation of individual human rights.</p>
  <p>We are guided by our love for our Nicaraguan brothers and sisters currently seeking asylum in the United States and we work to defend their human and constitutional rights.</p>
  <p>We are committed to the welfare of all refugees and their families and to the protection of their constitutional rights within the United States and to promote their rights to have the economic, educational and social opportunities so that they become fully functional and productive members of society.</p>
  </div>
</div>`;
}

function labor(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>What we do</p></div>
    <hr>
    <div class="labor-content">
      <div class="image">
        <img src="../images/labor-es/labor1.png">
      </div>
      <div class="text">
        <p>Provide accompaniment to <strong>Nicaraguans</strong> seeking asylum in the U.S.</p>
      </div>
    </div>
    <div class="labor-content-reverse">
      <div class="text">
        <p>Seek alliances with like organizations to better serve our community</p>
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
      <p>Advocate for the rights of refugees and immigrants to the U.S.</p>
    </div>
  </div>
    `;
}

function recursos(){
  var x = document.getElementsByClassName("page-content");
  x[0].innerHTML = `<div class='content-header'><p>Resources</p></div>
  <hr>
  <div class="recursos-content">
    <a href="#" onclick="descarga()">Downloads</a>
    <a href="#" onclick="videos()">Videos</a>
  </div>
  <div class="recursos-body">
    
  </div>
  `;
  var x = document.getElementById('responsive');
  if (x.className === "navigation-items") {
      x.className += " responsive";
  }   else {
      x.className = "navigation-items";
  }
}

function descarga() {
  var x = document.getElementsByClassName('recursos-body');
  x[0].innerHTML = `
  <div class="descarga-item">
      <h4>NAHRA presentation in Medellin 2019</h4>
      <p> PowerPoint Presentation</p>
      <a href="#"><i class="fas fa-download"></i></a>
  
  </div>
  <div class="descarga-item">
      <h4>Guide to complete asylum petition</h4>
      <p>PDF Document</p>
      <a href="#"><i class="fas fa-download"></i></a>
  
  </div>
  `;
}

function videos() {
var x = document.getElementsByClassName('recursos-body');
x[0].innerHTML = `
<div class="video-item">
    <h4>What are the Universal Human Rights?</h4>
    <iframe height="315" src="https://www.youtube.com/embed/nDgIVseTkuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<div class="video-item">
    <h4>History of Human Rights</h4>
    <iframe height="315" src="https://www.youtube.com/embed/6XXGF_V8_7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
`;
}


function contacto(){
  var x = document.getElementsByClassName("page-content");
  x[0].innerHTML = `<div class='content-header'><p>Contact us</p></div>
  <hr>
<div class="contact-wrapper">
    <div class="contact-left">
      <div class="contact-left-item">
        <div class="contact-left-title">
          <i class="far fa-envelope"></i>
        </div>
        <div class="left-text">
          <p>If you are a member of any other organization you can get in touch with us to the email:</p>
          <a href="mailto:nahra.usa@gmail.com">nahra.usa@gmail.com</a>
          <p>If you need assistance of NAHRA you can contact us to the following email:<p>
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
      <p>If you have any questions, you can send it to us filling out the following contact form</p>
      <input type="text" class="form-input" placeholder="Name">
      <input type="email" class="form-input" placeholder="Email">
      <textarea cols=47 rows=5 placeholder="Message"></textarea>
      <div class="submit-button">
        <button type="submit" value="submit">SUBMIT</button>
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
