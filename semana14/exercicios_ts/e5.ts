enum SiglaPeriodo {
  AC = "AC",
  DC = "DC",
}

function idadeHistDoAno(ano: number, siglaPeriodo?: SiglaPeriodo): string {
  if (siglaPeriodo === undefined) {
    siglaPeriodo = SiglaPeriodo.DC;
  }
  if (siglaPeriodo === SiglaPeriodo.AC) {
    if (ano > 4000) {
      return "Pré-história";
    } else if (ano <= 4000) {
      return "Idade Antiga";
    }
  } else if (siglaPeriodo === SiglaPeriodo.DC) {
    if (ano < 476) {
      return "Idade Antiga";
    } else if (ano >= 476 && ano < 1453) {
      return "Idade Média";
    } else if (ano >= 1453 && ano < 1789) {
      return "Idade Moderna";
    } else if (ano >= 1789) {
      return "Idade Contemporânea";
    }
  }
}

console.log(idadeHistDoAno(6000, SiglaPeriodo.AC));
console.log(idadeHistDoAno(1990, SiglaPeriodo.DC));
console.log(idadeHistDoAno(6, SiglaPeriodo.DC));
console.log(idadeHistDoAno(1000));
console.log(idadeHistDoAno(700, SiglaPeriodo.DC));
