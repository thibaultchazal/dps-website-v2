<template>
  <v-app>
    <v-app-bar class="pa-3" style="background-color: #fff; width: 100%; box-shadow: 0 8px 16px 0 rgba(82,97,115,.18);">
      <v-toolbar-title>
        <img src="../assets/img/DPS-logo.png" style="max-height: 58px;" class="img-fluid"
          alt="DPS Digital Product Studio logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn variant="text">
          L'équipe
        </v-btn>
        <v-btn variant="text">
          Nos projets
        </v-btn>
        <v-btn variant="text" to="blog/">
          Le blog
        </v-btn>
        <v-btn variant="text" class="coolBeans">
          Contactez-nous
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-container id="homepage">
      <v-row class="title"> <!-- Hero Section -->
        <v-col cols="12" class="jumbo">
          <h1 class="Vous-maitrisez-votre text-left">
            Vous maitrisez votre <span class="metier"> métier </span> <br>
            Vous méritez sa version <span class="Digital"> digitale </span>
          </h1>
          <p class="sub-title lead  text-left">
            Nous accompagnons les entreprises dans la transformation de leurs services vers des applications digitales
          </p>
        </v-col>
      </v-row>
      <v-row> <!-- Team Section -->
        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="8">
              <p class="sup-title">L'équipe</p>
              <h2>Pourquoi nous&nbsp?</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="7" lg="8">
              <p>Notre vécu d’entrepreneurs nous a conduit à franchir les mêmes étapes que vous vivez actuellement.
                Depuis 10 ans nous concevons des parcours utilisateurs pour que nos clients puissent faire évoluer leurs
                services ou leurs prestations intellectuelles.</p>
              <p>Expérience utilisateur, design, innovation et construction d’ applications sont les challenges qui nous
                animent !</p>
              <p>Tout naturellement notre envie est de partager nos compétences pour construire votre nouveau service
                digital.</p>
              <v-row>
                <v-col cols="6">
                  <h5><b>Nicolas</b> Weiss</h5>
                  <p class="small">Je suis animé par les projets de transformation de services.<br>
                    20 ans d'expérience en tant que Directeur des opérations et de projets internationaux.<br>
                    <span class="text-grey">École Centrale de Marseille</span><br>
                    <a href="https://www.linkedin.com/in/nicolasweiss/" target="_blank"><i
                        class="fab fa-linkedin"></i></a>
                  </p>
                </v-col>
                <v-col cols="6">
                  <h5><b>Thibault</b> Chazal</h5>
                  <p class="small">J'accompagne des experts dans la digitalisation de leur cœur de métier en gardant un
                    oeil
                    sur les meilleures pratiques d’ergonomie et design.<br>
                    Entrepreneur et rédacteur pour ProductCafe et 1001Startups.<br>
                    <span class="text-grey">Grenoble INP</span><br>
                    <a href="https://www.linkedin.com/in/thibault-chazal-7a7174105/" target="_blank"><i
                        class="fab fa-linkedin"></i></a>
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="0" md="5" lg="4">
              <img class="d-none d-md-block mx-auto perfect-shadow" src="../assets/img/thibault_nicolas-dps.jpg"
                alt="Équipe DPS">
              <img class="d-md-none mx-auto perfect-shadow mb-5" src="../assets/img/thibault_nicolas-dps-horizontal.jpg"
                alt="Équipe DPS">
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <section> <!-- Main Section -->
        <v-row>
          <v-col cols="12">
            <p class="sup-title">Au jour le jour</p>
            <h2>Les beaux projets déjà réalisés</h2>
            <p>D’un cheminement pour s'élever et apprendre à élever les autres (Devenir Soi de Jacques Attali), en passant
              par une formation aux bonnes pratiques de nettoyages en partenariat avec Airbnb ou une solution pour être
              plus
              à l’aise à prendre la parole en public.</p>
            <p>Quel est leur point commun ?</p>
            <p>L'envie de faire grandir sa prestation intellectuelle (expertise, conseil, formation ou coaching) pour</p>
            <v-row>
              <v-col cols="12" md="3" class="text-center">
                <p><b>Toucher plus de monde différemment</b></p>
              </v-col>
              <v-col cols="12" md="3" class="text-center">
                <p><b>Faire des économies d'échelle</b></p>
              </v-col>
              <v-col cols="12" md="3" class="text-center">
                <p><b>Respecter ce qui est unique dans son offre</b></p>
              </v-col>
            </v-row>
            <img class="img-fluid mx-auto d-block my-4" src="../assets/img/parcours-digital-hybride.png"
              alt="Parcours digital hybride">
            <p class="subtitle text-center">Articuler vos services en une nouvelle proposition de valeurs offrant un
              cheminement cohérent, riche en interactions humaines, original et innovant.</p>
          </v-col>
        </v-row>
        <v-row id="ekoklean">
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/ekoklean-mockup.png"
              alt="Mockup plateforme de formation certifiante EkokleanOnDemand">
            <a class="mx-auto bg-white" href="https://ekokleanondemand.com/" target="_blank">ekokleanondemand.com</a>
            <img src="../assets/img/temoignage-julien-vasseur-ekoklean.png" class="img-fluid"
              alt="Témoignage de Julien Vasseur d'Ekoklean sur DPS">
          </v-col>
          <v-col cols="12" md="7">
            <img src="../assets/img/logo-ekoklean-airbnb.png" height="45px" alt="logos Ekoklean et Airbnb" class="mb-1">
            <h3 style="width: 100%;">Le parcours pour un ménage éthique et écologique</h3>
            <p>
              <b>Le contexte :</b> La problématique Airbnb était de pouvoir rassurer leurs clients en offrant un protocole
              de nettoyage « covid ». Airbnb a fait appel à une jeune société Francaise ekokleanondemand qui propose les
              services d’ekoKleaners formés et confirmés.
            </p>
            <p>
              <b>Objectif :</b> Intégrer un process fluide pour former, certifier des nettoyeurs à différentes bonnes
              pratiques: covid, petits travaux etc…
            </p>
            <p>
              <b>Le parcours :</b> Ce parcours est une séquence cohérente et fluide de capsules pédagogiques digitales
              aboutissant à des exercices pratiques de mise en actions et un certificat. Sésame pour postuler ensuite aux
              missions.
            </p>
          </v-col>
        </v-row>
        <v-row id="tie">
          <v-col cols="12" md="7">
            <img src="../assets/img/logo-talk-it-easy.png" height="25px" alt="logo Talk It Easy" class="mb-2">
            <h3 style="width: 100%;">Prenez plaisir à prendre la parole en public !</h3>
            <p>
              <b>Le contexte :</b> Une méthode développée par des acteurs professionnels reconvertis en coach pro en
              entreprise. Après des années de formation présentielle, une méthode établie pour un bon mix digital et
              humain
              à distance !
            </p>
            <p>
              <b>Objectif :</b> aider les collaborateurs en entreprise à se sentir à l’aise pour prendre la parole en
              public.
            </p>
            <p>
              <b>Le parcours :</b> Talkiteasy est une formation digitale tutorée à la prise de parole en public comportant
              trois niveaux. A la fin de chaque niveau, un coach en visio conférence conseille, corrige puis oriente le
              coaché.
            </p>
            <p><b>Utilisé par</b></p>
            <div class="row justify-content-around" style="width: 85%;">
              <div class="col-3 text-center">
                <img src="../assets/img/logo-stmicroelectronics.png" height="55px" alt="Logo St Microelectronics"
                  class="mb-2">
              </div>
              <div class="col-3 text-center">
                <img src="../assets/img/logo-cogedim.png" height="55px" alt="Logo Cogedim" class="mb-2">
              </div>
              <div class="col-3 text-center">
                <img src="../assets/img/logo-onet.png" height="55px" alt="Logo Onet" class="mb-2">
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/tie-moqup.png" alt="">
            <a class="mx-auto bg-white" href="https://talkiteasy.fr/" target="_blank">talkiteasy.fr</a>
            <img src="../assets/img/temoignage-ramid-issad-tie.png" class="img-fluid"
              alt="Témoignage de Ramid Issad sur DPS">
          </v-col>
        </v-row>
        <v-row id="small1">
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/small1-dps.png" alt="">
            <a class="mx-auto bg-white" href="https://www.sarapis.fr/" target="_blank">sarapis.fr</a>
            <img src="../assets/img/temoignage-jy-oberle-small1.png" class="img-fluid"
              alt="Témoignage de Jean-Yves Oberlé pour Small1 sur DPS">
          </v-col>
          <v-col cols="12" md="7">
            <img src="../assets/img/logo-sarapis.png" height="30px" alt="logo Sarapis" class="mb-2">
            <h3 style="width: 100%;">Libérez vos performances en maîtrisant vos risques</h3>
            <p>
              <b>Le contexte :</b> Associer des objectifs métiers et des mesures opérationnelles de sécurité afin de faire
              un pont solide entre stratégie et sécurité de l’information pour développer les performances de manière
              durable
            </p>
            <p>
              <b>Objectif :</b> Fournir un pilotage de la sécurité de l’information simple et conforme aux référentiels
              normatifs ISO 27001, ISO 27002, ISO 27004, ISO CEI 27005.
            </p>
            <p>
              <b>La solution :</b> Small1 est une plateforme digitale de pilotage de la sécurité de l’information simple
              et
              intuitive. Elle :
            </p>
            <ul class="w-100">
              <li>Structure une analyse de risques</li>
              <li>Produit des indicateurs et tableaux de bord</li>
              <li>Génère automatiquement des plans d’actions</li>
              <li>Responsabilise les managers métier et informaticiens</li>
              <li>Minimise les coûts de mise en œuvre</li>
            </ul>
            <p><b>Utilisé par</b></p>
            <div class="row justify-content-around pl-3" style="width: 85%;">
              <div class="col-3 text-center px-0">
                <img src="../assets/img/logo-rtm.png" style="max-width:100%;" alt="Logo RTM" class="">
              </div>
              <div class="col-3 text-center px-0">
                <img src="../assets/img/logo-aeroport-nice.png" style="max-width:100%;" alt="Logo Aéroport de Nice"
                  class="">
              </div>
              <div class="col-3 text-center px-0">
                <img src="../assets/img/logo-occitane_en_provence.png" style="max-width:100%;"
                  alt="Logo L'Occitane en provence" class="">
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row id="abby">
          <v-col cols="12" md="7">
            <img src="../assets/img/logo-abby.png" height="40px" alt="logo Abby" class="mb-1">
            <h3 style="width: 100%;">La plateforme de formation en parcours tutorés à distance</h3>
            <p>
              <b>Le contexte :</b> L’adhésion très relative à des formations réalistes, rarement adaptées au contexte de
              travail. Des acquis trop éphémères sans capitalisation sur l’expérience professionnelle. Un manque
              d’appropriation des connaissances qui entraîne une certaine passivité et donc un manque d’engagement.
            </p>
            <p>
              <b>Objectif :</b> Créer une méthode de formation ancrée dans la réalité professionnelle. Intégrer des temps
              pour expérimenter immédiatement et transposer au mieux les connaissances dans le quotidien professionnel.
            </p>
            <p>
              <b>Le parcours :</b> La solution accorde les 3 objectifs: la juste dose d’apports théoriques, les
              interactions
              humaines par l’accompagnement et les expérimentations réelles.
            </p>
            <p><b>Utilisé par</b></p>
            <div class="row pl-5" style="width: 85%;">
              <div class="col-6 col-md-3 text-center px-0">
                <img src="../assets/img/logo-pfizer.png" style="max-width:100%;" alt="Logo Pfizer" class="">
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/abby-mockup.png"
              alt="Mockup de la plateforme de formation hybride Abby">
            <a class="mx-auto bg-white" href="https://www.abbyformation.com/" target="_blank">www.abbyformation.com</a>
            <img src="../assets/img/temoignage-anna-suchodolwsky-abby.png" class="img-fluid"
              alt="Témoignage d'Anna Suchodolwsky d'Abby sur DPS">
          </v-col>
        </v-row>
        <v-row id="big2biz">
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/big2biz-mockup.png" alt="Mockup de la plateforme Big2Biz">
            <img src="../assets/img/temoignage-jy-oberle-big2biz.png" class="img-fluid"
              alt="Témoignage de Jean-Yves Oberlé pour Big2Biz sur DPS">
          </v-col>
          <v-col cols="12" md="7">
            <img src="../assets/img/logo-big2biz.png" height="40px" alt="logo Big2Biz" class="mb-1">
            <h3 style="width: 100%;">Une méthode de pilotage des risques cyber</h3>
            <p>
              <b>Le contexte :</b> Les risques cyber explosent non seulement pour les grandes entreprises mais aussi pour
              les ETI et PME. Il n’existe aucune méthode de gouvernance pour des non experts à ce jour.
            </p>
            <p>
              <b>Objectif :</b> Fournir aux PME une méthode de gouvernance pour se protéger des risques cyber durablement
              dans le temps.
            </p>
            <p>
              <b>La solution :</b> Un parcours pour mesurer sa cyber sensibilité, effectuer un diagnostic des risques de
              son
              entreprise pour finalement bâtir des scenarii de risques et un plan d'actions associé.
              La société Sarapis spécialisée depuis 25 ans dans la gouvernance en matière de cybersécurité (Réseaux de
              transports, Aéroports, Industrie et Banque) a développé un parcours accessible aux PME. Bientôt une
              labellisation possible: C'est big2biz.
            </p>
          </v-col>
        </v-row>
        <v-row id="kotchi">
          <v-col cols="12" md="7">
            <img src="../assets/img/logo-kotchi.png" height="30px" alt="logo Kotchi" class="mb-2">
            <h3 style="width: 100%;">L’approche hybride du coaching professionnel</h3>
            <p>
              <b>Le contexte :</b> Répondre à un besoin de développement accompagné des collaborateurs de manière nouvelle
              et hybride. Kotchi est un nouveau projet entrepreneurial porté par 3 passionnés de l’accompagnement
              managérial
              et du développement personnel.
            </p>
            <p>
              <b>Objectif :</b> Créer une nouvelle expérience de coaching amélioré sur les sujets “Développer sa confiance
              et son estime de soi” et “Donner envie et adopter un leadership inspirant”.
            </p>
            <p>
              <b>Le parcours :</b> Kotchi est une approche hybride du coaching professionnel. Le coaché alterne des
              séances
              de coaching en visio et du coaching via son espace personnel Kotchi-online (des exercices, des
              expérimentations en autonomie, des échanges dans la plateforme avec votre coach, l’accès à une bibliothèque
              de
              ressources). Avec Kotchi, le coaché vit une expérience d’accompagnement thématique flexible, inspirante et
              transformante.
            </p>
          </v-col>
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/kotchi-mockup.png" alt="">
            <a class="mx-auto bg-white" href="https://online.kotchi.fr/" target="_blank">online.kotchi.fr</a>
          </v-col>
        </v-row>
        <v-row id="dds">
          <v-col cols="12" md="5">
            <img class="img-fluid" src="../assets/img/devenirsoi-mockup.png" alt="">
            <a class="mx-auto bg-white" href="https://diagnostiquedevenirsoi.com/"
              target="_blank">diagnostiquedevenirsoi.com</a>
            <img src="../assets/img/temoignage-caroline-couronne-devenirsoi.png" class="img-fluid"
              alt="Témoignage de Caroline Couronne de Devenir Soi sur DPS">
          </v-col>
          <v-col cols="12" md="7">
            <v-row>
              <v-col cols="12" md="9">
                <h3 style="width: 100%;">Piloter sa vie avec Devenir Soi™</h3>
                <p>
                  <b>Le contexte :</b> Jacques Attali, en 2015, vient de publier le livre Devenir Soi™ en 2015. Ce livre
                  met
                  en exergue qu’il est temps pour chacun de se prendre en main, sans attendre indéfiniment des solutions
                  miraculeuses. La Méthode Devenir Soi™ a pour but de soutenir le développement d'une méthode universelle.
                  Elle est le fruit de ce parcours, et de ces travaux.
                </p>
              </v-col>
              <v-col cols="12" md="3">
                <img src="../assets/img/devenir_soi.jpg" width="100%" alt="Livre Devenir Soi de Jacques Attali"
                  class="mb-2">
              </v-col>
            </v-row>
            <p class="pl-2">
              <b>Objectif :</b> Aider les gens en entreprise ou ailleurs à ne plus subir les évènements, à mettre en place
              les conditions nécessaires pour que leur projet de vie s'accomplisse en maîtrisant les finances, les
              formations, les besoins. Agir au lieu de subir.
            </p>
            <p class="pl-2">
              <b>La solution :</b> La Méthode Devenir Soi™ est un ensemble d'outils puissants mis à disposition des
              thérapeutes, des directeurs RH, des managers, et de toutes les personnes en charge de l'accompagnement, afin
              d'aider à la transformation individuelle de façon structurée, cartésienne, rationnelle et mesurable tout en
              utilisant des ingrédients puissants et universelles de développement de Soi.
            </p>
          </v-col>
        </v-row>
      </section>
      <v-row>
        <v-col cols="12">
          <p class="sup-title">Nos compétences</p>
          <h2>La tech que l'on va faire pour vous&nbsp!</h2>
        </v-col>
        <v-col cols="12" md="4">
          <img class="img-fluid ml-auto mr-auto p-3" src="../assets/img/design.svg" alt="UI et UX Design" />
          <p class="mb-0 bg-white">DESIGN</p>
          <p class="info small text-grey bg-white">Une approche “design thinking” nous permet de réaliser une expérience
            centrée sur l’utilisateur, tout en recueillant ses feedbacks pour évoluer.</p>
        </v-col>
        <v-col cols="12" md="4">
          <img class="img-fluid ml-auto mr-auto p-3" src="../assets/img/coding.svg" alt="Développement javascript" />
          <p class="mb-0 bg-white">DÉVELOPPEMENT</p>
          <p class="info small text-grey bg-white">Nous développons sur des technologies pérennes (JS, PHP, HTML, SASS,
            SQL,
            NoSQL,…) pour s’assurer que votre plateforme restera évolutive.</p>
        </v-col>
        <v-col cols="12" md="4">
          <img class="img-fluid ml-auto mr-auto p-3" src="../assets/img/responsive.svg" alt="Développement responsive" />
          <p class="mb-0 bg-white">DESKTOP & MOBILE</p>
          <p class="info small text-grey bg-white">Selon vos besoins, votre solution est développée sur desktop, mobile ou
            les deux !</p>
        </v-col>
        <v-col cols="12" md="4">
          <img class="img-fluid ml-auto mr-auto p-3" src="../assets/img/seo.svg" alt="Référencement et SEO" />
          <p class="mb-0 bg-white">RÉFÉRENCEMENT</p>
          <p class="info small text-grey bg-white">La mise en place de techniques d’optimisation de référencement naturel
            -
            SEO - vous permettra de vous positionner dans les premiers résultats des moteurs de recherche.</p>
        </v-col>
        <v-col cols="12" md="4">
          <img class="img-fluid ml-auto mr-auto p-3" src="../assets/img/analyse.svg"
            alt="Analyse de donnée et analytics" />
          <p class="mb-0 bg-white">ANALYSE</p>
          <p class="info small text-grey bg-white">Toutes vos données peuvent être analysées statistiquement. Les rapports
            de tendances apportent encore de la valeur pour vos clients.</p>
        </v-col>
        <v-col cols="12" md="4">
          <img class="img-fluid ml-auto mr-auto p-3" src="../assets/img/connection.svg" alt="Évolution" />
          <p class="mb-0 bg-white">ÉVOLUTIONS</p>
          <p class="info small text-grey bg-white">Nous avons à coeur de suivre nos clients dans le temps et de faire
            évoluer ensemble leur plateforme.</p>
        </v-col>
      </v-row>
    </v-container>
      <v-row class="mt-5 px-10 background-color-primary text-center text-white">
        <v-col cols="12" md="4" class="d-flex flex-column">
          <div class="align-self-center text-center text-md-left">
            <img src="../assets/img/logo.png" class="img-fluid w-5em" alt="DPS logo">
            <p class="text-center text-md-left pt-3 pt-md-0">
              Pour nous joindre<br>
              <a class="inherit" href="mailto:contact@digitalproductstudio.fr">contact@digitalproductstudio.fr</a><br>
              06 26 26 36 89<br>
              <a href="https://www.linkedin.com/company/digital-product-studio/" target="_blank"><i
                  class="fab fa-linkedin"></i></a>
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <p class="text-center">
            <b>Nos coins favoris :</b><br>
            Paris <br>
            Aix en Provence <br>
            Marseille <br>
            Montpellier <br>
            Grenoble <br>
            Lyon
          </p>
        </v-col>
        <v-col cols="12" md="4" class="d-flex flex-column">
          <div class="align-self-center text-center text-md-right">
            <a class="nav-link btn whiteCoolBeans" href="" data-toggle="modal"
              data-target="#exampleModalCenter">Contactez-nous</a>
            <p class="text-center text-md-right mt-1">
              Digital Product Studio<br>
              SAS au capital de 5000€<br>
            </p>
          </div>
        </v-col>
      </v-row>
  </v-app>
