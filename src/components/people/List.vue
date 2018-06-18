<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="people"/> People</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <table class="table table-striped table-hover">
        <caption>List of people</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">
              Birth Year
              <info-tip content="BBY = before the Battle of Yavin, ABY = after the Battle of Yavin"/>
            </th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person.id">
            <td scope="row">
              <router-link :to="`people/${person.slug}`">{{ person.name }}</router-link>
            </td>
            <td><gender-icon :gender="person.gender"/></td>
            <td>{{ person.birthYear }}</td>
            <td><span v-if="person.height">{{ person.height }}cm</span></td>
            <td><span v-if="person.mass">{{ person.mass }}kg</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <loading-spinner v-if="loading"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import GenderIcon from '@/components/ui/GenderIcon'
import InfoTip from '@/components/ui/InfoTip'

export default {
  components: {
    GenderIcon,
    InfoTip,
  },
  computed: {
    ...mapState('people', {
      people: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('people', ['count']),
  },
  created() {
    this.$store.dispatch('people/loadMany')
  },
}
</script>
