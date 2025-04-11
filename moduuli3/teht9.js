const merkkijono = "13 + 20 +3 +87"


if (merkkijono.includes("*")){
  const arvot = merkkijono.split("*")
  const juu=arvot.map(Number)
console.log(juu.reduce((a,b)=>a*b, 1))

}

//tassa on ide miten voisiratkaista tehtava 9