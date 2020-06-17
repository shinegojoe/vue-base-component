<template>
  <div id="upload-btn-container">
    <input style="display:none" type="file" id="fileElem" ref="upload" @change="changeimg">
    <button @click="uploadFile"
      class="upload-btn"
      >{{fileName}}
      <!-- <span class="icon"><i class="fas fa-info-circle"></i></span> -->

      <slot></slot>
      <!-- <IconWrapper class="icon-item" id="upload" :w="16" :h="16" color="white"></IconWrapper> -->
    </button>
    <div class="upload-hint">{{hint}}</div>
  </div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      default: 'select file'
    },
    afterBtnName: {
      type: String,
      default: 'done'
    },
    beforeHint: {
      type: String,
      default: 'No File Choosen'
    },
    afterHint: {
      type: String,
      default: ''
    }
  },

  data: function () {
    return {
      hint: '',
      fileElem: undefined,
      fileName: ''

    }
  },

  methods: {
    uploadFile: function () {
      this.fileElem.click()
    },

    filenameFilter: function (name) {
      console.log(name.length)
      if (name.length > 10) {
        let newName = ''
        for (let i = 0; i < 10; i++) {
          newName += name[i]
        }
        newName += '...'
        return newName
      }
      return name
    },

    changeimg: function (e) {
      try {
        const targetFile = e.target.files[0]
        // this.filenameFilter(targetFile.name)
        this.fileName = this.filenameFilter(targetFile.name)
        this.hint = ''
        this.isFileSelected = true
        this.formData = new FormData()
        this.formData.append('file', targetFile)
        this.$emit('uploadFile', this.formData)
      } catch (e) {
        this.fileName = this.btnName
        this.hint = this.beforeHint
        this.isFileSelected = false
        // console.log('ee', e)
      }
    }
  },

  mounted: function () {
    this.fileName = this.btnName
    this.hint = this.beforeHint
    this.fileElem = document.getElementById("fileElem")
  }
}
</script>

