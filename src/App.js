import React from 'react';
import logo from './logo.svg';
import './App.css';

const lyrics = [
<pre>{`
Ох бы жить моей душе на горе с богами
А ею играют в футбол сапогами
Лезут как хотят, куда же она денется?
А душа, как шахид, возьмет и наебенится`}
</pre>,
<pre>{`
Как мы здесь живем – великая тайна
Все кричат «вира», а выходит «майна»
Бьются лбом в бетон, думая все изменится
Бог с ним – время наебениться`}
</pre>,
<pre>{`
Время умирать и время рождаться
Время обнимать и время уклоняться
Время бить челом и время ерепениться
И вот оно – время наебениться`}
</pre>,
<pre>{`
Я просил у ангела за меня вступиться
Я смотрел в небо и видел в нем лица
Я вышел к реке, высохший от жажды
И вот я стою, но не могу войти дважды`}
</pre>,
<pre>{`
Лучше будет жить с бородой до пояса
Не лезть в огонь и жить не беспокоясь
Тело моё клеть, душа – пленница
Хватит. Поджигай. Время наебениться`}
</pre>
];

const data = [
  {
    text: lyrics[1],
    timeout: 0.5
  },
  {
    text: lyrics[2],
    timeout: 1
  },
  {
    text: lyrics[3],
    timeout: 5
  },
  {
    text: lyrics[4],
    timeout: 10
  }
];

class App extends React.Component {
  state = {
    content: [<div className='content'>
      {lyrics[1]}
      <label>Скрипт сразу</label>
    </div>]
  };
  
  componentDidMount() {
    data.forEach( item => {
      setTimeout( () => {
        const newContent = this.state.content.slice(0);
        newContent.push(
          <div className='content'>
            {item.text}
            <label>Скрипт {item.timeout} сек</label>
          </div>
        );
        this.setState({content: newContent});
      }, item.timeout*1000);
    })
    
  }
  
  render() {
    const {content} = this.state;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        {content}
      </div>
    );
  }
}

export default App;
