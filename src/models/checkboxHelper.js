
class CheckboxHelper {
  // radioBtn (item, arr) {

  // }

  multiCheckbox (item, arr) {
    const index = parseInt(arr.indexOf(item))
    // console.log('index', index)
    if (index === -1) {
      arr.push(item)
    } else {
      arr.splice(index, 1)
    }
    return arr
  }
}

export default CheckboxHelper
