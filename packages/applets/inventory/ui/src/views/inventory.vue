<script>
import { capitalize } from '@vue-vite-monorepo/utilities'
import { getAPIClient } from '@vue-vite-monorepo/ui'

export default {
  data () {
    return {
      // All products, fetched from the API
      products: null
    }
  },

  computed: {
    // Returns true if products not fetched yet from the API
    isLoading () {
      return !this.products
    },

    // Distinct product categories
    categories () {
      const categories = new Set(this.products.map(p => p.category))
      return Array.from(categories)
    },

    // Products within the specified category
    productsInCategory () {
      return category =>
        this.products.filter(p => p.category === category)
    }
  },

  methods: {
    capitalize
  },

  async created () {
    const apiClient = getAPIClient()
    this.products = await apiClient.getProducts()
  }
}
</script>


<template>
  <main>
    <h1>
      {{ isLoading ? 'Loading inventory, please wait ...' : 'Inventory' }}
    </h1>

    <ul v-if="!isLoading">
      <li v-for="category in categories" :key="category">
        {{ capitalize(category) }}
        <ul>
          <li v-for="product in productsInCategory(category)" :key="product.id">
            {{ product.producer }} {{ capitalize(product.name) }}
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>


<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
}
</style>
