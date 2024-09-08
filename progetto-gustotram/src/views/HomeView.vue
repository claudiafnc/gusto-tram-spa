<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>CENE IN MOVIMENTO</h1>
        <p class="sezione-testo">
          Lasciati incantare dalla magia della città mentre gusti i piatti
          tipici piemontesi, preparati con cura e passione. Ogni boccone è un
          viaggio nei sapori autentici del Piemonte, accompagnato da vini
          pregiati e da panorami mozzafiato. Un'avventura culinaria che ti
          resterà nel cuore.
        </p>
        <div>
          <h2>L'EXPERIENCE</h2>
          <p class="testo-base">Salta a bordo di Gusto Tram e lasciati trasportare in un viaggio gastronomico senza eguali. Scopri l’emozione di cenare in movimento, mentre il tram attraversa le strade torinesi, offrendo una vista in continua evoluzione della città. Vivi la gioia di un’esperienza culinaria interattiva, dove ogni dettaglio, dalla selezione dei piatti al servizio elegante, è pensato per sorprendere e deliziare.</p>
          <button type="button" class="btn cta-prenota">PRENOTA</button>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/images/tram-disegno.png"
          alt="tram"
          class="img-fluid img-tram-home"
        />
      </div>
    </div>
  </div>
  <div class="container-fluid sfondo-colore">

  </div>
</template>

<style>
h1 {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 42px !important;
  color: #800000 !important;
  margin-top: 2em !important;
  text-align: left;
}

.sezione-testo {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 16px !important;
  color: #1a1a1a !important;
  text-align: left;
}

.testo-base{
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 14px !important;
  color: #1a1a1a !important;
  text-align: left;
}

.img-tram-home {
  margin-top: 2em;
}

.cta-prenota {
  background-color: #982b1c !important;
  color: #f2e8c6 !important;
  font-family: "New Amsterdam", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 22px !important;
  margin-top: 2em;
}

.sfondo-colore {
  background-color: #982b1c !important;
  margin-top: 2em;
}

h2 {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 36px !important;
  color: #982b1c !important;
  margin-top: 2em !important;
  text-align: left;
}
</style>
