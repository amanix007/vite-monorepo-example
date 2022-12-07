<script>
import { ref } from 'vue'
import { timeString } from '@vue-vite-monorepo/utilities'

export default {
  setup () {
    // Reactive value with current time
    const time = ref(timeString())

    // Keep updating the clock every second
    setInterval(() => {
      time.value = timeString()
    }, 1000)

    return {
      time
    }
  }
}

</script>

<template>
  <footer>
    <span class="clock">{{ time }}</span>
  </footer>
</template>

<style scoped lang="scss">
footer {
  flex: 0;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background-color: #1f3763;
  color: white;

  .clock {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
