var recipes = {
  'brussel sprouts': '1 lb',
  oil: '2 tbsp',
  salt: 'pinch'
}

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObject = Object.assign({}, obj, {[key]: 'value'})
  return newObject
}
