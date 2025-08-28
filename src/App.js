import React, { useState , useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './field4.svg';


import cocao from './jogadores/cocao.png';
import pablo from './jogadores/pablo.png';
import fuzato from './jogadores/fuzato.png';
import jair from './jogadores/jair.png';
import jardim from './jogadores/jardim.png';
import ly from './jogadores/ly.png';
import paulinho from './jogadores/paulinho.png';
import ph from './jogadores/ph.png';
import piton from './jogadores/piton.png';
import puma from './jogadores/puma.png';
import rayan from './jogadores/rayan.png';
import jpm from './jogadores/jpm.png';
import tche from './jogadores/tche.png';
import adson from './jogadores/adson.png';
import vegetti from './jogadores/vegetti.png';
import semft from './jogadores/semft.png';
import c1 from './jogadores/1.svg';
import c2 from './jogadores/2.svg';
import c3 from './jogadores/3.svg';
import c4 from './jogadores/4.svg';
import c5 from './jogadores/5.svg';
import c6 from './jogadores/6.svg';
import c7 from './jogadores/7.svg';
import c8 from './jogadores/8.svg';
import c9 from './jogadores/9.svg';
import c10 from './jogadores/10.svg';
import c11 from './jogadores/11.svg';
import v1 from './jogadores/numbers2/1.svg';
import v2 from './jogadores/numbers2/2.svg';
import v3 from './jogadores/numbers2/3.svg';
import v4 from './jogadores/numbers2/4.svg';
import v5 from './jogadores/numbers2/5.svg';
import v6 from './jogadores/numbers2/6.svg';
import v7 from './jogadores/numbers2/7.svg';
import v8 from './jogadores/numbers2/8.svg';
import v9 from './jogadores/numbers2/9.svg';
import v10 from './jogadores/numbers2/10.svg';
import v11 from './jogadores/numbers2/11.svg';
import david from './jogadores/david.png';
import sforza from './jogadores/sforza.png';
import leandrinho from './jogadores/leandrinho.png';
import estrella from './jogadores/estrella.png';
import victorl from './jogadores/victorl.png';
import hugo from './jogadores/hugo.png';
import couto from './jogadores/couto.png';
import texeira from './jogadores/texeira.png';
import gb from './jogadores/gb.png';
import jean from './jogadores/jean.png';
import max from './jogadores/max.png';
import riquelme from './jogadores/riquelme.png';
import brunol from './jogadores/brunol.png';
import oliveira from './jogadores/oliveira.png';
import freitas from './jogadores/freitas.png';
import pr from './jogadores/pr.png';
import lemos from './jogadores/lemos.png';
import zuka from './jogadores/zuka.png';
import nuno from './jogadores/nuno.png';
import loide from './jogadores/loide.png';
import garre from './jogadores/garre.png';
import euder from './jogadores/euder.png';
import diniz from './jogadores/diniz.png';
import tm from './jogadores/tm.png';
import barros from './jogadores/barros.png';
import gomez from './jogadores/gomez.png';
import robert from './jogadores/robert.png';
import franca from './jogadores/franca.png';
import cuesta from './jogadores/cuesta.png';
import nathan from './jogadores/nathan.png';

const containerStyle = {
  width: '1550px',
  height: '1300px',
  margin: 'auto',
  backgroundColor: 'rgb(13, 120, 71)',
};

const playerStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  position: 'absolute',
  cursor: 'move',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const ItemTypes = {
  PLAYER: 'player',
};

const playersList = [
  { id: 1, nome: "Jardim", imagem: jardim, hasBorder: true, hasNumber: true, number: 1, nota: null},
  { id: 2, nome: "Fuzato", imagem: fuzato , hasBorder: true, hasNumber: true, number: 13, nota: null},
  { id: 3, nome: "Pablo", imagem: pablo, hasBorder: true, hasNumber: true, number: 37, nota: null},
  { id: 5, nome: "Robert", imagem: robert, hasBorder: true, hasNumber: true, number: 30, nota: null},
  { id: 6, nome: "Cuesta", imagem: cuesta, hasBorder: true, hasNumber: true, number: 26},
  { id: 7, nome: "Nathan", imagem: nathan, hasBorder: true, hasNumber: true, number: 22},
  { id: 75, nome: "Lemos", imagem: lemos, hasBorder: true, hasNumber: true, number: 4, nota: null},
  { id: 4, nome: "Freitas", imagem: freitas, hasBorder: true, hasNumber: true, number: 43, nota: null},
  /*{ id: 65, nome: "Souza", imagem: souza, hasBorder: true, hasNumber: true, number: 5, nota: null},*/
  /*{ id: 64, nome: "Lyncon", imagem: ly, hasBorder: true, hasNumber: true, number: 33, nota: null},*/
   { id: 8, nome: "Oliveira", imagem: oliveira , hasBorder: true, hasNumber: true, number: 29, nota: null},
  /*{ id: 8, nome: "Zé Vitor", imagem: zevitor, hasBorder: true, hasNumber: true, number: 44},*/
  /*{ id: 9, nome: "Miranda", imagem: miranda , hasBorder: true, hasNumber: true, number: 35},*/
  { id: 10, nome: "Puma", imagem: puma, hasBorder: true, hasNumber: true, number: 2, nota: null},
  { id: 11, nome: "PH", imagem: ph , hasBorder: true, hasNumber: true, number: 96, nota: null},
  { id: 12, nome: "Paulo Ricardo", imagem: pr, hasBorder: true, hasNumber: true, number: 32, nota: null},
  { id: 14, nome: "Piton", imagem: piton, hasBorder: true, hasNumber: true, number: 6, nota: null},
  { id: 24, nome: "Victor L.", imagem: victorl, hasBorder: true, hasNumber: true, number: 12, nota: null},
  { id: 69, nome: "Leandrinho", imagem: leandrinho, hasBorder: true, hasNumber: true, number: 66, nota: null},
  { id: 13, nome: "Riquelme", imagem: riquelme, hasBorder: true, hasNumber: true, number: 36, nota: null},
  { id: 79, nome: "Euder", imagem: euder, hasBorder: true, hasNumber: true, number: 70},
  { id: 61, nome: "Hugo M.", imagem: hugo, hasBorder: true, hasNumber: true, number: 25, nota: null}, 
  { id: 9, nome: "Barros", imagem: barros, hasBorder: true, hasNumber: true, number: 88, nota: null},
    /*{ id: 15, nome: "JP Murilo", imagem: jpm , hasBorder: true, hasNumber: true, number: 98, nota: null},*/
  { id: 18, nome: "T. Mendes", imagem: tm, hasBorder: true, hasNumber: true, number: 23, nota: null},
  { id: 17, nome: "M. Cocão", imagem: cocao , hasBorder: true, hasNumber: true, number: 85, nota: null},
  /*{ id: 29, nome: "Sforza", imagem: sforza, hasBorder: true, hasNumber: true, number: 20, nota: null},*/
  /*{ id: 73, nome: "Maxime", imagem: max, hasBorder: true, hasNumber: true, number: 26, nota: null},*/
  { id: 21, nome: "Tchê Tchê", imagem: tche, hasBorder: true, hasNumber: true, number: 3, nota: null},
  { id: 22, nome: "Paulinho", imagem: paulinho, hasBorder: true, hasNumber: true, number: 18, nota: null},
  { id: 23, nome: "Jair", imagem: jair, hasBorder: true, hasNumber: true, number: 8, nota: null},
  { id: 62, nome: "Estrella", imagem: estrella, hasBorder: true, hasNumber: true, number: 14, nota: null},
  { id: 63, nome: "Coutinho", imagem: couto, hasBorder: true, hasNumber: true, number: 10, nota: null},
    { id: 65, nome: "França", imagem: franca, hasBorder: true, hasNumber: true, number: 9},
  { id: 76, nome: "Garré", imagem: garre, hasBorder: true, hasNumber: true, number: 15},
  { id: 74, nome: "Zuccarello", imagem: zuka, hasBorder: true, hasNumber: true, number: 31, nota: null},
  { id: 27, nome: "Adson", imagem: adson, hasBorder: true, hasNumber: true, number: 28, nota: null},
  { id: 26, nome: "Vegetti", imagem: vegetti, hasBorder: true, hasNumber: true, number: 99, nota: null},
  { id: 31, nome: "Rayan", imagem: rayan, hasBorder: true, hasNumber: true, number: 77, nota: null},
  { id: 81, nome: "Gomez", imagem: gomez, hasBorder: true, hasNumber: true, number: 11},
  { id: 77, nome: "Nuno", imagem: nuno, hasBorder: true, hasNumber: true, number: 17},
  { id: 78, nome: "Loide", imagem: loide, hasBorder: true, hasNumber: true, number: 45},
  { id: 33, nome: "David", imagem: david, hasBorder: true, hasNumber: true, number: 7},
  { id: 70, nome: "Texeira", imagem: texeira, hasBorder: true, hasNumber: true, number:90, nota: null},
  { id: 25, nome: "Bruno L.", imagem: brunol , hasBorder: true, hasNumber: true, number: 72, nota: null},
  { id: 71, nome: "GB", imagem: gb, hasBorder: true, hasNumber: true, number:19, nota: null},
  { id: 72, nome: "Jean David", imagem: jean, hasBorder: true, hasNumber: true, number: 21, nota: null},
  { id: 80, nome: "Diniz", imagem: diniz, hasBorder: true, hasNumber: false, number: 70},
  { id: 35, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0, nota: null},
  { id: 36, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0, nota: null},
  { id: 37, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0, nota: null},
  { id: 38, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0, nota: null},
  { id: 30, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0, nota: null},
  { id: 39, nome: "", imagem: c1, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 40, nome: "", imagem: c2, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 41, nome: "", imagem: c3, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 42, nome: "", imagem: c4, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 43, nome: "", imagem: c5, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 44, nome: "", imagem: c6, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 45, nome: "", imagem: c7, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 46, nome: "", imagem: c8, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 47, nome: "", imagem: c9, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 48, nome: "", imagem: c10, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 49, nome: "", imagem: c11, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 50, nome: "", imagem: v1, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 51, nome: "", imagem: v2, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 52, nome: "", imagem: v3, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 53, nome: "", imagem: v4, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 54, nome: "", imagem: v5, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 55, nome: "", imagem: v6, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 56, nome: "", imagem: v7, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 57, nome: "", imagem: v8, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 58, nome: "", imagem: v9, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 59, nome: "", imagem: v10, hasBorder: true, hasNumber: false, number: 0, nota: null},
  { id: 60, nome: "", imagem: v11, hasBorder: true, hasNumber: false, number: 0, nota: null},
 
];

const playerData = () => {
  const players = playersList.map((player, index) => ({
    id: player.id,
    top: 850 + Math.floor(index / 15) * 150 + 30, // Ajuste para quebrar a linha a cada 15 jogadores
    left: (index % 15) * 105 + 135, // Ajuste para posicionar os jogadores na linha correta
    name: player.nome,
    image: player.imagem,
    hasBorder: player.hasBorder,
    hasNumber: player.hasNumber,
    number: player.number,
     nota: player.nota, 
  }));

  return [...players];  
};

const DraggablePlayer = ({ id, left, top, name, image, hasBorder, hasNumber, number, nota, onUpdateNota }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleDoubleClick = () => {
    const novaNota = prompt(`Digite uma nota de 0 a 10 para ${name}:`, nota || '');
    if (novaNota !== null) {
      const trimmedNota = novaNota.trim(); // Remove espaços em branco
      if (trimmedNota === "") { // Se o valor for vazio após remover espaços, limpa a nota
        onUpdateNota(id, null);
      } else {
        const notaNum = parseFloat(trimmedNota);
        if (!isNaN(notaNum) && notaNum >= 0 && notaNum <= 10) {
          onUpdateNota(id, notaNum);
        } else {
          alert('Por favor, insira uma nota válida entre 0 e 10.');
        }
      }
    }
  };

  const playerNameStyle = {
    marginTop: '0px',
    textShadow: '0 0 6px #000, 0 0 6px #000, 0 0 6px #000, 0 0 6px #000', // Adicione esta linha para criar uma borda preta
    fontSize: '22px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    zIndex: 2, // Garante que o nome do jogador fique acima do círculo
    //border: '2px solid #373737',
  };

  const playerNameContainerStyle = {
    padding: '-2px', // Adicione um espaçamento interno de 5px
    position: 'relative', // Garante que o z-index funcione corretamente
    zIndex: 2, // Garante que o nome do jogador fique acima do círculo
    whiteSpace: 'nowrap', // Evita que o nome do jogador quebre a linha
  };

  const playerImageContainerStyle = {
    position: 'relative', // Adicione position relative para que o número seja posicionado absolutamente em relação a este contêiner
    width: '102px',
    height: '102px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: hasBorder ? '2px solid #373737' : 'none', // Adicione a borda aqui
    backgroundColor: hasBorder ? '#65615f' : 'none',
    zIndex: 1, // Garante que a imagem do jogador fique abaixo do círculo
  };

  const playerNumberContainerStyle = {
    position: 'absolute',
    bottom: '20px',
    right: 0,
    width: '30px', // Defina um tamanho fixo para o contêiner do número
    height: '30px', // Defina um tamanho fixo para o contêiner do número
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'white',
    zIndex: 1, // Garante que a imagem do jogador fique abaixo do círculo
    border: '2px solid #373737',
    display: 'flex', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza horizontalmente
    alignItems: 'center', // Centraliza verticalmente
  };

  const playerNumberStyle = {
    fontSize: '21px',
    fontWeight: 'bold',
    color: '#bb0000',
    padding: '1px',
    textAlign: 'center',
    boxSizing: 'border-box',
  };

  const notaStyle = {
    position: 'absolute',
    left: '110px', // Posiciona a nota à esquerda do jogador
    top: '40%',
    transform: 'translateY(-50%)',
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 6px #000, 0 0 6px #000, 0 0 6px #000, 0 0 6px #000',
  };

  return (
    <div 
      ref={drag} 
      style={{ ...playerStyle, left, top, opacity: isDragging ? 0.5 : 1 }}
      onDoubleClick={handleDoubleClick}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={playerImageContainerStyle}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {hasNumber && (
          <div style={playerNumberContainerStyle}>
            <div style={playerNumberStyle}>{number}</div>
          </div>
        )}
        <div style={playerNameStyle}>
          <div style={playerNameContainerStyle}>{name}</div>
        </div>
      </div>
      {nota !== null && <div style={notaStyle}>{nota}</div>} {/* Exibe a nota */}
    </div>
  );
};

const Field = () => {
  const [players, setPlayers] = useState(playerData);

  const [, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(delta.x);
      const top = Math.round(delta.y);

      const updatedPlayers = players.map((player) => {
        if (player.id === item.id) {
          return { ...player, left: player.left + left, top: player.top + top };
        }
        return player;
      });

      setPlayers(updatedPlayers);
    },
  });

  const handleUpdateNota = (id, nota) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        return { ...player, nota };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  const handleClearAllNotas = () => {
    const updatedPlayers = players.map((player) => ({
      ...player,
      nota: null, // Define a nota de todos os jogadores como null
    }));
    setPlayers(updatedPlayers);
    alert('Todas as notas serão limpas!');
  };

  return (
    <div>
      {/* Botão para limpar todas as notas */}
      <button
        onClick={handleClearAllNotas}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px',
          fontSize: '10px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000, // Garante que o botão fique acima de outros elementos
        }}
      >
        Limpar Notas
      </button>

      {/* Campo e jogadores */}
      <div
        ref={drop}
        style={{
          ...containerStyle,
          backgroundImage: `url(${campoImage})`,
          backgroundSize: 'cover',
        }}
      >
        {players.map((player) => (
          <div key={player.id}>
            <DraggablePlayer
              id={player.id}
              left={player.left}
              top={player.top}
              name={player.name}
              image={player.image}
              hasBorder={player.hasBorder}
              hasNumber={player.hasNumber}
              number={player.number}
              nota={player.nota}
              onUpdateNota={handleUpdateNota}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {

  const [campoImagem, setCampoImagem] = useState(campoImage);

  useEffect(() => {
    document.title = "CampinhoPodcast"; 
    document.body.style.background = "rgb(0, 96, 0)";
  }, []);

  return (
     <div className="App" style={{ backgroundColor: 'rgb(0, 96, 0)', margin: 0, padding: 0, overflow: 'hidden' }}>
      <DndProvider backend={HTML5Backend}>
        <Field/>
      </DndProvider>
    </div>
  );
}

export default App;
