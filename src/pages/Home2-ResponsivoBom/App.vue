<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, inicial-scale=1.0" />
    <configuracoesPrincipais />

    <header id="header">
      <div class="container header__container">
        <div>
          <button id="header__button">
            <img
              src="@/assets/DuckHealthLogo.png"
              alt="duckHealthLogo"
              id="header__logo"
            />
          </button>
        </div>

        <div class="menu-section">
          <div class="menu-toggle">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>

          <nav>
            <ul>
              <li><a href="#intro" class="header__link">Inicio</a></li>
              <li><a href="#about" class="header__link">Sobre</a></li>
              <li><a href="#exams" class="header__link">Exames</a></li>
              <li><a href="#form" class="header__link">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <section id="intro">
      <div class="container intro__container">
        <div id="intro__box">
          <div>
            <h1>Duck Health</h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quibusdam pariatur impedit cupiditate laboriosam facere
              et itaque similique consequatur sunt doloribus dolor, tempora rem
              blanditiis enim. Natus iure ad accusantium!
            </p>
          </div>
          <br />
          <br />
          <button id="intro__button" onclick="window.location.href='login';">
            <img src="@/assets/paperIcon.png" alt="paperIcon" />
            <h3>Acessar Laudos</h3>
          </button>
        </div>

        <div>
          <img id="intro__img1" src="@/assets/bg-banner.png" alt="room" />
          <!-- <img id="intro__img2" src="@/assets/circulo.svg" alt="circle" /> -->
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container about__container">
        <div>
          <img id="about__img1" src="@/assets/doctor.jpg" alt="doctorPatient" />
          <!-- <img id="about__img2" src="@/assets/circulo.svg" alt="circle" /> -->
        </div>

        <div id="about__textbox">
          <h2>Sobre Nós</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, sapien id suscipit suscipit, urna ex sodales ante, nec
            convallis nibh nisi a nibh. Aenean rutrum dui id dui varius, et
            consequat risus congue. Pellentesque maximus eu arcu a maximus. Cras
            ac diam pharetra, tincidunt nunc ac, mattis dolor. Donec ullamcorper
            arcu et vestibulum tincidunt. Mauris finibus lacus vitae accumsan
            euismod. Nullam ut eros sit amet sapien malesuada iaculis
            condimentum scelerisque elit. Maecenas non ipsum nec massa rutrum
            viverra. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed sollicitudin, sapien id suscipit suscipit, urna
            ex sodales ante, nec convallis nibh nisi a nibh.
          </p>
        </div>
      </div>
    </section>

    <section id="exams">
      <div class="container exams__container">
        <h3>Exames</h3>

        <div class="exams__exam">
          <img src="@/assets/doctor.jpg" alt="img1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin,
          </p>
        </div>

        <div class="exams__exam">
          <img src="@/assets/doctor2.jpg" alt="img2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin,
          </p>
        </div>

        <div class="exams__exam">
          <img src="@/assets/doctor3.jpg" alt="img3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin,
          </p>
        </div>

        <div class="exams__exam">
          <img src="@/assets/doctor2.jpg" alt="img4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin,
          </p>
        </div>

        <div class="exams__exam">
          <img src="@/assets/doctor.jpg" alt="img5" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin,
          </p>
        </div>
      </div>
    </section>

    <section id="address">
      <div class="container address__container">
        <div>
          <div>
            <h2>Endereço</h2>
          </div>

          <div class="address__info">
            <img src="@/assets/buildingIcon.png" alt="buildingIcon" />
            <p>Rua dos Doidões, Bairro Muito Doido, N° 127</p>
          </div>

          <div class="address__info">
            <img src="@/assets/airCondIcon.png" alt="airCondIcon" />
            <p>Ambiente climatizado, para o seu conforto ao atende-lo!</p>
          </div>

          <div class="address__info">
            <img src="@/assets/ballIcon.png" alt="ballIcon" />
            <p>Sala com brinquedos e passa-tempo para as crianças!</p>
          </div>
        </div>

        <div>
          <a
            href="https://www.google.com/maps/place/Jera/@-20.4397582,-54.6182774,17z/data=!3m1!4b1!4m5!3m4!1s0x9486e8c13ec2829f:0xcbc2c46137c0c1b1!8m2!3d-20.4397617!4d-54.6160793"
          >
            <img id="address__img1" src="@/assets/maps.png" alt="map" />
          </a>
          <!-- <img id="address__img2" src="@/assets/circulo.svg" alt="circle" /> -->
        </div>
      </div>
    </section>

    <section id="form">
      <div class="container form__container">
        <form id="form__box" method="POST" action="">
          <input type="text" name="Nome" id="nome" placeholder="Nome" />
          <input type="text" name="Email" id="email" placeholder="Email" />
          <textarea
            name="Comentar"
            id="comentar"
            cols="30"
            rows="3"
            placeholder="Como podemos ajudar? Escreva sua dúvida"
          ></textarea>
          <input type="submit" name="Enviar" id="enviar" value="Enviar" />
        </form>

        <div id="contact">
          <div>
            <h2>Contatos</h2>
          </div>

          <div class="contact__link">
            <img src="@/assets/phoneIcon.png" alt="phoneIcon" />
            <a href="tel:+556792191806">+556792191806</a>
            <span> ou </span>
            <a href="tel:+556791186869">+556791186869</a>
          </div>

          <div class="contact__link">
            <img src="@/assets/instagramIcon.png" alt="instagramIcon" />
            <a
              href="https://instagram.com/megaufms?utm_medium=copy_link"
              target="_blank"
              >@Duck_Health</a
            >
          </div>

          <div class="contact__link">
            <img src="@/assets/facebookIcon.png" alt="facebookIcon" />
            <a href="https://www.facebook.com/megaufms/" target="_blank"
              >Duck Health</a
            >
          </div>

          <div class="contact__link">
            <img src="@/assets/linkedinIcon.png" alt="linkedinIcon" />
            <a href="https://www.linkedin.com/company/megajr/" target="_blank"
              >Duck Health</a
            >
          </div>
        </div>
      </div>
    </section>

    <footer id="footer">
      <div class="container footer__container">
        <img
          src="@/assets/DuckHealthLogo.png"
          alt="duckHealthLogoText"
          id="footer__logo"
        />
        <div><h3>Duck Health</h3></div>
      </div>
    </footer>
  </div>
