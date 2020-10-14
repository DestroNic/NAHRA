

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
                    <p>NAHRA is a 501(c)(3) nonprofit organization that promotes and defends the human rights of Nicaraguan migrants and refugees who had to flee their home country due to persecution.
                    </p>
                      <p>Government repression and human rights violations in Nicaragua since April 2018 forced 60,000+ people to flee violence and seek refuge in other countries, mainly neighboring Costa Rica and the United States. </p>
                      <p>
                      The ZERO TOLERANCE policy and anti-immigration sentiments have contributed to the <strong>REVICTIMIZATION</strong> of those affected by the genocide in Nicaragua.
                      </p>
                      <p>Immigrants in deportation proceedings do not have the right to free representation. Without a lawyer, many will likely lose their case and be sent back to the nightmare they were escaping. For many, deportation is the equivalent of illegal incarceration or worse, a death sentence.
                      </p>
                      <h3>Become a Volunteer</h3>
                      <p>
                      Volunteers are the backbone of the work we do. Ongoing volunteer opportunities include assisting asylum seekers in filling out paperwork, preparing translations, interpreting, visiting detained asylum seekers and lending your talents for various administrative tasks in the organization. You decide the amount of time and the activities in which you would like to collaborate.  We need you in order to be able to continue to assist the vulnerable population we serve. 
                      </p>
                </div>
    
                <div class="learn-more">
                    <a href="#" onclick="historia()">Read More..</a>
    
                </div><br><br>
                
                </div>
    `;
    responsiveMenu();
}

function historia(){
    var x = document.getElementsByClassName("page-content");
    x[0].innerHTML = `<div class='content-header'><p>About Us</p></div>
    <hr>
    <div class="history-content">
  <div class="history-title">
    <h4>Our Beginnings</h4>
  </div>
  <div class="history-detail">
  <p>
    NAHRA was born out of the need to coordinate efforts to assist Nicaraguan refugees seeking asylum in the United States and in other countries in the Americas. The deportation of 60 Nicaraguans in early 2019 that had fled the country escaping persecution evidenced the need for a structured approach to the Nicaraguan immigration and humanitarian crisis.
    In February of 2019 over 30 independent volunteers and members of different organizations who were working on various issues related to the Nicaraguan crisis met in Washington D.C. Sharing experiences of support for cases in different countries, we realized the magnitude of the issue and the importance of continuing to work at the national level under the umbrella of one organization. As a result, we elaborated an action plan and strategy to cooperate and unite our efforts.
    NAHRA was formally registered as a non-profit organization in Washington D.C. in May of 2019. 
  </p>  
  </div>
  </div>
  <hr>
  <div class="history-content">
  <div class="history-title">
    <h4>Who We Are</h4>
  </div>
  <div class="history-detail">
   <p> 
    NAHRA is a 501(c)(3) nonprofit organization that defends and promotes the human rights and welfare of Nicaraguan immigrants and refugees in the United States and worldwide. 
    We consist of an alliance of individuals and organizations committed to the fundamental principles of democracy, constitutional guarantees and the protection and preservation of individual human rights. We are a national organization in the United States with chapters in Florida, Virginia, New York, Indiana, Texas, California and Arizona.
    Our prime focus is to assist Nicaraguans seeking refuge and asylum in the United States, those escaping persecution, torture, execution and incarceration solely for aspiring to have a democratic and free country; principles contained in universal human rights declarations. We want to help individuals and families to overcome the hardships posed by exile and to see them thrive in their communities.
   </p>
  </div>
</div>
<hr>
<div class="history-content">
<div class="history-title">
  <h4>Our Mission</h4>
