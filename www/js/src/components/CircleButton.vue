<template>
  <button 
    class="btn--circle" 
    @click="clicked">
    <i 
      class="fa fa-fw fa-plus"
      :class=""></i>
  </button>
</template>

<script>

/*EXPORTS*/
export default {
  name: 'circle-button',
  props: {
    symbol:{
      type: String,
      default: 'plus'
    }
  },
  computed:{
    faClass(){
      return 'fa-' + this.symbol;
    }
  },
  methods:{
    clicked(event){
      this.$emit('clicked', event);
    }
  }
}

</script>