</template>

<script>
import configuracoesPrincipais from '@/components/configuracoesPrincipais.vue'

export default {
  name: 'Home',
  components: {
    configuracoesPrincipais
  },
  data() {
    return {}
  }
}
</script>

<style>
/* Configurações gerais (fora as configuraçõesPrincipais do outro componente) */
html {
  /* Estratégia para deixar 1rem = 10px, e quando for diminuir a porcentagem da font-size no media queries, diminui todos os elementos com rem */
  font-size: 62.5%;
}

p {
  font-size: 2rem;
}

h2 {
  font-weight: 800;
  font-size: 4.7rem;
}

a {
  text-decoration: none;
}

img {
  object-fit: cover;
}

button {
  opacity: 0.94;
}

/* Container do site, para manter centralizado */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1700px;
  width: 138rem;

  margin: 0px 30px;
}

/* buttonAnimations, a, inputs, textarea */
a:hover {
  transition: 0.3s;
  opacity: 0.7;
}

button:hover {
  transition: 0.2s;
  opacity: 1;
}

input:hover {
  transition: 0.3s;
  opacity: 0.9;
}

textarea:hover {
  transition: 0.3s;
  opacity: 0.95;
}

/* Header */
#header {
  background: #15c3d6;

  display: flex;
  justify-content: center;
}

/* headerLogo*/
#header__button {
  background: #2e4a7d;

  height: 9rem;
  width: 9rem;

  margin-top: 15px;
  border-radius: 10px;
  border: none;
}

