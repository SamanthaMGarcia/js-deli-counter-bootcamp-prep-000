var katzDeli = []
function takeANumber(katzDeliLine, next) {
  katzDeliLine.push(next)
  return (`Welcome, ${next}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return ("There is nobody waiting to be served!")
} else {
  var person = katzDeliLine.shift()
  return (`Currently serving ${person}.`)
  }
}
function currentLine(katzDeliLin) {
  if (katzDeliLin.length === 0) {
    return ("The line is currently empty.")
  } else {
     for (let i = 0; i < katzDeliLin.length ;i++) {
       var customer = katzDeliLin[i]
      `${i + 1} ${customer}`
     }
  }
}