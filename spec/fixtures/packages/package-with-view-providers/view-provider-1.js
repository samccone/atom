'use strict'

module.exports = function (model) {
  let element = document.createElement('div')
  element.dataset['model-id'] = model.id
  element.dataset['view-provider-name'] = 'view-provider-1'
  return element
}
