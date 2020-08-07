
class MultiSelectorModel {
  constructor (view) {
    this.view = view
    this.dataMap = new Map()
    this.isSelectAll = false
  }

  init (itemList) {
    console.log('init')
    this.itemList = itemList
    for (const item of this.itemList) {
      this.dataMap.set(item.deviceId, item)
    }
    this.checkSelectAll()
    // this.$emit('selectUpdate', this.dataMap.values())
    this.view.$emit('selectUpdate', this.makeRes())
  }

  checkSelectAll () {
    if (this.isSelectAll) {
      for (const item of this.itemList) {
        if (!item.isChecked) {
          this.isSelectAll = false
          return
        }
      }
    } else {
      if (this.itemList.length === 0) {
        this.isSelectAll = false
        return
      }
      for (const item of this.itemList) {
        if (!item.isChecked) {
          return
        }
      }
      this.isSelectAll = true
    }
  }

  itemClick (item, index) {
    this.itemList[index].isChecked = !this.itemList[index].isChecked
    if (this.itemList[index].isChecked) {
      this.dataMap.set(item.deviceId, item)
    } else {
      this.dataMap.delete(item.deviceId)
    }
    this.checkSelectAll()
    this.view.$emit('selectUpdate', this.makeRes())

    // this.$emit('selectUpdate', this.dataMap.values())
  }

  selectAllClick () {
    this.isSelectAll = !this.isSelectAll
    if (this.isSelectAll) {
      this.selectAll()
    } else {
      this.removeAll()
    }
    this.view.$emit('selectUpdate', this.makeRes())

    // this.$emit('selectUpdate', this.dataMap.values())
  }

  selectAll () {
    // for (const item of this.itemList) {
    //   item.isChecked = true
    //   this.dataMap.set(item.deviceId, item)
    // }
    for (const item of this.dataMap.values()) {
      item.isChecked = true
    }
  }

  removeAll () {
    // for (const item of this.itemList) {
    //   item.isChecked = false
    // }
    // this.dataMap.clear()
    // this.dataMap = new Map()
    for (const item of this.dataMap.values()) {
      item.isChecked = false
    }
    // this.$emit('selectUpdate', this.makeRes())
  }

  makeRes () {
    const resList = []
    for (const item of this.dataMap.values()) {
      if (item.isChecked) {
        resList.push(item)
      }
    }
    // const resList = this.dataMap.values().filter((item, index, arr) => {
    //   return item.isChecked
    // })
    return resList
  }
}

export default MultiSelectorModel
