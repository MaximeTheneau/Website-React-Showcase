(self.webpackChunkreact_model=self.webpackChunkreact_model||[]).push([[179],{2558:(e,s,r)=>{"use strict";var t=r(745),i=r(5998),n=r(9655),a=r(9250),l=r(5893);const c=function(){return(0,l.jsxs)("footer",{className:"footer",children:[(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"footer-link",children:(0,l.jsx)(n.OL,{to:"/",children:"Accueil"})}),(0,l.jsx)("li",{className:"footer-link",children:(0,l.jsx)(n.OL,{to:"/services",children:"Services"})}),(0,l.jsx)("li",{className:"footer-link",children:(0,l.jsx)(n.OL,{to:"/contact",children:"Contact"})}),(0,l.jsx)("li",{className:"footer-link",children:(0,l.jsx)(n.OL,{to:"/mentions-legal",children:"Mentions légales"})})]}),(0,l.jsxs)("div",{className:"footer-author",children:["Site réalisé par",(0,l.jsx)("a",{href:"https://github.com/MaximeTheneau",target:"blank",className:"footer-author_signature",name:"lien vers le github de Maxime Theneau",children:(0,l.jsx)("i",{className:"theneau-maxime"})})]})]})};var o="TOGGLE_NAVBAR";function u(){return{type:o}}var d="TOGGLE_NAVBAR_SUBTITLE";function m(){return{type:d}}var p="IMG_STICKY";function h(){return{type:p}}var j="IMG_STICKY_FALSE";function v(){return{type:j}}const x=r.p+"image/illustration-jardin-taupe-small.webp",g=r.p+"image/illustration-jardin-taupe-middle.webp",b=r.p+"image/illustration-jardin-taupe-large.webp",f=r.p+"image/illustration-jardin-taupe.svg",N=r.p+"image/logo-une-taupe-chez-vous.svg",y=r.p+"image/logo-une-taupe-chez-vous.webp";const O=function(){var e=(0,i.I0)(),s=(0,i.v9)((function(e){return e.header.toogleNavbar})),r=(0,i.v9)((function(e){return e.header.imgSticky})),t=(0,i.v9)((function(e){return e.header.toogleNavbarSubtitle})),a=function(){e(m()),e(u())};return(0,l.jsxs)(l.Fragment,{children:[r?(0,l.jsxs)("div",{className:"header-sticky",children:[(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:x,media:"(max-width: 550px)",type:"image/webp"}),(0,l.jsx)("source",{srcSet:g,media:"(max-width: 1024px)",type:"image/webp"}),(0,l.jsx)("source",{srcSet:b,media:"(max-width: 2000px)",type:"image/webp"}),(0,l.jsx)("img",{className:"header-sticky_img",src:f,alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"illustration Une taupe chez vous",width:"100%",height:"100%"})]}),(0,l.jsx)("div",{className:"header-sticky-content",onClick:function(){return e(v())},children:(0,l.jsx)("a",{href:"#bienvenue",name:"icon scroll",children:(0,l.jsx)("i",{className:"icon-angle-90"})})})]}):"",(0,l.jsx)("header",{className:"header",id:"bienvenue",children:s?(0,l.jsxs)("div",{className:"header-navbar-toggle",children:[(0,l.jsx)("div",{className:"header-logo",children:(0,l.jsx)(n.OL,{to:"/",onClick:function(){e(u()),e(v())},children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:y,type:"image/webp"}),(0,l.jsx)("img",{src:N,alt:"Logo Une Taupe Chez Vous",title:"Logo Une taupe chez vous",className:"logo",width:"100%",height:"100%"})]})})}),(0,l.jsx)("div",{className:"header-button_close",children:(0,l.jsx)("button",{type:"button",id:"button_nav",title:"Fermer le menu",onClick:function(){e(u()),e(v())},children:(0,l.jsx)("i",{className:"icon-navbar"})})})]}):(0,l.jsxs)("nav",{className:"navbar",children:[(0,l.jsxs)("div",{className:"header-navbar-toggle",children:[(0,l.jsx)("div",{className:"header-logo",children:(0,l.jsx)(n.OL,{to:"/",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:y,type:"image/webp"}),(0,l.jsx)("img",{src:N,alt:"Logo Une Taupe Chez Vous",title:"Logo Une taupe chez vous"})]})})}),(0,l.jsx)("div",{className:"header-button_close",children:(0,l.jsx)("button",{type:"button",onClick:function(){return e(u())},children:(0,l.jsx)("i",{className:"icon-x"})})})]}),(0,l.jsxs)("ul",{className:"header-navbar",children:[(0,l.jsx)(n.OL,{to:"/",onClick:function(){return e(u())},children:(0,l.jsx)("li",{className:"header-navbar-item",children:"Accueil"})}),(0,l.jsxs)("li",{children:[(0,l.jsxs)("div",{className:"header-navbar-item_subtitle",onClick:function(){return e(m())},children:["Services",t?(0,l.jsx)("i",{className:"icon-angle"}):(0,l.jsx)("i",{className:"icon-angle-90"})]}),t?"":(0,l.jsxs)("ul",{className:"header-navbar-subitem",children:[(0,l.jsx)(n.OL,{to:"/services/nuisibles/taupe",onClick:a,children:(0,l.jsx)("li",{className:"header-navbar-subtitle-item",children:"Taupe"})}),(0,l.jsx)(n.OL,{to:"/services/nuisibles/fouine",onClick:a,children:(0,l.jsx)("li",{className:"header-navbar-subtitle-item",children:"Fouine"})}),(0,l.jsx)(n.OL,{to:"/services/nuisibles/Ragondin",onClick:a,children:(0,l.jsx)("li",{className:"header-navbar-subtitle-item",children:"Ragondin"})})]})]}),(0,l.jsx)(n.OL,{to:"/contact",onClick:function(){return e(u())},children:(0,l.jsx)("li",{className:"header-navbar-item",children:"Contact"})})]})]})})]})};r(8309);var w=r(5365),_="TOGGLE_MODAL";function S(){return{type:_}}var E="TOGGLE_MODAL_ERROR";function I(){return{type:E}}var k="NUMBER_IMG";var C="NUMBER_IMG2";var q="CONTACT_FORM";function L(e,s){return{type:q,value:e,field:s}}var U=r(9788);const T=r.p+"image/illustration-taupe-vacances.svg";const M=function(){var e=(0,i.I0)(),s=(0,i.v9)((function(e){return e.contact.name})),r=(0,i.v9)((function(e){return e.contact.email})),t=(0,i.v9)((function(e){return e.contact.message}));return(0,l.jsxs)("div",{className:"contact",children:[(0,l.jsx)("div",{className:"contact-img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:U,type:"image/webp"}),(0,l.jsx)("img",{src:T,alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"illustration Une taupe chez vous"})]})}),(0,l.jsx)("h1",{children:"Contact"}),(0,l.jsx)("h2",{children:"Formulaire"}),(0,l.jsxs)("form",{className:"contact-form",onSubmit:function(s){s.preventDefault(),console.log(s.target),w.ZP.sendForm("service_j890q4l","template_xd1r1j3",s.target,"1O8Ob4TeUeGNU_xaz").then((function(s){e(S())}),(function(e){console.log(e.text)}))},children:[(0,l.jsxs)("label",{htmlFor:"Name",children:[(0,l.jsx)("div",{className:"contact-form_title",children:"Nom / Prénom*"}),(0,l.jsx)("input",{type:"text",className:"contact-form-input",name:"user_name",value:s,onChange:function(s){return e(L(s.target.value,"name"))},required:!0})]}),(0,l.jsxs)("label",{htmlFor:"email",children:[(0,l.jsx)("div",{className:"contact-form_title",children:"Email*"}),(0,l.jsx)("input",{name:"user_email",type:"email",value:r,className:"contact-form-input",onChange:function(s){return e(L(s.target.value,"email"))},required:!0})]}),(0,l.jsxs)("label",{htmlFor:"message",children:[(0,l.jsx)("div",{className:"contact-form_title",children:"Message*"}),(0,l.jsx)("textarea",{name:"message",className:"contact-form-input",value:t,onChange:function(s){return e(L(s.target.value,"message"))},required:!0})]}),(0,l.jsxs)("div",{className:"contact-form_button",children:[(0,l.jsxs)("button",{type:"submit",children:[(0,l.jsx)("i",{className:"icon-submit",value:"send"}),"Envoyer"]}),(0,l.jsxs)("div",{className:"contact-list",children:[(0,l.jsx)("div",{className:"contact-list-item",children:(0,l.jsxs)("a",{href:"tel:+33232264958",children:[(0,l.jsx)("i",{className:"icon-phone"}),"02 32 26 49 58"]})}),(0,l.jsx)("div",{className:"contact-list-item",children:(0,l.jsxs)("a",{href:"mailto:laurent.theneau@unetaupechezvous.fr",children:[(0,l.jsx)("i",{className:"icon-email"}),"laurent.theneau @ unetaupechezvous.fr"]})})]})]})]})]})};var z=r(7294);const P=r.p+"image/illustration-environment.svg",A=r.p+"image/illustration-environment.webp",D=r.p+"image/illustration-certified.svg",F=r.p+"image/illustration-certified.webp",R=r.p+"image/illustration-trap.svg",G=r.p+"image/illustration-trap.webp",V=r.p+"image/carte-ile-de-france.svg",B=r.p+"image/carte-ile-de-france.webp",W=r.p+"image/taupe.webp",K=r.p+"image/taupe.svg",Y=r.p+"image/fouine.svg",H=r.p+"image/fouine.webp",X=r.p+"image/ragondin.svg",Z=r.p+"image/ragondin.webp";const J=function(){var e=(0,i.I0)();return(0,z.useEffect)((function(){var s=window.location.pathname;e("/"===s?h():v())}),[]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:y,type:"image/webp"}),(0,l.jsx)("img",{src:N,alt:"Logo Une Taupe Chez Vous",className:"logo",width:"100%",height:"100%"})]}),(0,l.jsx)("h1",{className:"home-title",children:"Une Taupe Chez vous"}),(0,l.jsx)("h2",{className:"home-subtitle",children:"Artisan Maitre Taupier piégeur"}),(0,l.jsxs)("p",{className:"home-paragrah",children:["Nous mettons à votre service plus de 25 ans d'expérience dans la destruction des ",(0,l.jsx)(n.rU,{to:"/services/nuisibles/taupe",children:"taupes"}),",",(0,l.jsx)(n.rU,{to:"/services/nuisibles/fouines",children:" fouines"}),",",(0,l.jsx)(n.rU,{to:"/services/nuisibles/ragondin",children:" ragondins"})," et autres nuisibles qui envahissent votre jardin."]}),(0,l.jsxs)("div",{className:"home-cards",children:[(0,l.jsxs)("div",{className:"home-card",children:[(0,l.jsx)("div",{className:"home-card_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:A,type:"image/webp"}),(0,l.jsx)("img",{src:P,alt:"Illustration Environment",title:"illustration Environment",width:"100%",height:"100%"})]})}),(0,l.jsx)("div",{className:"home-card_description",children:(0,l.jsx)("h3",{children:"Sans danger pour l'environnement"})})]}),(0,l.jsxs)("div",{className:"home-card",children:[(0,l.jsx)("div",{className:"home-card_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:F,type:"image/webp"}),(0,l.jsx)("img",{src:D,alt:"illustration certified",title:"illustration certified",width:"100%",height:"100%"})]})}),(0,l.jsx)("div",{className:"home-card_description",children:(0,l.jsx)("h3",{children:"Piégeur Agréé"})})]}),(0,l.jsxs)("div",{className:"home-card",children:[(0,l.jsx)("div",{className:"home-card_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:G,type:"image/webp"}),(0,l.jsx)("img",{src:R,alt:"illustration trap",title:"illustraion trap",width:"100%",height:"100%"})]})}),(0,l.jsx)("div",{className:"home-card_description",children:(0,l.jsx)("h3",{children:"Piéges sans danger pour les animaux de compagnie"})})]})]}),(0,l.jsxs)("div",{className:"home-list-services",children:[(0,l.jsx)("h2",{className:"home-list-services_title",children:"Nos services"}),(0,l.jsxs)("div",{className:"home-cards",children:[(0,l.jsx)("div",{className:"home-card-service",children:(0,l.jsxs)(n.rU,{to:"/services/nuisibles/taupe",children:[(0,l.jsx)("div",{className:"home-list-services_list_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:W,type:"image/webp"}),(0,l.jsx)("img",{src:K,alt:"illustration de taupe",title:"illustration de taupe",width:"100%",height:"100%"})]})}),(0,l.jsx)("h3",{className:"home-card-service_title",children:"Taupe"})]})}),(0,l.jsx)("div",{className:"home-card-service",children:(0,l.jsxs)(n.rU,{to:"/services/nuisibles/fouine",children:[(0,l.jsx)("div",{className:"home-list-services_list_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:H,type:"image/webp"}),(0,l.jsx)("img",{src:Y,alt:"illustration fouine",width:"100%",height:"100%"})]})}),(0,l.jsx)("h3",{className:"home-card-service_title",children:"Fouine"})]})}),(0,l.jsx)("div",{className:"home-card-service",children:(0,l.jsxs)(n.rU,{to:"/services/nuisibles/ragondin",children:[(0,l.jsx)("div",{className:"home-services_list_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:Z,type:"image/webp"}),(0,l.jsx)("img",{src:X,alt:"illustration ragondin",width:"100%",height:"100%"})]})}),(0,l.jsx)("h3",{className:"home-card-service_title",children:"Ragondin"})]})})]})]}),(0,l.jsx)("h3",{children:"Interventions en Yvelynes (78)"}),(0,l.jsxs)("div",{className:"home-map",children:[(0,l.jsxs)("div",{className:"home-map_description",children:[(0,l.jsxs)("div",{children:["Pour toute demande de devis ou demande de renseignement",(0,l.jsx)(n.rU,{to:"/contact",children:" contactez-nous"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("i",{className:"icon-phone"}),(0,l.jsx)("a",{href:"tel:+33232264958",children:"02 32 26 49 58"})]})]}),(0,l.jsx)("div",{className:"home-map_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:B,type:"image/webp"}),(0,l.jsx)("img",{src:V,width:"100%",height:"100%",alt:"illustration dessins carte ile de france",title:"illustration dessins carte ile de france"})]})})]})]})};const $=function(){return(0,l.jsxs)("div",{className:"service-card",children:[(0,l.jsx)("div",{className:"service-card_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:W,type:"image/webp"}),(0,l.jsx)("img",{src:K,alt:"illustration de taupe",title:"illustration de taupe"})]})}),(0,l.jsxs)("div",{className:"service-card_content",children:[(0,l.jsx)("h1",{children:"La taupe a un odorat et l'ouïe très développés"}),(0,l.jsxs)("p",{children:["Les taupes jouent un rôle dans l'écosystème.",(0,l.jsx)("br",{}),"La taupe est insectivore, pèse de 60 à 130 g. Elle a un odorat et l'ouïe très développés, ce qui lui permet de repérer sous terre les insectes et verres. Elle n'est pas hémophile comme on le dit souvent.",(0,l.jsx)("br",{}),"Elle vit seule, ne supporte ses congénères qu'au moment de la reproduction, qui a lieu une fois par an. Les portées se composent de 3 à 6 petits.",(0,l.jsx)("br",{}),"Elle se déplace sous terre, dans les galeries qu'elle construit avec ses 2 pattes avant. Elle parcourt ses galeries toutes les 4 heures environ à la recherche de sa nourriture. Son espérance de vie est de 5 ans."]}),(0,l.jsx)("h2",{children:"Comment se débarrasser des taupes dans son jardin?"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("em",{children:"Une Taupe Chez Vous"})," vous propose des solutions naturelles et sans danger pour l'environnement pour lutter contre les taupes avec des pièges sans danger pour vos animaux de compagnie, sans produits chimiques chimiques ou nocifs pour l'environnement.",(0,l.jsx)("br",{}),"L'objectif est de limiter la prolifération des taupes, dans votre jardin, terrain de foot, piste d'aérodrome, golf, etc...",(0,l.jsx)("br",{}),"Nous utilisons des méthodes naturelles de piégeage, sans produits chimiques ou nocifs pour l'environnement."]})]})]})};const Q=function(){return(0,l.jsxs)("div",{className:"mentions",children:[(0,l.jsx)("h1",{children:"Mentions légales"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{className:"list-mentions",children:[(0,l.jsx)("i",{className:"icon-location"}),(0,l.jsxs)("p",{children:["Une Taupe Chez Vous,",(0,l.jsx)("br",{}),"71 rue Marie Curie,",(0,l.jsx)("br",{}),"27780 Garenne Sur Eure"]})]}),(0,l.jsxs)("li",{className:"list-mentions",children:[(0,l.jsx)("i",{className:"icon-phone"}),(0,l.jsx)("p",{children:"+33 2 32 26 49 58"})]}),(0,l.jsx)("li",{className:"list-mentions",children:(0,l.jsx)("p",{children:"N° SIRET : 39338032400029"})})]}),(0,l.jsx)("h2",{children:"Cookies"}),(0,l.jsx)("p",{children:"Cookies strictement nécessaires à l’utilisation du service demandé."}),(0,l.jsx)("p",{children:"Ils permettent l’utilisation des principales fonctionnalités du site, comme le cas échéant l’accès à votre compte personnel, ou encore de mémoriser les préférences d'affichage de votre terminal (langue, paramètres d'affichage) et d'en tenir compte lors de vos visites, selon la charte graphique et les logiciels de visualisation ou de lecture de votre terminal. Ils peuvent inclure des cookies de réseaux sociaux lorsque vous interagissez avec ces derniers. Ils nous permettent aussi de lier entre elles les différentes pages consultées pour vous assurer une navigation fluide."}),(0,l.jsx)("p",{children:"Vous pouvez désactiver complètement les cookies dans votre navigateur. Dans ce cas notre site ne fonctionnera plus normalement mais vous pourrez quand même effectuer des actions basiques."}),(0,l.jsxs)("ol",{children:[(0,l.jsx)("li",{className:"mentions-cookie",children:(0,l.jsxs)("p",{children:["Si vous utilisez le navigateur Internet Explorer",(0,l.jsx)("br",{}),"Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur « Internet ». Sous l’onglet Confidentialité déplacez le curseur vers le haut pour bloquer tous les cookies ou vers le bas pour autoriser tous les cookies, puis cliquez sur OK."]})}),(0,l.jsx)("li",{className:"mentions-cookie",children:(0,l.jsxs)("p",{children:["Si vous utilisez le navigateur Firefox",(0,l.jsx)("br",{}),"Allez dans le menu « Outils » du navigateur puis sélectionnez le menu « Options » Cliquez sur l’onglet « vie privée », décochez la case « Accepter les cookies » puis cliquez sur OK."]})})]})]})};const ee=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Services"}),(0,l.jsxs)("div",{className:"home-cards",children:[(0,l.jsx)("div",{className:"home-card-service",children:(0,l.jsxs)(n.rU,{to:"/services/nuisibles/taupe",children:[(0,l.jsx)("div",{className:"home-list-services_list_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:W,type:"image/webp"}),(0,l.jsx)("img",{src:K,alt:"illustration de taupe",title:"illustration de taupe"})]})}),(0,l.jsx)("h3",{className:"home-card-service_title",children:"Taupe"})]})}),(0,l.jsx)("div",{className:"home-card-service",children:(0,l.jsxs)(n.rU,{to:"/services/nuisibles/fouine",children:[(0,l.jsx)("div",{className:"home-list-services_list_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:H,type:"image/webp"}),(0,l.jsx)("img",{src:Y,alt:"illustration fouine"})]})}),(0,l.jsx)("h3",{className:"home-card-service_title",children:"Fouine"})]})}),(0,l.jsx)("div",{className:"home-card-service",children:(0,l.jsxs)(n.rU,{to:"/services/nuisibles/ragondin",children:[(0,l.jsx)("div",{className:"home-services_list_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:Z,type:"image/webp"}),(0,l.jsx)("img",{src:X,alt:"illustration ragondin"})]})}),(0,l.jsx)("h3",{className:"home-card-service_title",children:"Ragondin"})]})})]})]})};const se=function(){return(0,l.jsxs)("div",{className:"service-card",children:[(0,l.jsx)("div",{className:"service-card_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:Z,type:"image/webp"}),(0,l.jsx)("img",{src:X,alt:"illustration ragondin"})]})}),(0,l.jsxs)("div",{className:"service-card_content",children:[(0,l.jsx)("h1",{children:"Le ragondin détruit les berges et l'écosystème"}),(0,l.jsxs)("p",{children:["D'une taille de 40 à 60 cm, il est reconnaissable à ses quatre grandes incisives rouge-orange, il peut peser jusqu'à 9 kilos et vit en moyenne 10 ans.",(0,l.jsx)("br",{}),"La femelle peut avoir 2 à 3 portées par an, de 5 à 7 petits. Il sort principalement au crépuscule, et la nuit.",(0,l.jsx)("br",{}),"Herbivore, semi aquatique, il mange des céréales, gland, plantes aquatiques, mais aussi des moules d'eau douce et des écrevisses."]}),(0,l.jsx)("h2",{children:"Inscrit sur la liste des animaux nuisibles"}),(0,l.jsxs)("p",{children:["Classé comme animal nuisible, le ragondin est un prédateur de la faune aquatique, il est responsable de la destruction des berges et des rives, il est également responsable de la destruction des cultures.",(0,l.jsx)("br",{}),"Il détruit les berges, en construisant des terriers de 6 à 7 mètres de long, détruit l'écosystème en mangeant les plantes aquatiques, et en détruisant les nids d'oiseaux.",(0,l.jsx)("br",{}),"Le ragondin est porteur de la leptospirose (douve du foie), maladie transmissible à l’homme."]}),(0,l.jsx)("h2",{children:"Comment lutter contre le ragondin ?"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("em",{children:"Une Taupes Chez Vous"})," vous propose des solutions naturelles et sans danger pour l'environnement pour lutter contre le ragondin avec des pièges sans danger pour vos animaux de compagnie, sans produits chimiques chimiques ou nocifs pour l'environnement."]})]})]})};const re=function(){return(0,l.jsxs)("div",{className:"service-card",children:[(0,l.jsx)("div",{className:"service-card_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:H,type:"image/svg"}),(0,l.jsx)("img",{src:Y,alt:"illustration fouine"})]})}),(0,l.jsxs)("div",{className:"service-card_content",children:[(0,l.jsx)("h1",{children:"La fouine aime les conduits électriques, gaines dans les voitures."}),(0,l.jsxs)("p",{children:["La fouine est un animal de taille moyenne, elle mesure entre 40 et 60 cm. Elle est reconnaissable à sa tache blanche couvrant la gorge et le haut des pattes.",(0,l.jsx)("br",{}),"Carnivore, elle mange des rongeurs, des oiseaux, des œufs, aussi des fruits, des déchets ménagers, et elle aime les conduits électriques, gaines dans les voitures.",(0,l.jsx)("br",{}),"Elle vit près de l'homme, dans les greniers, granges, principalement la nuit, pour rechercher sa nourriture, c'est pourquoi on l'entend dans les greniers la nuit.",(0,l.jsx)("br",{}),"Elle a une espérance de vie de 3 à 10 ans et a une portée en mars avril, composée de 2 à 5 petits."]}),(0,l.jsx)("h2",{children:"Utile ou nuisible ?"}),(0,l.jsx)("p",{children:"La fouine est un animal utile, elle est un prédateur chassant de nombreux rongeurs."}),(0,l.jsx)("h2",{children:"Comment se débarrasser d'une fouine dans le grenier ?"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("em",{children:"Une Taupe Chez Vous"})," vous propose des solutions naturelles et sans danger pour l'environnement pour lutter contre la fouine avec des pièges sans danger pour vos animaux de compagnie, sans produits chimiques chimiques ou nocifs pour l'environnement.",(0,l.jsx)("br",{}),"En prévention, il faut colmater tous les trous d'une toiture, porte d'entrée pour s'installer dans le grenier, c'est très une bonne grimpeuse. Elle va être dérangée par de la lumière ou une radio."]})]})]})};r(2564);const te=r.p+"image/card-illustration.svg",ie=r.p+"image/card-illustration.webp";const ne=function(){var e=(0,i.I0)(),s=(0,a.s0)();return(0,z.useEffect)((function(){setTimeout((function(){s("/"),e(S())}),7e3)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"modal-blur"}),(0,l.jsxs)("div",{className:"modal",children:[(0,l.jsx)("div",{className:"modal_img",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:te,type:"image/webp"}),(0,l.jsx)("img",{src:ie,alt:"Illustration cards"})]})}),(0,l.jsxs)("div",{className:"modal_description",children:[(0,l.jsx)("h2",{children:"Bien reçu"}),(0,l.jsx)("p",{children:"L'équipe vous répond aux plus vite. "}),(0,l.jsx)(n.rU,{to:"/",children:(0,l.jsx)("button",{type:"button",className:"modal_button",onClick:function(){return e(S())},children:"Retour à l'accueil"})})]})]})]})};r(7042),r(1249);const ae=function(){function e(){return Math.floor(3*Math.random())+1}return(0,l.jsxs)("picture",{className:"modal-error-animation_img",style:{left:"".concat(Math.floor(110*Math.random()),"%"),top:"".concat(Math.floor(110*Math.random()),"%")},children:[(0,l.jsx)("source",{srcSet:r(5888)("./illustration-taupe-".concat(e(),".webp")),type:"image/webp"}),(0,l.jsx)("img",{width:"1000",height:"1000",srcSet:r(6306)("./illustration-taupe-".concat(e(),".svg")),alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"Illustration Taupe Jardin"})]})},le=r.p+"image/illustration-jardin-taupe.webp";const ce=function(){var e=(0,i.I0)(),s=(0,a.s0)(),r=(0,i.v9)((function(e){return e.modalBox.toggleModalError})),t=(0,i.v9)((function(e){return e.modalBox.numberImg})).slice(0,22);return console.log(t),(0,z.useEffect)((function(){setInterval((function(){var s;e({type:k,numberImg:s})}),1e3)}),[]),(0,z.useEffect)((function(){setTimeout((function(){s("/"),e(I())}),15e3)}),[]),(0,l.jsx)("div",{className:"modal-error",children:r?"":(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(J,{}),(0,l.jsx)("div",{className:"modal-blur"}),(0,l.jsx)("div",{className:"modal-error-animation",children:t.map((function(e){return(0,l.jsx)(ae,{},e)}))}),(0,l.jsxs)("div",{className:"modal",children:[(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:le,type:"image/webp"}),(0,l.jsx)("img",{width:"1000",height:"1000",srcSet:f,alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"illustration Une taupe chez vous"})]}),(0,l.jsx)("h1",{className:"modal-error_title",children:"404"}),(0,l.jsx)("p",{children:"Oups"}),(0,l.jsx)(n.rU,{to:"/",children:(0,l.jsx)("button",{className:"modal_button",onClick:function(){return e(I())},type:"button",children:"Retour à l'accueil"})})]})]})})};const oe=function(){var e=(0,a.TH)(),s=(0,i.I0)(),r=(0,i.v9)((function(e){return e.modalBox.toggleModal}));return(0,i.v9)((function(e){return e.header.spinnerHome})),(0,z.useEffect)((function(){window.scrollTo(0,0),"/"===e.pathname?s(h()):s(v())}),[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{}),(0,l.jsxs)("main",{className:"main",children:[(0,l.jsxs)(a.Z5,{children:[(0,l.jsx)(a.AW,{path:"/",element:(0,l.jsx)(J,{})}),(0,l.jsx)(a.AW,{path:"/services/",element:(0,l.jsx)(ee,{})}),(0,l.jsx)(a.AW,{path:"/services/nuisibles/taupe",element:(0,l.jsx)($,{})}),(0,l.jsx)(a.AW,{path:"/services/nuisibles/ragondin",element:(0,l.jsx)(se,{})}),(0,l.jsx)(a.AW,{path:"/services/nuisibles/fouine",element:(0,l.jsx)(re,{})}),(0,l.jsx)(a.AW,{path:"/contact",element:(0,l.jsx)(M,{})}),(0,l.jsx)(a.AW,{path:"/mentions-legal",element:(0,l.jsx)(Q,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(ce,{})})]}),r?(0,l.jsx)(ne,{}):""]}),(0,l.jsx)(c,{})]})};var ue=r(5857);r(9070),r(7941),r(2526),r(7327),r(1539),r(5003),r(9554),r(4747),r(9337),r(3321);function de(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function me(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?de(Object(r),!0).forEach((function(s){pe(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function pe(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}var he={toogleNavbar:!0,toogleNavbarSubtitle:!0,imgSticky:!0,spinner:!1};const je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(s.type){case o:return me(me({},e),{},{toogleNavbar:!e.toogleNavbar});case p:return me(me({},e),{},{imgSticky:e.imgSticky=!0});case j:return me(me({},e),{},{imgSticky:e.imgSticky=!1});case d:return me(me({},e),{},{toogleNavbarSubtitle:!e.toogleNavbarSubtitle});default:return e}};function ve(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function xe(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?ve(Object(r),!0).forEach((function(s){ge(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function ge(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}var be={};const fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.type===q?xe(xe({},e),{},ge({},s.field,s.value)):e};r(2222),r(9753),r(1817),r(2165),r(6992),r(8783),r(3948),r(1038),r(4916);function Ne(e){return function(e){if(Array.isArray(e))return ye(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"==typeof e)return ye(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ye(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,t=new Array(s);r<s;r++)t[r]=e[r];return t}function Oe(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function we(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?Oe(Object(r),!0).forEach((function(s){_e(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function _e(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}var Se={toggleModal:!1,toggleModalError:!1,numberImg:[],numberImg2:null};const Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(s.type){case _:return we(we({},e),{},{toggleModal:!e.toggleModal});case E:return we(we({},e),{},{toggleModalError:!e.toggleModalError,numberImg:!1});case k:return we(we({},e),{},{numberImg:[].concat(Ne(e.numberImg),[e.numberImg.length+1])});case C:return we(we({},e),{},{numberImg2:e.numberImg2.concat(s.numberImg2)});default:return e}};const Ie=(0,ue.UY)({header:je,contact:fe,modalBox:Ee});var ke=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.qC)((0,ue.md)());const Ce=(0,ue.MT)(Ie,ke);var qe=(0,l.jsx)(i.zt,{store:Ce,children:(0,l.jsx)(n.VK,{children:(0,l.jsx)(oe,{})})});(0,t.s)(document.getElementById("root")).render(qe)},9193:()=>{},6306:(e,s,r)=>{var t={"./illustration-taupe-1.svg":3351,"./illustration-taupe-2.svg":774,"./illustration-taupe-3.svg":6390,"./illustration-taupe-vacances.svg":483};function i(e){var s=n(e);return r(s)}function n(e){if(!r.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=n,e.exports=i,i.id=6306},5888:(e,s,r)=>{var t={"./illustration-taupe-1.webp":1307,"./illustration-taupe-2.webp":5892,"./illustration-taupe-3.webp":9576,"./illustration-taupe-vacances.webp":9788};function i(e){var s=n(e);return r(s)}function n(e){if(!r.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=n,e.exports=i,i.id=5888},3351:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-1.svg"},774:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-2.svg"},6390:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-3.svg"},483:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-vacances.svg"},1307:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-1.webp"},5892:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-2.webp"},9576:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-3.webp"},9788:(e,s,r)=>{"use strict";e.exports=r.p+"image/illustration-taupe-vacances.webp"}},e=>{var s=s=>e(e.s=s);e.O(0,[466],(()=>(s(9193),s(2558))));e.O()}]);