<template>
  <div>
    <h1>Orders</h1>
    <table id="orders">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer ID</th>
          <th>Order Date</th>
          <th>Ship Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in paginatedOrders" :key="order.orderid">
          <td>{{ order.orderid }}</td>
          <td>{{ order.customerid }}</td>
          <td>{{ order.orderdate }}</td>
          <td>{{ order.shipaddress }}</td>
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
      orders: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.orders.length / this.itemsPerPage);
    },
    paginatedOrders() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.orders.slice(start, start + this.itemsPerPage);
    },
  },
  mounted() {
    fetch("http://localhost:3000/orders/get")
      .then((res) => res.json())
      .then((data) => (this.orders = data))
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
#orders {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-left: 50px;
}
#orders td {
  font-size: 20px;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#orders tr:nth-child(even) {
  background-color: #444444;
}

#orders tr:hover {
  background-color: #d4a017;
}

#orders th {
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
