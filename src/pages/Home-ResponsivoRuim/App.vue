<template>
  <div id="app">
    <configuracoesPrincipais />
    <header>
      <img
        @click="SUS = false"
        v-show="SUS == true"
        src="https://media.discordapp.net/attachments/709419992738824226/777328351735840789/image0.gif"
        alt="n liga n fica safe"
        id="irrelevante"
      />

      <img
        @click="SUS = true"
        src="@/assets/DuckHealthLogo.png"
        alt="duckHealthLogo"
        id="logoHeader"
      />
      <nav>
        <a href="#intro" class="navLink">Inicio</a>
        <a href="#about" class="navLink">Sobre</a>
        <a href="#exams" class="navLink">Exames</a>
        <a href="#formContact" class="navLink">Contato</a>
      </nav>
    </header>
    <section id="intro">
      <div id="boxTitle">
        <h1 id="title">Duck Health</h1>
        <br />
        <p class="priParagraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
          nobis, voluptates commodi similique non cumque quod cum vel possimus
          veniam illum impedit, quaerat harum quia recusandae. Voluptatem omnis
          magni porro? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aut impedit non, odit velit ducimus suscipit.
        </p>
        <button onclick="window.location.href='login';">
          <img src="@/assets/paperIcon.png" alt="paperIcon" /> Acessar Laudos
        </button>
      </div>
      <div id="imgTitle">
        <img src="@/assets/bg-banner.png" alt="room" />
      </div>
      <img id="circle1" src="@/assets/circulo.svg" alt="circle" />
    </section>
    <section id="about">
      <div>
        <img id="imgAbout" src="@/assets/doctor.jpg" alt="doctorPatient" />
      </div>
      <div id="boxSubTitle">
        <h2>Sobre Nós</h2>
        <p id="secParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, sapien id suscipit suscipit, urna ex sodales ante, nec
          convallis nibh nisi a nibh. Aenean rutrum dui id dui varius, et
          consequat risus congue. Pellentesque maximus eu arcu a maximus. Cras
          ac diam pharetra, tincidunt nunc ac, mattis dolor. Donec ullamcorper
          arcu et vestibulum tincidunt. Mauris finibus lacus vitae accumsan
          euismod. Nullam ut eros sit amet sapien malesuada iaculis condimentum
          scelerisque elit. Maecenas non ipsum nec massa rutrum viverra. Nulla
          facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, sapien id suscipit suscipit, urna ex sodales ante, nec
          convallis nibh nisi a nibh. Aenean rutrum dui id dui varius, et
          consequat risus congue. Pellentesque maximus eu arcu a maximus. Cras
          ac diam pharetra, tincidunt nunc ac, mattis dolor.
        </p>
      </div>
      <img id="circle2" src="@/assets/circulo.svg" alt="circle" />
    </section>
    <section id="exams">
      <h3>Exames</h3>
      <div id="ex1" class="exam">
        <div><img src="@/assets/doctor.jpg" alt="img1" class="imgExam" /></div>
        <p class="trdParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin,
        </p>
      </div>
      <div id="ex2" class="exam">
        <img src="@/assets/doctor2.jpg" alt="img2" class="imgExam" />
        <p class="trdParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin,
        </p>
      </div>
      <div id="ex3" class="exam">
        <img src="@/assets/doctor3.jpg" alt="img3" class="imgExam" />
        <p class="trdParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin,
        </p>
      </div>
      <div id="ex4" class="exam">
        <img src="@/assets/doctor2.jpg" alt="img4" class="imgExam" />
        <p class="trdParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin,
        </p>
      </div>
      <div id="ex5" class="exam">
        <img src="@/assets/doctor.jpg" alt="img5" class="imgExam" />
        <p class="trdParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin,
        </p>
      </div>
    </section>
    <section id="address">
      <div id="info">
        <h2>Endereço</h2>
        <div class="subInfo">
          <img src="@/assets/buildingIcon.png" alt="buildingIcon" />
          <p class="fourParagraph">
            Rua dos Doidões, Bairro Muito Doido, N° 127
          </p>
        </div>
        <div class="subInfo">
          <img src="@/assets/airCondIcon.png" alt="airCondIcon" />
          <p class="fourParagraph">
            Ambiente climatizado, para o seu conforto ao atende-lo!
          </p>
        </div>
        <div class="subInfo">
          <img src="@/assets/ballIcon.png" alt="ballIcon" />
          <p class="fourParagraph">
            Sala com brinquedos e passa-tempo para as crianças!
          </p>
        </div>
      </div>
      <img src="@/assets/maps.png" alt="map" />
      <img id="circle3" src="@/assets/circulo.svg" alt="circle" />
    </section>
    <section id="formContact">
      <form id="form" method="POST" action="">
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
        <h2>Contatos</h2>
        <div class="contactLink">
          <img src="@/assets/phoneIcon.png" alt="phoneIcon" />
          <a href="tel:+556792191806">+556792191806</a>
          <span> ou </span>
          <a href="tel:+556791186869">+556791186869</a>
        </div>
        <div class="contactLink">
          <img src="@/assets/instagramIcon.png" alt="instagramIcon" />
          <a
            href="https://instagram.com/megaufms?utm_medium=copy_link"
            target="_blank"
            >@Duck_Health</a
          >
        </div>
        <div class="contactLink">
          <img src="@/assets/facebookIcon.png" alt="facebookIcon" />
          <a href="https://www.facebook.com/megaufms/" target="_blank"
            >Duck Health</a
          >
        </div>
        <div class="contactLink">
          <img src="@/assets/linkedinIcon.png" alt="linkedinIcon" />
          <a href="https://www.linkedin.com/company/megajr/" target="_blank"
            >Duck Health</a
          >
        </div>
      </div>
    </section>
    <footer>
      <img
        @click="SUS2 = true"
        src="@/assets/DuckHealthLogo.png"
        alt="duckHealthLogoText"
        id="footerLogo"
      />
      <img
        @click="SUS2 = false"
        v-show="SUS2 == true"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F002%2F111%2F321%2F98a.gif&f=1&nofb=1"
        alt="n liga n fica safe"
        id="irrelevante"
      />
      <h3>Duck Health</h3>
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
    return {
      SUS: false,
      SUS2: false
    }
  }
}
</script>

