<template>
  <div>
    <h1>Products</h1>
    <table id="products">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Supplier ID</th>
          <th>Category ID</th>
          <th>Quantity per Unit</th>
          <th>Unit Price</th>
          <th>Units in Stock</th>
          <th>Units on Order</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in paginatedProducts" :key="product.productid">
          <td>{{ product.productid }}</td>
          <td>{{ product.productname }}</td>
          <td>{{ product.supplierid }}</td>
          <td>{{ product.categoryid }}</td>
          <td>{{ product.quantityperunit }}</td>
          <td>{{ product.unitprice }}</td>
          <td>{{ product.unitsinstock }}</td>
          <td>{{ product.unitsonorder }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.products.slice(start, start + this.itemsPerPage);
    },
  },
  mounted() {
    fetch("http://localhost:3000/products/get")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-left: 50px;
  padding-bottom: 25px;
}
#products {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
}
#products td {
  font-size: 20px;
  border: 1px solid #ddd;
  padding: 8px;
}

#products tr:nth-child(even) {
  background-color: #444444;
}

#products tr:hover {
  background-color: #d4a017;
}

#products th {
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center; /* Center align items */
}

.pagination button {
  padding: 10px 15px;
  margin: 0 5px;
  background-color: #04aa6d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button:hover {
  background-color: #039e5a;
}

.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
