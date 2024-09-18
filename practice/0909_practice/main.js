myLoop: for(let no1 = 0; no1 < 2; no1++){
  console.log(`position 1: ${no1}`)
  for(let no2 = 0; no2 < 2; no2++){
    console.log(`position 2: ${no1}, ${no2}`);
    break myLoop
  }
}