<template>
  <div class="gift">
    <div class="gift_banner">
      <h1>Gifts</h1>
      <p>Contribute to Our Honeymoon Fund</p>
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
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.gift_banner {
  background-image: linear-gradient(
      to bottom,
      rgba(216, 209, 187, 0.52),
      rgba(207, 207, 207, 0.431)
    ),
    url('../assets/gift.jpg');
  background-size: cover;
  background-position: center;
  height: 65vh;
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.gift_banner h1 {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  margin-top: 90px;
  font-size: 80px;
  letter-spacing: 5px;
}
.gift_banner p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 35px;
}

.gift_message {
  height: 70vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  width: 75%;
  font-size: 30px;
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

@media only screen and (max-width: 1000px) {
  .gift {
    height: auto;
  }
  .gift_banner {
    height: 50vh;
  }
  .gift_banner h1 {
    font-size: 60px;
  }

  .gift_banner p {
    font-size: 25px;
  }

  .gift_message {
    font-size: 20px;
    height: 50vh;
  }
}

@media only screen and (max-width: 500px) {
  .gift {
    height: auto;
    justify-content: flex-start;
  }

  .gift_banner h1 {
    font-size: 40px;
  }

  .gift_banner p {
    font-size: 18px;
  }

  .gift_message {
    font-size: 15px;
  }
}
</style>