<style>
/* Configurações gerais (fora as configuraçõesPrincipais do outro componente) */

body {
  overflow-x: hidden;
}

#intro,
header,
footer {
  background: #15c3d6;
}

header,
footer,
section {
  display: flex;
}

p {
  font-size: 20px;
}

img {
  object-fit: cover;
}

h2 {
  font-weight: 800;
  font-size: 48px;
}
a {
  text-decoration: none;
}

/* animacoes de button, a, inputs, textarea */
a:hover {
  transition: 0.3s;
  opacity: 0.7;
}
button:hover {
  transition: 0.3s;
  opacity: 0.7;
}
input:hover {
  transition: 0.3s;
  opacity: 0.9;
}
textarea:hover {
  transition: 0.3s;
  opacity: 0.7;
}

/* Parte do cabeçalho */
/* Logo */
header {
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
#logoHeader {
  height: 90px;
  width: auto;
  background: #2e4a7d;
  border-radius: 10px;
  margin: 15px 100px 0px 130px;
}

/* Links */
nav {
  margin: 40px 130px 0px 0px;
}
.navLink {
  margin-left: 35px;
  color: white;
  font-weight: 700;
  font-size: 28px;
}

/* Parte do inicio */
#intro {
  border-radius: 0px 0px 0px 150px;
}

/* title + p + button */
#boxTitle {
  margin: 120px 50px 50px 120px;
}
#title {
  color: #ffd666;
  font-weight: 800;
  font-size: 64px;
}
.priParagraph {
  font-size: 24px;
  color: white;
}
#intro button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border-radius: 30px;
  margin: 30px;
  padding: 15px 0px;
  background: #2e4a7d;
  color: white;
  width: 350px;
}
#intro button img {
  margin-right: 15px;
}

/* img1 */
#imgTitle img {
  width: 1000px;
  height: 100%;
  margin-top: -60px;
  position: relative;
  z-index: 1;
}

/* circulo1 */
#circle1 {
  position: absolute;
  right: -250px;
  top: -140px;
  z-index: 0;
  height: 600px;
}

/* Parte do sobre nos */
#about {
  justify-content: space-evenly;
  min-width: 1300px;
}
#about div {
  margin: 100px 20px;
}

/* img2 */
#imgAbout {
  width: 800px;
  height: 100%;
  border-radius: 25px;
  position: relative;
  z-index: 1;
}

/* subtitle + p */
#boxSubTitle {
  min-width: 400px;
  max-width: 600px;
}
#secParagraph {
  margin-top: 30px;
  color: rgba(46, 74, 125, 0.8);
}

/* circulo2 */
#circle2 {
  position: absolute;
  z-index: -1;
  top: 400px;
  left: 30%;
  height: 800px;
}

/* Parte dos exames */
#exams {
  background: #ffd666;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 0px 222px 0px 220px;
  text-align: center;
}
/* title */
h3 {
  margin: 30px 80px 40px;
  font-size: 38px;
  font-weight: 800;
  width: 100vw;
}

/* exames */
.exam {
  display: block;
  max-width: 200px;
  margin: 0px 60px 70px 60px;
}
.imgExam {
  width: 150px;
  height: 150px;
  border: 2.5px solid #2e4a7d;
  border-radius: 50%;
}

/* Parte do Endereco */
#address {
  justify-content: space-around;
  margin-top: 30px;
  min-width: 1200px;
}

/* Info do Endereco */
#address h2 {
  margin: 40px 0px;
}
.subInfo {
  margin: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.fourParagraph {
  margin-left: 15px;
  font-size: 20px;
  font-weight: 800;
}

/* circulo3 */
#circle3 {
  position: absolute;
  z-index: -1;
  top: 1700px;
  left: -220px;
  height: 500px;
}

/* Parte do Contato */
#formContact {
  justify-content: space-between;
  margin: 30px 20px;
}

/* Forms*/
#form {
  display: flex;
  flex-wrap: wrap;
  margin-right: 100px;
}
form input,
#comentar {
  height: calc(40px + 2vw);
  width: auto;
  border-radius: 16px;
  margin: 8px;
  font-size: 24px;
  font-weight: 800;
  vertical-align: super;
  border-style: none;
  padding-left: 10px;
}

#nome,
#email {
  flex-grow: 1;
  min-width: 350px;
}
#comentar {
  flex-grow: 2;
  height: 150px;
  min-width: 700px;
  padding-bottom: 90px;
}
#enviar {
  flex-grow: 2;
  min-width: 700px;
  color: white;
  background: #2e4a7d;
}

/* Contato*/
#contact {
  margin-right: 100px;
}
#contact h2 {
  text-align: center;
}
#contact a {
  font-size: 24px;
  font-weight: 800;
  margin: 0px 15px;
}
.contactLink {
  margin: 25px 0px;
  align-items: center;
  display: flex;
  align-items: center;
}

/* Rodapé */
footer {
  border-radius: 0px 80px 0px 0px;
  display: flex;
  align-items: center;
}
footer h3 {
  color: white;
  font-weight: 700;
}
#footerLogo {
  width: 150px;
  margin: 0px -50px 0px 30px;
}
#irrelevante {
  position: fixed;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