</template>

<script setup lang="ts">
const title = "Digital Product Studio"
const description = "DPS accompagne les entreprises qui souhaite croitre en ajoutant une solution digitale à leur offre de service."

useHead({
  title,
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: 'description', content: description }
  ],
})
useServerSeoMeta({
  ogTitle: title,
  ogDescription: description,
  ogImage: "/DPS-logo.webp",
  twitterCard: 'summary_large_image',
})
</script>
<style scoped>
h1 {
  color: #352E5F;
}

h2 {
  position: relative;
  color: #352E5F;
  font-weight: 400;
}

h2:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6em;
  height: 0;
  border-top: 2px solid #C1932B;
  z-index: -1;
}

p {
  font-weight: 300;
}

a {
  color: inherit;
}

a:hover {
  font-size: bold;
  color: #C1932B;
  text-decoration: underline;
  text-decoration-color: #C1932B;
}

span {
  font-size: inherit;
  font-style: inherit;
  color: inherit;
  font-weight: inherit;
}

small,
.small {
  font-weight: 100;
}

.text-grey {
  color: #716F78;
}

.bold {
  font-weight: 800;
}

.inherit {
  font-size: inherit;
  font-style: inherit;
  color: inherit;
  font-weight: inherit;
}

html,
body {
  font-size: 14px !important;
  font-family: 'Ubuntu';
}

