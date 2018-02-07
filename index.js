var katzDeli = []
function takeANumber(katzDeliLine, next) {
  katzDeliLine.push(next)
  return (`Welcome, ${next}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return ("There is nobody waiting to be served!")
} else 
  katzDeliLine.shift()
  return (`Currently serving ${first}.`)
}
