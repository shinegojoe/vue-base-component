<template>
  <div class="radio-wrapper">
    <input @input="update" :name="name" type="radio" :id="id" :value="val" :checked="true">
    <!-- <label :for="id">Radio</label> -->
    <label :for="id"><span></span>Radio Button {{id}}</label>

  </div>
</template>

<script>
export default {
  props: ['id', 'val', 'name'],

  methods: {
    update: function (event) {
      console.log(event.target.value)
    }
  }

}
</script>

<style scoped lang="scss">
// input[type="checkbox"] {
//     display:none;
// }

// input[type="checkbox"] + label {
//     color:#f2f2f2;
// }

// input[type="checkbox"] + label span {
//     display:inline-block;
//     width:19px;
//     height:19px;
//     margin:-2px 10px 0 0;
//     vertical-align:middle;
//     // background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) left top no-repeat;
//     cursor:pointer;
// }

// input[type="checkbox"]:checked + label span {
//     // background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -19px top no-repeat;
// }

// input[type="radio"] {
//     display:none;
// }

// input[type="radio"] + label {
//     color:#f2f2f2;
//     font-family:Arial, sans-serif;
// }

// input[type="radio"] + label span {
//     display:inline-block;
//     width:19px;
//     height:19px;
//     margin:-2px 10px 0 0;
//     vertical-align:middle;
//     border:1px solid black;
//     border-radius: 50%;
//     // background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -38px top no-repeat;
//     cursor:pointer;
// }

// input[type="radio"]:checked + label span {
//   // width: 2px;
//   // height: 2px;
//   background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -57px top no-repeat;
// }
@supports(-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='radio'] {
    --active: #275EFE;
    --active-inner: #fff;
    --focus: 2px rgba(39, 94, 254, .3);
    --border: #BBC1E1;
    --border-hover: #275EFE;
    --background: #fff;
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid #2f52a2;
    // background: var(--b, var(--background));
    background:#2f52a2;
    transition: background .3s, border-color .3s, box-shadow .2s;
    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: .9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }
    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  input[type='radio'] {
    border-radius: 50%;
    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      // background: var(--active-inner);
      background: white;
      opacity: 0;
      transform: scale(var(--s, .7));
    }
    &:checked {
      --s: .5;
    }
  }
}

</style>