h1,
.h1 {
  font-size: 1.602em;
  font-weight: 600;
}

h2 {
  font-size: 1.424em;
}

h3 {
  font-size: 1.266em;
}

h4 {
  font-size: 1.125em;
}

h5 {
  font-size: 0.889em;
}

h6 {
  font-size: 0.79em;
}

.lead {
  font-size: 1.2rem;
}

.contact-infos {
  font-size: 1rem;
}

@media (min-width: 768px) {

  html,
  body {
    font-size: 16px !important;
  }

  h1,
  .h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.953em;
  }

  h3 {
    font-size: 1.563em;
  }

  h4 {
    font-size: 1.25em;
  }

  .lead {
    font-size: 1.6rem;
  }

  .contact-infos {
    font-size: 2rem;
  }
}

@media (min-width: 992px) {

  html,
  body {
    font-size: 16px !important;
  }

  h1,
  .h1 {
    font-size: 3rem;
  }

  .lead {
    font-size: 2rem;
  }

  .contact-infos {
    font-size: 1.5rem;
  }
}

@media (min-width: 1500px) {

  html,
  body {
    font-size: 22px !important;
  }

  .contact-infos {
    font-size: 2rem;
  }
}

.yellow-underline {
  text-decoration: underline;
  text-decoration-color: #C1932B;
}

