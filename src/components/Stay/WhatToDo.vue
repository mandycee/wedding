<template>
  <div class="todo">
    <div class="activities_title">
      <h2>What to Do</h2>
    </div>

    <!-- ============================ ACTIVITIES ========================= -->
    <div class="activities_list">
      <!-- ================= EAT & DRINK ================ -->
      <div class="activity">
        <h3>Eat & Drink</h3>
        <!-- BRUNCH -->
        <div class="activity_items">
          <h4>Brunch</h4>
          <a
            class="restaurant_link"
            target="_blank"
            href="http://clairesrestaurantandbar.com/"
          >Claire's Restaurant & Bar</a>
          <a
            class="restaurant_link"
            target="_blank"
            href="http://www.thenotchtop.com/"
          >Notchtop Bakery & Cafe</a>
        </div>

        <!-- Lunch -->
        <div class="activity_items">
          <h4>Cravings</h4>
          <a
            class="restaurant_link"
            target="_blank"
            href="http://www.grubsteakestespark.com/lunch.html"
          >The Grubsteak</a>
          <a class="restaurant_link" target="_blank" href="https://www.edscantina.com/">Ed's Cantina</a>
        </div>

        <!-- Dinner -->
        <div class="activity_items">
          <h4>Sit Down</h4>
          <a
            class="restaurant_link"
            target="_blank"
            href="https://mamarosesrestaurant.com/"
          >Mama Rose's</a>
          <a
            class="restaurant_link"
            target="_blank"
            href="https://www.stanleyhotel.com/cascades-restaurant-lounge.html"
          >Cascades Restaurant & Lounge</a>
          <a class="restaurant_link" target="_blank" href="http://www.theviewestes.com/">The View</a>
        </div>
      </div>
      <!-- ================= PLAY ================ -->
      <div class="activity">
        <h3>Play</h3>
        <div class="activity_items">
          <h4>Adventure Seeking</h4>
          <a target="_blank" href="https://www.openairadventurepark.com/">Open Air Adventure Park</a>
          <a target="_blank" href="https://www.newventurecycling.com/">New Venture Cycling</a>
          <a
            target="_blank"
            href="https://rapidtransitrafting.com/book-online-now"
          >Rapid Transit Rafting</a>
          <a target="_blank" href="https://backbonecycles.com/">Ride ATVs</a>
        </div>
        <div class="activity_items">
          <h4>Family Fun</h4>
          <a target="_blank" href="https://www.colorado.gov/pacific/evrpd/marina">Lake Estes Marina</a>
          <a
            target="_blank"
            href="https://www.colorado.gov/pacific/evrpd/fees-hours-and-rentals"
          >Boat Rentals</a>
          <a target="_blank" href="https://www.funcityofestes.com/">Fun City of Estes</a>
        </div>
      </div>

      <!-- ================= EXPLORE ================ -->
      <div class="activity">
        <h3>Explore</h3>

        <div class="activity_items">
          <h4>Hiking</h4>
          <a
            target="_blank"
            href="https://www.nps.gov/romo/planyourvisit/index.htm"
          >Rocky Mountain National Park</a>
          <a
            target="_blank"
            href="https://fullsuitcase.com/rocky-mountain-national-park-itinerary/"
          >Plan Your Trip To RMNP</a>
        </div>

        <div class="activity_items">
          <h4>Sight-Seeing</h4>
          <a target="_blank" href="https://www.estestram.com/">Estes Park Ariel Tramway</a>
        </div>

        <div class="activity_items">
          <h4>Tours</h4>
          <a target="_blank" href="https://www.stanleyhotel.com/tours.html">The Stanely Hotel Tour</a>
        </div>
      </div>
    </div>
    <!-- END OF ACTIVITIES -->
  </div>
  <!-- END OF TODO COMPONENT -->
</template>

<style scoped>
.todo {
  padding: 40px 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
}

.activities_title {
  font-family: 'Dancing Script', cursive;
  font-size: 20px;
}

.activities_list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 400;
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

.activity:nth-child(2) {
  border-right: 0.5px solid #c2c1c1;
  border-left: 0.5px solid #c2c1c1;
}

.activity h3 {
  letter-spacing: 5px;
  border-bottom: 0.5px dotted rgb(30, 32, 58);
  padding-bottom: 32px;
  width: 40%;
}

.activity a {
  color: rgb(136, 124, 83);
  text-decoration: none;
  margin: 2.5px auto;
}

.activity a:hover {
  text-decoration: underline;
}

@media only screen and (min-width: 1690px) {
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
    width: 60%;
  }
}
</style>