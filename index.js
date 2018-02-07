var katzDeli = []
function takeANumber(katzDeliLine, next) {
  katzDeliLine.push(next)
  return (`Welcome, ${next}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine, person) {
  if (katzDeliLine.length === 0) {
   return ("There is nobody waiting to be served!")
} else 
  person = katzDeliLine.shift()
  return (`Currently serving ${()}.`)
}
function currentLine(customers) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else 
  
 }