.color-primary {
  color: #352E5F;
}

.color-second {
  color: #C1932B;
}

.color-third {
  color: #C1932B;
}

.color-white {
  color: white;
}

.background-color-primary {
  background-color: #352E5F;
}

.pt-10 {
  padding-top: 5rem !important;
}

.py-10 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

.my-10 {
  margin-top: 8rem !important;
  margin-bottom: 8rem !important;
}

.mt-20 {
  margin-top: 10rem !important;
}

.mb-20 {
  margin-bottom: 10rem !important;
}

.w-5em {
  width: 5em;
}

.btn-primary {
  background-color: #352E5F;
}

.btn-secondary {
  background-color: #C1932B;
}

.btn-secondary:hover {
  background-color: #C1932B;
  border-color: #C1932B;
}

.navbar-brand {
  margin-right: 0;
}

@media (min-width: 575px) {
  .nav-item {
    display: flex;
  }
}

.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {

  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {

  .container,
  .container-sm,
  .container-md {
    max-width: 720px;
  }
}

@media (min-width: 992px) {

  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {

  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1140px;
  }
}

.large-gutters {
  padding-right: 30px !important;
  padding-left: 30px !important;
}

.row>.col,
.row>[class*="col-"] {
  padding-right: 10px;
  padding-left: 10px;
}

.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: #FFF;
  -webkit-box-shadow: 0 8px 16px 0 rgba(82, 97, 115, 0.18);
  -moz-box-shadow: 0 8px 16px 0 rgba(82, 97, 115, 0.18);
  box-shadow: 0 8px 16px 0 rgba(82, 97, 115, 0.18);
}

