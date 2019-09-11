<template>
  <div class="wedding-party">
    <h3>Hers</h3>
    <div class="party_grid">
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/michelle.jpg" alt />
        </div>
        <p class="party_type">Maid of Honor</p>
        <p>Michelle</p>
        <p>Sister of the Bride</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/cindy.jpg" alt />
        </div>
        <p class="party_type">Bridesmaid</p>
        <p>Cindy</p>
        <p>Friend of the Bride</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/liz.jpg" alt />
        </div>
        <p class="party_type">Bridesmaid</p>
        <p>Elizabeth</p>
        <p>Friend of the Bride</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/patty.jpg" alt />
        </div>
        <p class="party_type">Bridesmaid</p>
        <p>Patricia</p>
        <p>Friend of the Bride</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/lefty.jpg" alt />
        </div>
        <p class="party_type">Bridesmaid</p>
        <p>Stephanie</p>
        <p>Friend of the Bride</p>
      </div>
    </div>

    <h3>His</h3>
    <div class="party_grid">
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/miguelina.jpg" alt />
        </div>
        <p class="party_type">Best Woman</p>
        <p>Miguelina</p>
        <p>Sister of the Groom</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/roy.jpg" alt />
        </div>
        <p class="party_type">Best Man</p>
        <p>Roy</p>
        <p>Brother of the Groom</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/chris.jpg" alt />
        </div>
        <p class="party_type">Groomsman</p>
        <p>Chris</p>
        <p>Friend of the Groom</p>
      </div>
    </div>

    <h3>Prepare for Cuteness Overload</h3>
    <div class="party_grid">
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/olivia.jpg" alt />
        </div>
        <p class="party_type">Flower Girl</p>
        <p>Olivia</p>
        <p>Cousin of the Bride</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/violet.jpg" alt />
        </div>
        <p class="party_type">Flower Girl</p>
        <p>Violet</p>
        <p>Niece of the Bride</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/lucas.jpg" alt />
        </div>
        <p class="party_type">Groomsman</p>
        <p>Lucas</p>
        <p>Nephew of the Groom</p>
      </div>
      <div class="thumbnail">
        <div>
          <img src="../../assets/weddingPartyImages/paris2.jpg" alt />
        </div>
        <p class="party_type">Ring Bearer</p>
        <p>Paris</p>
        <p>Best Friend of the Groom & Bride</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wedding-party {
  padding: 40px 0 40px 0;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

h3 {
  align-self: flex-start;
  font-size: 30px;
}

.party_grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.thumbnail {
  margin: 10px;
  width: 300px;
  height: 400px;
  background: linear-gradient(
    to bottom,
    /* rgb(223, 223, 223), */ rgba(216, 209, 187, 0.52),
    rgba(42, 76, 131, 0.431)
  );
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.thumbnail div {
  margin: 5px;
  width: 260px;
  height: 290px;
}

.party_type {
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 10px;
}

.thumbnail p {
  margin: 5px 0 5px 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(90%);
}

@media only screen and (max-width: 800px) {
  .wedding-party {
    width: 90%;
  }
}
</style>