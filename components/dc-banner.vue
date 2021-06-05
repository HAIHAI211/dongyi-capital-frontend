<template>
  <div
    class="dc-container bg-container  mobile:pt-16 h-100 mobile:h-64 bg-darkblue flex justify-center items-center"
    :style="{
      backgroundImage: 'url(' + require(`@/assets/img${src}.png`) + ')'
    }"
  >
    <h1
      class="text-white font-bold tracking-wider shadow-lg"
    >
      <span class=" text-xl lg:text-4xl">{{ $t(t1) }}</span>
      <span class=" text-lg lg:text-3xl">{{ $t(t2) }}</span>
    </h1>
  </div>
</template>
<script>
export default {
  props: ["src", "t1", "t2"]
};
</script>