.coolBeans {
  color: transparent !important;
  font-size: 1rem;
  letter-spacing: 4px;
  border: 3px solid transparent;
  border-radius: 0;
  border-color: #C1932B;
  border-image-slice: 1;
  background: #C1932B;
  -webkit-background-clip: text;
  text-fill-color: transparent !important;
  transition: all 0.8s ease;
}

.coolBeans:hover {
  background: #C1932B;
  transition: all 0.8s ease;
  color: #fff !important;
}

.whiteCoolBeans {
  color: transparent !important;
  font-size: 1rem;
  letter-spacing: 4px;
  border: 3px solid transparent;
  border-radius: 0;
  border-color: white;
  border-image-slice: 1;
  background: white;
  -webkit-background-clip: text;
  text-fill-color: transparent !important;
  transition: all 0.8s ease;
}

.whiteCoolBeans:hover {
  background: white;
  transition: all 0.8s ease;
  color: #352E5F !important;
}

.contact-button {
  margin-top: 3px;
}

#homepage {
  background-color: #fff;
}

.jumbo {
  margin-top: 100px;
  margin-bottom: 8%;
}

.jumbo .Vous-maitrisez-votre .metier {
  color: #C1932B;
}

.jumbo .Vous-maitrisez-votre .Digital {
  padding-left: 5px;
  padding-right: 10px;
  color: #ffffff;
  background-color: #C1932B;
}

