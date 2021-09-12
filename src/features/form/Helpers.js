export const flattenObject = (obj) => {
    const flattened = {}
  
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, flattenObject(obj[key]))
      } else {
        flattened[key] = obj[key]
      }
    })
    return flattened
}

export const validateField = (value) => {
    let error
    if (value.length === 0 || !value)
        error = 'This is required!'
    return error
}