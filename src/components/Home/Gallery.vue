<template>
  <div class="gallery-content">
    <!-- LEFT COLUMN -->
    <div class="gallery-grid gallery_col_left">
      <div class="small_img belgium position">
        <img src="../../assets/galleryImages/belgium2.jpg" />
      </div>
      <div class="small_img position">
        <img src="../../assets/galleryImages/rockfella.jpg" />
      </div>
      <div class="left_large_img position">
        <img src="../../assets/galleryImages/texas.jpg" />
      </div>
    </div>

    <!-- CENTER COLUMN -->
    <div class="gallery-grid gallery_col_middle">
      <div class="smallest_img position">
        <img src="../../assets/galleryImages/arizona2.jpg" />
      </div>
      <div class="smallest_img position">
        <img src="../../assets/galleryImages/amsterdam.jpg" />
      </div>
      <div class="large_center_img position">
        <img src="../../assets/galleryImages/fishermanwarf.jpg" />
      </div>
      <div class="smallest_img position">
        <img src="../../assets/galleryImages/kiss.jpg" />
      </div>
      <div class="smallest_img position">
        <img src="../../assets/galleryImages/rockies.jpg" />
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="gallery-grid gallery_col_right">
      <div class="right_large_img position">
        <img src="../../assets/galleryImages/chautaqua.jpg" />
      </div>
      <div class="small_img position">
        <img src="../../assets/galleryImages/aruba.jpg" />
      </div>
      <div class="small_img position">
        <img src="../../assets/galleryImages/louvre.jpg" />
      </div>
    </div>
    <!-- END OF GALLERY -->
  </div>
</template>

<style scoped>
/* =================== CSS GRIDS ================== */

/* PARENT GRID WITH 3 COL */
.gallery-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-template-rows: auto;
  /* margin: 0 auto; */
  /* width: 95%; */
}

.gallery-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 32% 29% 17% 20%;
  gap: 5px;
}

/* =================== SIZES ====================== */

/* SIZE OF LARGE IMAGES ON THE OUTER COLUMNS */
.left_large_img {
  grid-area: 2 / 1 / 5 / 3;
}

.right_large_img {
  grid-area: 1 / 1 / 4/ 3;
}

/* SIZE OF LARGE IMAGE IN CENTER COL */
.large_center_img {
  grid-area: 2 / 1 / 4 / 3;
}

/* ============= IMG STYLING ================= */

img {
  width: 100%;
  /* padding-bottom: 75%; */
  height: 100%;
  object-fit: cover;
}
</style>