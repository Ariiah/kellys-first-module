function torusv(majorRadius, minorRadius) {
  return (Math.PI * Math.pow(minorRadius, 2) * (2 * Math.PI * majorRadius))
}

function spherev(radius) {
  return 4 * Math.PI * Math.pow(radius, 3) / 3
}

module.exports = {
torusv: torusv,
spherev: spherev
}
