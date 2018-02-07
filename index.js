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
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else {
     for (let i = 0; i < katzDeliLine.length ;i++) {
      `${i + 1}. ${katzDeliLine[i]}`
     }
     var array = `${i + 1}. ${katzDeliLine[i]}`
     array.push()
  return (`The line is currently: ${i + 1}. ${katzDeliLine[i]}, ${i + 1}.${katzDeliLine[i]}, ${i + 1}.${katzDeliLine[i]}`)
    }
  }