.title {
  margin-top: 15vh;
}

@media (min-width: 768px) {
  .title {
    margin-top: 30vh;
  }
}

.sub-title {
  letter-spacing: .5px;
  margin-top: 2%;
  color: #716F78;
  font-weight: 300;
}

.sup-title {
  letter-spacing: .5px;
  margin-bottom: 0;
  color: #716F78;
  font-weight: 500;
}

#nous:after {
  content: url("../assets/img/miniDots.png");
  position: absolute;
  right: -3px;
  top: -1em;
  z-index: -1;
}

#nous:before {
  content: url("../assets/img/dots.png");
  position: absolute;
  left: -20px;
  bottom: 0;
  z-index: -1;
}

.temoignage {
  font-weight: 100;
  font-style: italic;
  letter-spacing: .5px;
}

#small1 {
  position: relative;
}

#small1:after {
  content: url("../assets/img/small1-dots.png");
  position: absolute;
  right: 45vw;
  top: 2em;
  z-index: -1;
  overflow: hidden;
  height: 88%;
}

#tie {
  position: relative;
}

#tie:after {
  content: url("../assets/img/karism-dots.png");
  position: absolute;
  left: 45vw;
  top: 2em;
  z-index: -1;
  overflow: hidden;
  height: 88%;
}

#abby {
  position: relative;
}

