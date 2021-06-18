const body    = document.querySelector("body")
const section = document.createElement("section")
const div     = document.createElement("div")
const label   = document.createElement("label")
const input   = document.createElement("input")
const button  = document.createElement("button")
const span    = document.createElement("span")



label.textContent = "To stay up-to-date with important releases, Subscribe!"




div.appendChild(label)
div.appendChild(input)
div.appendChild(button)
div.appendChild(span)
section.appendChild(div)
body.appendChild(section)

