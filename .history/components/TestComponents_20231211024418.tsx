import React, { useState } from "react";

// Seu array de objetos
const dadosConcursos = [
  // ... (seus dados aqui)
];

const EncontrarConcurso: React.FC = () => {
  const [numeroConcurso, setNumeroConcurso] = useState<number | null>(null);

  const buscarConcurso = () => {
    if (numeroConcurso !== null) {
      const concursoEncontrado = dadosConcursos.find(
        (concurso) => concurso.concurso === numeroConcurso
      );

      if (concursoEncontrado) {
        console.log("Concurso encontrado:", concursoEncontrado);
      } else {
        console.log("Concurso não encontrado");
      }
    }
  };

  return (
    <div>
      <label>Digite o número do concurso:</label>
      <input
        type="number"
        value={numeroConcurso !== null ? numeroConcurso.toString() : ""}
        onChange={(e) => setNumeroConcurso(parseInt(e.target.value, 10))}
      />
      <button onClick={buscarConcurso}>Buscar Concurso</button>
    </div>
  );
};

export default EncontrarConcurso;
