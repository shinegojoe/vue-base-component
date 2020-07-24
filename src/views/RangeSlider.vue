<template>
  <div>
    <div>
      <input type="range" value="25" class="slider1" />
    </div>

    <div class="xxx">
      <input type="range" value="25" class="slider2" />
    </div>

    <div>
      <input type="range" value="0" class="slider3" />
    </div>

    <div>
      <input type="range" value="0" class="slider4" />
    </div>

     <div class="xx">
      <div ref="qq" class="qq"></div>
      <div ref="thumb" draggable="" @dragstart="ddd" class="thumb"></div>
      <div class="bar"></div>
    </div>

    <div>
      <input type="range" value="0" class="range-slider-2" />
    </div>
  
  </div>
</template>

<script>
export default {
  methods: {
    sliderChange: function (e) {
      console.log('ee', e.target.value)
      const w = e.target.value * 2 - 2
      this.$refs.qq.style.width = `${w}px`
    },

    ddd: function (e) {
      console.log(e.target)
    }
  }
}
</script>


<style lang="sass" scoped>
.slider1

  margin-top: 100px
  -webkit-appearance: none
  position: relative
  overflow: hidden
  height: 40px
  width: 200px
  cursor: pointer
  border-radius: 0
  outline: none
  &::-webkit-slider-runnable-track
    background: red

  &::-webkit-slider-thumb
    -webkit-appearance: none
    width: 30px
    height: 40px
    background: black
    box-shadow: -100vw 0 0 100vw dodgerblue
    border: 2px solid #999
    border-radius: 50%

</style>

<style lang="sass" scoped>
@function getProgress($inputWidth, $color)
  $val: -5px 0 0 -10px $color
  @for $i from 6 through $inputWidth
    $val: #{$val}, -#{$i}px 0 0 -10px #{$color}

  @return $val

.xxx
  background-color: black
  padding: 10px
  .slider2
    margin: 10px
    -webkit-appearance: none
    height: 40px
    width: 200px
    background: none
    // background-color: red
    // padding: 0 10px
    outline: none
    border-radius: 0
    overflow: hidden
    cursor: pointer
    &::-webkit-slider-runnable-track
      background-color: #ddd
      height: 20px
      border-radius: 5px

    &::-webkit-slider-thumb
      -webkit-appearance: none
      width: 40px
      height: 40px
      background-color: #fff
      border: 2px solid #999
      border-radius: 50%
      box-shadow: -100vw 0 0 100vw #69eaab
      // box-shadow: getProgress(200px, #69EAAB)
      margin-top: -10px
      // margin-left: -6px


    // box-shadow: -20px 0 0 -10px #69eaab, -30px 0 0 -10px #69eaab, -40px 0 0 -10px #69eaab, -50px 0 0 -10px #69eaab
</style>



<style lang="sass" scoped>
.slider3
  outline: 0
  border: 0
  border-radius: 500px
  width: 400px
  max-width: 100%
  margin: 24px 0 16px
  transition: box-shadow 0.2s ease-in-out
  overflow: hidden
  height: 40px
  -webkit-appearance: none
  background-color: #ddd

  &::-webkit-slider-runnable-track
    height: 40px
    -webkit-appearance: none
    color: #444
      // margin-top: -1px;
    transition: box-shadow 0.2s ease-in-out
    // background-color: black

  &::-webkit-slider-thumb
      width: 40px
      -webkit-appearance: none
      height: 40px
      cursor: ew-resize
      background-color: #fff
      border: 2px solid #999
      box-shadow: -340px 0 0 320px red, inset 0 0 0 40px black
      border-radius: 50%
      transition: box-shadow 0.2s ease-in-out
      position: relative
      // top: 1px;

  // &:active::-webkit-slider-thumb
  //   background: #fff
  //   box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff
</style>

<style lang="sass" scoped>
.slider4
  -webkit-appearance: none
  width: 100%
  // background: transparent
  background-color: #ddd

  &::-webkit-slider-thumb
    -webkit-appearance: none
    border: 1px solid #000000
    height: 36px
    width: 16px
    border-radius: 3px
    background: #ffffff
    cursor: pointer
    margin-top: -14px
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d

  // &::-ms-track
  //   width: 100%
  //   cursor: pointer
  //   background: transparent
  //   border-color: transparent
  //   color: transparent
  &::-webkit-slider-runnable-track
    width: 100%
    height: 8.4px
    cursor: pointer
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d
    background: #3071a9
    border-radius: 1.3px
    border: 0.2px solid #010101


</style>

<style lang="sass" scoped>
.xx
  margin-top: 30px
  position: relative

  .qq
    z-index: 1
    width: 100px
    height: 15px
    border-radius: 5px

    background-color: black
    position: absolute
    top: 0
    left: 0
  .bar
    width: 200px
    height: 20px
    background-color: red
    position: absolute
    top: 0
    left: 0

  .thumb
    width: 20px
    height: 20px
    border-radius: 50%
    background-color: green
    position: absolute
    top: 0
    left: 0
    z-index: 10

  


</style>

<style lang="lang" scoped src="@/sass/Components/_range_slider.sass"></style>