#header__logo {
  height: 9rem;
  width: 9rem;

  border-radius: 10px;
}

/* headerLink */
#header nav ul {
  list-style-type: none;
}

#header nav ul li {
  display: inline-block;
}

.header__link {
  color: white;

  margin-left: 3.5rem;

  font-weight: 700;
  font-size: 2.8rem;
}

/* Intro */
#intro {
  background: #15c3d6;

  border-radius: 0px 0px 0px 15rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* introTextBox*/
#intro__box {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

#intro__box h1 {
  color: #ffd666;

  font-weight: 800;
  font-size: 6.4rem;
}

#intro__box p {
  color: white;

  max-width: 45rem;

  font-size: 2.4rem;
  line-height: 3.2rem;
  text-align: justify;
}

/* introButton + buttonIcon + buttonText */
#intro__button {
  background: #2e4a7d;

  border-radius: 2rem;
  border: none;
  padding: 1.5rem 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.8rem;

  width: 35rem;
}

#intro__button h3 {
  color: white;
  font-size: 3rem;
}

#intro__button img {
  margin-right: 15px;
}

/* introImg */
#intro__img1 {
  width: 80rem;
  height: auto;
  position: relative;
  z-index: 1;
}

/* Aql bola estranha, mas eu deixei comentado no html pq estraga todo o site */
#intro__img2 {
  position: absolute;
  right: -250px;
  top: -140px;
  z-index: 0;
  height: 600px;
}

/* About */
#about {
  display: flex;
  justify-content: center;
}

.about__container {
  margin: 7rem 0rem;
}

/* aboutImg */
#about__img1 {
  width: 70rem;
  height: auto;
  border-radius: 25px;
  position: relative;
  z-index: 1;
}

/* aboutTextBox */
#about__textbox {
  min-width: 30rem;
  max-width: 55rem;

  text-align: center;
}

#about__textbox p {
  color: rgba(46, 74, 125, 0.8);

  margin: 3rem 3rem 0rem;

  text-align: justify;
}

/* Aql bola estranha (DNV), mas eu deixei comentado no html pq estraga todo o site */
#about__img2 {
  color: rgba(46, 74, 125, 0.8);

  height: 800px;

  position: absolute;
  z-index: -1;
  top: 400px;
  left: 30%;
}

/* Exams */
#exams {
  background: #ffd666;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 22rem 0px 22rem;
}

.exams__container {
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem 22rem;

  text-align: center;

  margin-bottom: 3rem;
}

/* examsTitle */
#exams h3 {
  font-size: 3.8rem;
  font-weight: 800;

  width: 100vw;

  margin-top: 3rem;
}

/* examTextBox + examImg */
.exams__exam {
  max-width: 25rem;
}

.exams__exam img {
  width: 20rem;
  height: 20rem;

  border: 2.5px solid #2e4a7d;
  border-radius: 50%;
}

.exams__exam p {
  font-size: 2.3rem;
}

/* Address */
#address {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 0px;
}

/* addressTextBox */
.address__info {
  display: flex;
  justify-content: left;
  align-items: center;

  margin: 30px;
}

.address__info p {
  font-size: 2rem;
  font-weight: 800;

  margin-left: 15px;
}

/* addressImg */
#address__img1 {
  width: 65rem;
  height: auto;
}

/* Aql bola estranha (DNV), mas eu deixei comentado no html pq estraga todo o site */
#address__img2 {
  height: 500px;

  position: absolute;
  z-index: -1;
  top: 1700px;
  left: -220px;
}

/* Form */
#form {
  display: flex;
  justify-content: center;
  align-items: center;
}

#form__box {
  display: flex;
  flex-direction: column;
}

#form__box input,
#comentar {
  height: 7rem;
  width: 70rem;

  border-radius: 1.6rem;
  border-style: none;

  font-size: 2.4rem;
  font-weight: 800;

  padding-left: 10px;
  margin-bottom: 20px;
}

