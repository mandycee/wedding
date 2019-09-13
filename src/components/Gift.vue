<template>
  <div class="gift">
    <div class="gift_banner">
      <div class="banner">
        <h1>Gifts</h1>
        <p>Contribute to Our Honeymoon Fund</p>
      </div>
    </div>
    <div class="gift_message">
      <p>Your love, laughter, and company on our big day is the greatest gift of all. We're skipping out of tradition and would love for you to help us create some new experiences instead. Please choose a gift from our honeymoon registry below.</p>
      <div class="gift_details">
        <p>
          Here is our
          <a
            href="https://www.blueprintregistry.com/registry/amanda-miguel-wedding-6-25-2020"
            target="_blank"
            class="blue_print"
          >BluePrint</a>Registry
        </p>
        <hr />
        <p id="xoxo">XOXO</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gift {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.gift_banner {
  height: 75vh;
  width: 100%;
}

.banner {
  background-image: linear-gradient(
      -40deg,
      rgba(30, 32, 58, 0.431),
      rgba(241, 232, 203, 0.315),
      rgba(212, 190, 118, 0.52)
    ),
    url('../assets/gift.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.banner h1 {
  font-family: 'Dancing Script', cursive;
  margin-top: 90px;
  font-size: 64px;
  letter-spacing: 5px;
}
.banner p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 32px;
}

.gift_message {
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  font-size: 24px;
  font-weight: 300;
  line-height: 35px;
  height: 55vh;
}

hr {
  width: 40px;
}

.blue_print {
  color: rgb(136, 124, 83);
  margin-right: 5px;
}

#xoxo {
  font-size: 20px;
}

@media only screen and (max-width: 1250px) {
  .banner h1 {
    font-size: 60px;
  }

  .banner p {
    font-size: 25px;
  }

  .gift_message {
    font-size: 20px;
    width: 80%;
  }
}

@media only screen and (max-width: 1050px) {
  .gift_banner {
    height: 575px;
  }
}

@media only screen and (max-width: 560px) {
  .gift_banner {
    height: 315px;
  }

  .banner h1 {
    margin-top: 0;
    font-size: 40px;
  }

  .banner p {
    font-size: 18px;
  }

  .gift_message {
    font-size: 15px;
  }
}
</style>