</div>
<div class="history-detail">
   <p> 
    We support and defend in all of our actions, programs and strategies, the basic principles of human rights as stated in the Human Rights Declaration of the United Nations and the Inter-American System.
    We are committed with the fundamental principles of democracy, constitutional guarantees, protection and preservation of individual human rights.
    We are guided by our love for our Nicaraguan brothers and sisters currently seeking asylum in the United States and we work to defend their human and constitutional rights. 
    We are committed to the welfare of all refugees and their families and to the protection of their constitutional rights within the United States and to promote their rights to have economic, educational and social opportunities so that they become fully functional and productive members of society.  
  </p>
</div>
</div>`;
responsiveMenu();
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
    responsiveMenu();
}

function howToHelp(){
  var x = document.getElementsByClassName("page-content");
  x[0].innerHTML = `<div class='content-header'><p>How to Help</p></div>
  <hr>
  <div class='ayuda-header'>
    <p>NAHRA needs your support to be able to continue assisting the vulnerable population that we serve. Here are some ways in which you can make a difference!
    </p>
  </div>

  <div class="ayuda-content">
    
    <div class='ayuda-item'>
      <img src='../images/volunteer.jpg' alt='image'>
      <h3>
        Volunteer
      </h3>
      <p>
      Volunteers are the backbone of the work we do. Ongoing volunteer opportunities include assisting asylum seekers in filling out paperwork, preparing translations, interpreting, visiting detained asylum seekers and lending your talents for various administrative tasks in the organization. You decide the amount of time and the activities in which you would like to collaborate.  We need you in order to be able to continue to assist the vulnerable population we serve. 
      </p>
    </div>
    <div class='ayuda-item'>
      <img src='../images/informed.jpg' alt='image'>
      <h3>
        Stay informed
      </h3>
      <p>
      Join our mailing list to stay informed about the work we are doing, the latest issues facing immigrants in our community, and to learn how you can join the fight to protect and promote immigrants’ rights.
      </p>
    </div>
    <div class='ayuda-item'>
      <img src='../images/mentor.jpg' alt='image'>
      <h3>
        Become a Mentor
      </h3>
      <p>
      Asylum seekers and refugees face many challenges to integrate into a new country and community. Having someone whom to ask basic questions about life in the U.S. and who can guide them through various issues is very helpful. 
      </p>
    </div>
    <div class='ayuda-item'>
      <img src='../images/share.jpg' alt='image'>
      <h3>
        Share Our Story
      </h3>
      <p>
      Follow us on social media to join the conversation and inform others about these pressing issues. 
      </p>
    </div>
    <div class='ayuda-item'>
      <img src='../images/donate.jpg' alt='image'>
      <h3>
        Donate
      </h3>
      <p>
      When you donate to NAHRA your gift is directly assisting asylum seekers to achieve release from detention centers and refugees to receive basic assistance to survive. 
      </p>
    </div>
    
  </div>
  
  `;
  responsiveMenu();
}

// function descarga() {
//   var x = document.getElementsByClassName('recursos-body');
//   x[0].innerHTML = `
//   <div class="descarga-item">
//       <h4>NAHRA presentation in Medellin 2019</h4>
//       <p> PowerPoint Presentation</p>
//       <a href="#"><i class="fas fa-download"></i></a>
  
//   </div>
//   <div class="descarga-item">
//       <h4>Guide to complete asylum petition</h4>
//       <p>PDF Document</p>
//       <a href="#"><i class="fas fa-download"></i></a>
  
//   </div>
//   `;
// }

// function videos() {
// var x = document.getElementsByClassName('recursos-body');
// x[0].innerHTML = `
// <div class="video-item">
//     <h4>What are the Universal Human Rights?</h4>
//     <iframe height="315" src="https://www.youtube.com/embed/nDgIVseTkuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// </div>
// <div class="video-item">
//     <h4>History of Human Rights</h4>
//     <iframe height="315" src="https://www.youtube.com/embed/6XXGF_V8_7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// </div>
// `;

// }


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
  responsiveMenu();
}

function responsiveMenu() {
  var x = document.getElementById('responsive');
  if (x.className === "navigation-items") {
      x.className += " responsive";
  }   else {
      x.className = "navigation-items";
  }
}
