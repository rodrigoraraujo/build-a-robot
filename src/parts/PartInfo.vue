<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>{{part.description}}</div>
  </div>
</template>

<script>
import getPartsMixin from "./get-parts-mixin";

export default {
  name: "PartInfo",
  props: {
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    },
    partType: {
      type: String
    }
  },
  mixins: [getPartsMixin],
  computed: {
    part() {
      const { id, partType } = this;
      return this.parts[partType].find(p => p.id === +id);
    }
  }
};
</script>
 
<style lang="scss" scoped>
</style>