#comentar {
  height: 15rem;
  max-height: 15rem;
  min-height: 15rem;

  padding-bottom: 9rem;
}

#enviar {
  color: white;
  background: #2e4a7d;
}

/* Contact */
#contact h2 {
  text-align: center;
}

#contact a {
  font-size: 2.7rem;
  font-weight: 800;

  margin: 0px 20px;
}

.contact__link {
  margin: 25px 0px;
  display: flex;
  align-items: center;
}

/* Footer */
#footer {
  background: #15c3d6;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 8rem 0px 0px;
}

.footer__container {
  justify-content: left;
}

#footer h3 {
  color: white;
  font-weight: 700;
  font-size: 3.6rem;
}

#footer__logo {
  width: 12rem;
  margin: 0px 2rem 0px -2rem;
}

@media (max-width: 1440px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 1120px) {
  html {
    font-size: 40%;
  }
}

@media (max-width: 920px) {
  html {
    font-size: 65%;
  }

  #intro__img1 {
    display: none;
  }

  .intro__container {
    justify-content: center;

    margin: 3rem 0rem;
  }

  .about__container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
  }

  .address__container {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .form__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  #contact h2 {
    display: none;
  }

  #contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact__link {
    margin: 30px;
  }
}
@media (max-width: 760px) {
  html {
    font-size: 55%;
  }

  #about__img1,
  #address__img1 {
    width: 55rem;
  }

  #form__box input,
  #comentar {
    width: 60rem;
    height: 6rem;
  }
}
/*Esse daqui vai ser para o botao*/
@media (max-width: 600px) {
  html {
    font-size: 50%;
  }

  nav {
    display: none;
  }

  #about__img1,
  #address__img1 {
    width: 50rem;
  }

  .contact__link {
    display: flex;
    flex-direction: column;
  }

  .exams__container {
    flex-direction: column;
  }

  #form__box input,
  #comentar {
    width: 50rem;
  }

  /* Menu Hamburger fechado configs*/
  .one,
  .two,
  .three {
    background-color: whitesmoke;
    height: 1rem;
    width: 6rem;
    margin-top: 1rem;
    transition-duration: 0.3s;
  }

  /* Menu Hamburger aberto configs*/
  .menu-section.on {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    z-index: 10;

    transition-duration: 0.3s;

    /* resolver overflow-y: hidden com javascript */

    background: #15c3d6;
  }

  /* Serve para deixar um link em baixo do outro no hamburger aberto, com as margins e tamanhos de fontes corretos */
  .menu-section.on nav {
    display: block;
  }

  .menu-section.on nav ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 13rem 0px 0px 60px;
  }

  .menu-section.on li,
  .menu-section.on a {
    font-size: 8rem;
    margin: 20px 50px;
    transition-duration: 0.5s;
  }

  .menu-section.on .menu-toggle {
    position: absolute;
    right: 4.1rem;
    top: 2.9rem;
  }
  /* Serve para as animações de rotação do botão hamburger */
  .menu-section.on .menu-toggle .one {
    transform: rotate(45deg) translate(7px, 7px);
  }

  .menu-section.on .menu-toggle .two {
    opacity: 0;
  }

  .menu-section.on .menu-toggle .three {
    transform: rotate(-45deg) translate(13px, -13px);
  }
}

@media (max-width: 450px) {
  html {
    font-size: 40%;
  }

  .exams__container {
    row-gap: 7rem;
  }

  .exams__exam {
    max-width: 30rem;
  }

  .exams__exam img {
    width: 25rem;
    height: 25rem;

    border: 2.5px solid #2e4a7d;
    border-radius: 50%;
  }

  .exams__exam p {
    font-size: 2.6rem;
  }

  #contact .contact__link {
    margin: 20px 0px;
  }
}

@media (max-width: 350px) {
  html {
    font-size: 35%;
  }
}
</style>
