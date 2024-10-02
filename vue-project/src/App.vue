<script setup>
import Mybar from "./components/Mybar.vue";
import products from "./components/products.vue";
import orders from "./components/orders.vue";
</script>
<template>
  <header>
    <Mybar />
  </header>
  <main class="main-content">
    <div class="table-container"><orders /></div>
    <div class="table-container"><products /></div>
  </main>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it stays above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
}

.main-content {
  margin-top: 60px;
  padding-left: 100px;
  padding-right: 100px;
  overflow-y: auto;
  height: 2100px;
}

.table-container {
  max-height: 700px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
