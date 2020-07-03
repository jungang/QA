<template>
  <div class="app-container">
    index-container
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: { },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    console.log('created...:')
  }
}
</script>
