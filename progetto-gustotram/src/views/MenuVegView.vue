<template>
  <div class="container">
    <div class="row justify-content-center g-5">
      <div class="col-4">
        <div class="list-group text-end" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action active"
            id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="list-home"
            >Antipasti</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-profile-list"
            data-bs-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="list-profile"
            >Primo</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-messages-list"
            data-bs-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="list-messages"
            >Dolce</a
          >
        </div>
      </div>
      <div class="col-5">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <span class="portata">Friciulin</span>
            <p class="descrizione">frittelline verdi della tradizione</p>
            <br />
            <span class="portata">Doppio flan bicolore</span>
            <p class="descrizione">con fonduta leggera</p>
            <br />
            <span class="portata">Involtini</span>
            <p class="descrizione">con verdure fresche di stagione</p>
            <br />
          </div>
          <div
            class="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <span class="portata">Lasagna al forno</span>
            <p class="descrizione">con ragù di verdure</p>
            <br />
            <span class="portata">Polenta croccante</span>
            <p class="descrizione">con salsa ai funghi porcini</p>
          </div>
          <div
            class="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <span class="portata">Bonet VEG</span>
            <p class="descrizione">con amaretti</p>
            <br />
            <span class="portata">Albicocche ripiene</span>
            <p class="descrizione">con crema pasticcera veg</p>
            <br />
            <span class="portata">Baci di dama</span>
            <p class="descrizione">con pallina di gelato alla soia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 5em;
}
.list-group {
  border: none !important;
  margin: 0 auto;
  width: 50%;
}

.list-group-item {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  color: rgba(128, 0, 0, 0.5) !important;
  border: none !important;
}
.active,
.list-group-item:active,
.list-group-item:hover,
.list-group-item:focus {
  background-color: white !important;
  border: none !important;
  color: #800000 !important;
}

.portata {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  color: #800000 !important;
}
.descrizione {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 16px;
  color: #1a1a1a !important;
}
</style>
