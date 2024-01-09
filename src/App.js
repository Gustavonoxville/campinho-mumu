import React, { useState , useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './field2.svg';

import capasso from './jogadores/capasso.png';
import jv from './jogadores/jv.png';
import barros from './jogadores/barros.png';
import cocao from './jogadores/cocao.png';
import erick from './jogadores/erick.png';
import figueiredo from './jogadores/figueiredo.png';
import rojas from './jogadores/rojas.png';
import halls from './jogadores/halls.png';
import ivan from './jogadores/ivan.png';
import jair from './jogadores/jair.png';
import jardim from './jogadores/jardim.png';
import juliao from './jogadores/juliao.png';
import leo from './jogadores/leo.png';
import maicon from './jogadores/maicon.png';
import marlongomes from './jogadores/marlongomes.png';
import medel from './jogadores/medel.png';
import orellano from './jogadores/orellano.png';
import paulinho from './jogadores/paulinho.png';
import payet from './jogadores/payet.png';
import pec from './jogadores/pec.png';
import praxedes from './jogadores/praxedes.png';
import ph from './jogadores/ph.png';
import piton from './jogadores/piton.png';
import puma from './jogadores/puma.png';
import miranda from './jogadores/miranda.png';
import rayan from './jogadores/rayan.png';
import jpm from './jogadores/jpm.png';
import rossi from './jogadores/rossi.png';
import sebas from './jogadores/sebas.png';
import serginho from './jogadores/serginho.png';
import mumu from './jogadores/mumu.png';
import vegetti from './jogadores/vegetti.png';
import zegabriel from './jogadores/zegabriel.png';
import zevitor from './jogadores/zevitor.png';
import semft from './jogadores/semft.png';
import digao from './jogadores/digao.png';
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
  { id: 1, nome: "Jardim", imagem: jardim ,  hasBorder: true},
  /*{ id: 2, nome: "Ivan", imagem: ivan , hasBorder: true},*/
  { id: 3, nome: "Halls", imagem: halls, hasBorder: true },
  { id: 4, nome: "Maicon", imagem: maicon, hasBorder: true},
  { id: 5, nome: "J. Victor", imagem: jv, hasBorder: true },
  { id: 6, nome: "Capasso", imagem: capasso, hasBorder: true},
  { id: 7, nome: "Léo", imagem: leo , hasBorder: true },
  { id: 8, nome: "Zé Vitor", imagem: zevitor, hasBorder: true},
  { id: 9, nome: "Miranda", imagem: miranda , hasBorder: true},
  { id: 10, nome: "Puma", imagem: puma, hasBorder: true},
  { id: 11, nome: "PH", imagem: ph , hasBorder: true},
  { id: 12, nome: "R. Rojas", imagem: rojas, hasBorder: true},
  { id: 13, nome: "Juliao", imagem: juliao, hasBorder: true },
  { id: 14, nome: "Piton", imagem: piton, hasBorder: true},
  { id: 15, nome: "JP Murilo", imagem: jpm , hasBorder: true},
  { id: 16, nome: "Medel", imagem: medel, hasBorder: true},
  { id: 17, nome: "Mateus C.", imagem: cocao , hasBorder: true},
  { id: 18, nome: "Barros", imagem: barros, hasBorder: true},
  { id: 19, nome: "Zé Gabriel", imagem: zegabriel, hasBorder: true },
  { id: 20, nome: "Payet", imagem: payet, hasBorder: true},
  { id: 21, nome: "Praxedes", imagem: praxedes, hasBorder: true },
  { id: 22, nome: "Paulinho", imagem: paulinho, hasBorder: true},
  { id: 23, nome: "Jair", imagem: jair, hasBorder: true },
  { id: 24, nome: "Marlon", imagem: marlongomes, hasBorder: true},
  { id: 25, nome: "Rossi", imagem: rossi , hasBorder: true},
  { id: 26, nome: "Vegetti", imagem: vegetti, hasBorder: true},
  /*{ id: 27, nome: "Sebastian", imagem: sebas, hasBorder: true},*/
  { id: 28, nome: "Serginho", imagem: serginho, hasBorder: true},
  /*{ id: 29, nome: "Orellano", imagem: orellano, hasBorder: true},*/
  { id: 31, nome: "Rayan", imagem: rayan, hasBorder: true},
  { id: 32, nome: "Erick M.", imagem: erick, hasBorder: true},
  { id: 33, nome: "David", imagem: david, hasBorder: true},
   /*{ id: 33, nome: "Figueiredo", imagem: figueiredo, hasBorder: true},*/
  { id: 34, nome: "Pec", imagem: pec, hasBorder: true },
  { id: 35, nome: "", imagem: semft,hasBorder: false},
  { id: 36, nome: "", imagem: semft,hasBorder: false},
  { id: 37, nome: "", imagem: semft,hasBorder: false},
  { id: 38, nome: "", imagem: semft,hasBorder: false},
  { id: 30, nome: "", imagem: semft,hasBorder: false},
  { id: 39, nome: "", imagem: c1, hasBorder: true},
  { id: 40, nome: "", imagem: c2, hasBorder: true},
  { id: 41, nome: "", imagem: c3, hasBorder: true},
  { id: 42, nome: "", imagem: c4, hasBorder: true},
  { id: 43, nome: "", imagem: c5, hasBorder: true},
  { id: 44, nome: "", imagem: c6, hasBorder: true},
  { id: 45, nome: "", imagem: c7, hasBorder: true},
  { id: 46, nome: "", imagem: c8, hasBorder: true},
  { id: 47, nome: "", imagem: c9, hasBorder: true},
  { id: 48, nome: "", imagem: c10, hasBorder: true},
  { id: 49, nome: "", imagem: c11, hasBorder: true},
  { id: 50, nome: "", imagem: v1, hasBorder: true},
  { id: 51, nome: "", imagem: v2, hasBorder: true},
  { id: 52, nome: "", imagem: v3, hasBorder: true},
  { id: 53, nome: "", imagem: v4, hasBorder: true},
  { id: 54, nome: "", imagem: v5, hasBorder: true},
  { id: 55, nome: "", imagem: v6, hasBorder: true},
  { id: 56, nome: "", imagem: v7, hasBorder: true},
  { id: 57, nome: "", imagem: v8, hasBorder: true},
  { id: 58, nome: "", imagem: v9, hasBorder: true},
  { id: 59, nome: "", imagem: v10, hasBorder: true},
  { id: 60, nome: "", imagem: v11, hasBorder: true},
 
];