#abby:after {
  content: url("../assets/img/dds-dots.png");
  position: absolute;
  left: 25vw;
  top: 4em;
  z-index: -1;
  overflow: hidden;
  height: 88%;
}

#kotchi {
  position: relative;
}

#kotchi:after {
  content: url("../assets/img/karism-dots.png");
  position: absolute;
  left: 25vw;
  top: 6em;
  z-index: -1;
  overflow: hidden;
  height: 88%;
}

#dds {
  position: relative;
}

#dds:after {
  content: url("../assets/img/dds-dots.png");
  position: absolute;
  right: 43vw;
  top: 4em;
  z-index: -1;
  overflow: hidden;
  height: 80%;
}

#design:after {
  content: url("../assets/img/largeDots-diamond-gold.png");
  position: absolute;
  right: -150px;
  bottom: -35px;
  z-index: -1;
}

#analyse:after {
  content: url("../assets/img/largeDots-diamond-gold.png");
  position: absolute;
  right: -150px;
  top: -35px;
  z-index: -1;
}

@media (min-width: 768px) {
  #geolocation:after {
    content: url("../assets/img/dots-rectangle-white.png");
    position: absolute;
    bottom: -40%;
    z-index: 1;
  }
}

.main-section .The-monkey-rope-is {
  font-size: 1.3rem;
  font-weight: 100;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.main-section .keep-aspect-ratio {
  flex: 0 1 auto;
  height: 100%;
}

.main-section .hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.main-section .hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.main-section .hovereffect:hover .overlay {
  background-image: linear-gradient(to top, #232731, rgba(82, 97, 115, 0));
}

.main-section .hovereffect img {
  display: block;
  position: relative;
}

.main-section .hovereffect p.info {
  position: absolute;
  bottom: 0;
  padding: 7px 14px;
  color: #fff;
  background-color: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  font-weight: normal;
  margin: 7px;
}

.main-section .hovereffect:hover p.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

#contact {
  margin-top: 5rem;
}

#contact textarea {
  height: 10rem;
}

footer {
  background-color: #204d73;
  color: white;
}

.perfect-shadow {
  box-shadow: -1px 24px 32px 0 #D6D6D6;
}
</style>