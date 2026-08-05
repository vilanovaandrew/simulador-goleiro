const altoStats = {
  Felino: {
    Goleiro: { Reflexo: 54, Posicionamento: 42, "Defesa Aérea": 38, Pegada: 47, "Saída do Gol": 45, "Um Contra Um": 38, "Distribuição Curta": 37, "Distribuição Longa": 37, "Tempo de Reação": 43, "Comando de Área": 43 },
    Fisico: { Velocidade: 15, Aceleração: 11, Agilidade: 12, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 14, "Condição Física": 10 },
    Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
    Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
  },
  Muralha: {
    Goleiro: { Reflexo: 46, Posicionamento: 50, "Defesa Aérea": 46, Pegada: 47, "Saída do Gol": 41, "Um Contra Um": 35, "Distribuição Curta": 37, "Distribuição Longa": 41, "Tempo de Reação": 43, "Comando de Área": 51 },
    Fisico: { Velocidade: 15, Aceleração: 10, Agilidade: 10, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 18, "Condição Física": 10 },
    Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
    Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
  },
  Libero: {
    Goleiro: { Reflexo: 46, Posicionamento: 42, "Defesa Aérea": 38, Pegada: 43, "Saída do Gol": 53, "Um Contra Um": 43, "Distribuição Curta": 41, "Distribuição Longa": 45, "Tempo de Reação": 43, "Comando de Área": 38 },
    Fisico: { Velocidade: 23, Aceleração: 10, Agilidade: 10, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 14, "Condição Física": 10 },
    Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
    Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
  }
};

const baixoStats = {
  Felino: {
    Goleiro: { Reflexo: 54, Posicionamento: 42, "Defesa Aérea": 38, Pegada: 47, "Saída do Gol": 45, "Um Contra Um": 38, "Distribuição Curta": 37, "Distribuição Longa": 37, "Tempo de Reação": 43, "Comando de Área": 43 },
    Fisico: { Velocidade: 15, Aceleração: 21, Agilidade: 22, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 10, "Condição Física": 10 },
    Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
    Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
  },
  Muralha: {
    Goleiro: { Reflexo: 46, Posicionamento: 50, "Defesa Aérea": 46, Pegada: 47, "Saída do Gol": 41, "Um Contra Um": 35, "Distribuição Curta": 37, "Distribuição Longa": 41, "Tempo de Reação": 43, "Comando de Área": 51 },
    Fisico: { Velocidade: 15, Aceleração: 17, Agilidade: 14, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 10, "Condição Física": 10 },
    Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
    Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
  },
  Libero: {
    Goleiro: { Reflexo: 46, Posicionamento: 42, "Defesa Aérea": 38, Pegada: 43, "Saída do Gol": 53, "Um Contra Um": 43, "Distribuição Curta": 41, "Distribuição Longa": 45, "Tempo de Reação": 43, "Comando de Área": 38 },
    Fisico: { Velocidade: 23, Aceleração: 17, Agilidade: 14, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 10, "Condição Física": 10 },
    Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
    Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
  }
};

export const baseStats = {
  "Muito Alto": altoStats, // identical based on images
  Alto: altoStats,
  Médio: {
    Felino: {
      Goleiro: { Reflexo: 54, Posicionamento: 42, "Defesa Aérea": 43, Pegada: 47, "Saída do Gol": 45, "Um Contra Um": 38, "Distribuição Curta": 37, "Distribuição Longa": 37, "Tempo de Reação": 43, "Comando de Área": 43 },
      Fisico: { Velocidade: 15, Aceleração: 16, Agilidade: 17, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 10, "Condição Física": 10 },
      Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
      Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
    },
    Muralha: {
      Goleiro: { Reflexo: 46, Posicionamento: 50, "Defesa Aérea": 51, Pegada: 47, "Saída do Gol": 41, "Um Contra Um": 35, "Distribuição Curta": 37, "Distribuição Longa": 41, "Tempo de Reação": 43, "Comando de Área": 51 },
      Fisico: { Velocidade: 15, Aceleração: 12, Agilidade: 10, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 13, "Condição Física": 10 },
      Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
      Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
    },
    Libero: {
      Goleiro: { Reflexo: 46, Posicionamento: 42, "Defesa Aérea": 43, Pegada: 43, "Saída do Gol": 53, "Um Contra Um": 43, "Distribuição Curta": 41, "Distribuição Longa": 45, "Tempo de Reação": 43, "Comando de Área": 38 },
      Fisico: { Velocidade: 23, Aceleração: 12, Agilidade: 10, Força: 10, Equilíbrio: 13, Resistência: 12, Pulo: 10, "Condição Física": 10 },
      Tecnico: { Drible: 14, "Controle de Bola": 14, Marcação: 11, Desarme: 14, "Um Toque": 14, Curva: 13, "Passe Baixo": 13, "Passe Alto": 13 },
      Mental: { "Visão de Jogo": 15, "Tomada de Decisão": 10, Antecipação: 14, "Trabalho em Equipe": 15, Coragem: 12, "Posic. Ofensivo": 12, "Posic. Defensivo": 13 }
    }
  },
  Baixo: baixoStats,
  "Muito Baixo": baixoStats // identical based on images
};