const playerData = () => {
  const players = playersList.map((player, index) => ({
    id: player.id,
    top: 850 + Math.floor(index / 15) * 150 + 30, // Ajuste para quebrar a linha a cada 15 jogadores
    left: (index % 15) * 100 + 180, // Ajuste para posicionar os jogadores na linha correta
    name: player.nome,
    image: player.imagem,
    hasBorder: player.hasBorder,
  }));

  return [...players];  
};

const DraggablePlayer = ({ id, left, top, name, image, hasBorder }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const playerNameStyle = {
    marginTop: '0px',
    textShadow: '0 0 2px #000',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
  };

  const playerNameContainerStyle = {
    padding: '5px', // Adicione um espaçamento interno de 5px
  };

  const playerImageContainerStyle = {
    width: '95px',
    height: '95px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: hasBorder ? '2px solid #373737' : 'none',  // Adicione a borda aqui
    backgroundColor: hasBorder ? '#65615f' : 'none',
  };

  return (
    <div ref={drag} style={{ ...playerStyle, left, top, opacity: isDragging ? 0.5 : 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={playerImageContainerStyle}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={playerNameStyle}>
           <div style={playerNameContainerStyle}>{name}</div>
        </div>
      </div>
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

  return (
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
          <DraggablePlayer id={player.id} left={player.left} top={player.top} name={player.name} image={player.image} hasBorder={player.hasBorder}  />
        </div>
      ))}
    </div>
  );
};

function App() {
  useEffect(() => {
    document.title = "CampinhoPodcast"; 
    document.body.style.background = "rgb(0, 96, 0)";
  }, []);

  return (
     <div className="App" style={{ backgroundColor: 'rgb(0, 96, 0)', margin: 0, padding: 0, overflow: 'hidden' }}>
      <DndProvider backend={HTML5Backend}>
        <Field />
      </DndProvider>
    </div>
  );
}

export default App;
