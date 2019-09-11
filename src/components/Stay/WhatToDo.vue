<template>
  <div class="todo">
    <div class="activities_title">
      <h2>What To Do</h2>
    </div>

    <!-- ============================ ACTIVITIES ========================= -->
    <div class="activities_list">
      <!-- ================= EAT & DRINK ================ -->
      <div class="activity">
        <h3>Eat & Drink</h3>
        <!-- BRUNCH -->
        <div class="activity_items">
          <h4>Brunch</h4>
          <router-link
            class="restaurant_link"
            to="http://clairesrestaurantandbar.com/"
          >Claire's Restaurant & Bar</router-link>
          <router-link
            class="restaurant_link"
            to="http://www.thenotchtop.com/"
          >Notchtop Bakery & Cafe</router-link>
        </div>

        <!-- Lunch -->
        <div class="activity_items">
          <h4>Cravings</h4>
          <router-link
            class="restaurant_link"
            to="http://www.grubsteakestespark.com/lunch.html"
          >The Grubsteak</router-link>
          <router-link class="restaurant_link" to="https://www.edscantina.com/">Ed's Cantina</router-link>
        </div>

        <!-- Dinner -->
        <div class="activity_items">
          <h4>Sit Down</h4>
          <router-link class="restaurant_link" to="https://mamarosesrestaurant.com/">Mama Rose's</router-link>
          <router-link
            class="restaurant_link"
            to="https://www.stanleyhotel.com/cascades-restaurant-lounge.html"
          >Cascades Restaurant & Lounge</router-link>
          <router-link class="restaurant_link" to="http://www.theviewestes.com/">The View</router-link>
        </div>
      </div>

      <!-- ================= PLAY ================ -->
      <div class="activity">
        <h3>Play</h3>
        <div class="activity_items">
          <h4>Adventure Seeking</h4>
          <router-link to="https://www.openairadventurepark.com/">Open Air Adventure Park</router-link>
          <router-link to="https://www.newventurecycling.com/">New Venture Cycling</router-link>
          <router-link to="https://rapidtransitrafting.com/book-online-now">Rapid Transit Rafting</router-link>
          <router-link to="https://backbonecycles.com/">Ride ATVs</router-link>
        </div>
        <div class="activity_items">
          <h4>Family Fun</h4>
          <router-link to="https://www.colorado.gov/pacific/evrpd/marina">Lake Estes Marina</router-link>
          <router-link
            to="https://www.colorado.gov/pacific/evrpd/fees-hours-and-rentals"
          >Boat Rentals</router-link>
          <router-link to="https://www.funcityofestes.com/">Fun City of Estes</router-link>
        </div>
      </div>

      <!-- ================= EXPLORE ================ -->
      <div class="activity">
        <h3>Explore</h3>

        <div class="activity_items">
          <h4>Hiking</h4>
          <router-link
            to="https://www.nps.gov/romo/planyourvisit/index.htm"
          >Rocky Mountain National Park</router-link>
          <router-link
            to="https://fullsuitcase.com/rocky-mountain-national-park-itinerary/"
          >Plan Your Trip To RMNP</router-link>
        </div>

        <div class="activity_items">
          <h4>Sight-Seeing</h4>
          <router-link to="https://www.estestram.com/">Estes Park Ariel Tramway</router-link>
        </div>

        <div class="activity_items">
          <h4>Tours</h4>
          <router-link to="https://www.stanleyhotel.com/tours.html">The Stanely Hotel Tour</router-link>
        </div>
      </div>
    </div>
    <!-- END OF ACTIVITIES -->
  </div>
  <!-- END OF TODO COMPONENT -->
</template>

<style scoped>
.todo {
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(109, 119, 134, 0.267);
  /* background-color: rgba(42, 76, 131, 0.431); */
}

.activities_title {
  font-size: 20px;
  letter-spacing: 5px;
}

.activities_list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.activity {
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
  height: 550px;
}

.activity_items {
  display: flex;
  flex-flow: column;
}

.activity h3 {
  letter-spacing: 10px;
}

.activity a {
  /* color: #fff; */
  color: rgb(136, 124, 83);
  text-decoration: none;
  margin: 10px auto;
}

@media only screen and (min-width: 1660px) {
  .activities_list {
    width: 50%;
  }
}

@media only screen and (max-width: 1250px) {
  .todo {
    height: auto;
  }
}

@media only screen and (max-width: 800px) {
  .todo {
    justify-content: flex-start;
  }
  .activities_list {
    flex-flow: column;
    justify-content: flex-start;
  }
  .activity {
    width: 100%;
    margin-bottom: 25px;
  }

  .activity h3 {
    border-bottom: 0.5px dotted rgb(30, 32, 58);
    padding-bottom: 5px;
    width: 60%;
  }
}
</style>