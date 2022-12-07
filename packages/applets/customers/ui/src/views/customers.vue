<script>
import { getAPIClient } from '@vue-vite-monorepo/ui'

export default {
  data () {
    return {
      // All customers, fetched from the API
      customers: null
    }
  },

  computed: {
    // Returns true if customers not fetched yet from the API
    isLoading () {
      return !this.customers
    }
  },

  async created () {
    const apiClient = getAPIClient()
    this.customers = await apiClient.getCustomers()
  }
}
</script>


<template>
  <main>
    <h1>
      {{ isLoading ? 'Loading customers, please wait ...' : 'Customers' }}
    </h1>

    <ul v-if="!isLoading">
      <li v-for="customer in customers" :key="customer.id">
        {{ customer.fullName }}
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
