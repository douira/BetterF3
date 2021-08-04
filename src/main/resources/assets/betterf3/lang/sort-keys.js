const fs = require("fs")

//read english source
const source = JSON.parse(fs.readFileSync("en_us.json"))

//read translated file
const translated = JSON.parse(fs.readFileSync("de_de.json"))

//construct new translated object with the correct key order
const ordered = {}
for (const key in source) {
  ordered[key] = translated[key]
}

//write back into file with correct ordering
fs.writeFileSync("de_de-new.json", JSON.stringify(ordered, null, 2))
