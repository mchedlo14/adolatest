import classes from './App.module.css';
import Header from './components/Header';
import Section from './components/Section';
import icon from './assets/icon.png';
import wineicon from './assets/wineicon.png';




const dummyData1 = [
  {
    header: 'soft drinks', data: [
      { name: 'Coca-Cola', value: '5' },
      { name: 'Fanta', value: '5' },
      { name: 'Sprite', value: '5' },
      { name: 'Tonic', value: '7' },
      { name: 'Juice', value: '6' },
      { name: 'Water', value: '3' },
    ]
  },

  {
    header: 'hot drinks', data: [
      { name: 'Espresso', value: '7' },
      { name: 'Americano', value: '7' },
      { name: 'Cappucino', value: '9' },
      { name: 'Latte', value: '10' },
    ]
  },

  {
    header: 'wine', data: [
      { name: 'Kisi', value: '12/60' },
      { name: ' Kindzmarauli', value: '10' },
      { name: 'Rkatsiteli', value: '8' },
      { name: 'Sparkling Wine', value: '8' },
      { name: 'Glintwine', value: '12' },
    ]
  },

  {
    header: 'appetizers', data: [
      { name: 'Cheese Dip', value: '18' },
      { name: 'Chips / Nuts', value: '6/8' },
      { name: 'Ham Sandwich', value: '12' },
      { name: 'Lobiani', value: '12' },

    ]
  },

];

const dummyData2 = [
  {
    header: 'cocktails', data: [
      { name: 'Gin Tonic', value: '15' },
      { name: 'Vodka RedBull', value: '15' },
      { name: 'Aperol Spritz', value: '16' },
      { name: 'Cuba Libre', value: '15' },
      { name: 'Jager Juice', value: '17' },
    ]
  },

  {
    header: 'liqueur', data: [
      { name: 'Campari', value: '8' },
      { name: 'Jagermaister', value: '10' },
      { name: 'Baileys', value: '8' },
    ]
  },

  {
    header: 'beer', data: [
      { name: 'Corona', value: '12' },
    ]
  },

  {
    header: 'shots', data: [
      { name: 'Absolut Vodka', value: '8' },
      { name: 'Absolut Kurant Vodka', value: '8' },
      { name: 'Jameson Whiskey', value: '14' },
      { name: 'Jack Daniels Whiskey', value: '12' },
      { name: 'Captain Morgan Rum', value: '10' },
      { name: 'Old Captain Rum', value: '10' },
      { name: 'Tequila Maxximo Gold', value: '12' },
      { name: 'Tequila Hacienda', value: '12' },
      { name: 'Tequila Hacienda', value: '7' },
    ]
  },

];

function App() {
  return (
    <div>
      <img src={icon} className={classes.icon} />
      <img src={wineicon} className={classes.wineicon} />
      <Header />
      <div className={classes.box}>
        <div className={classes.items}>
          {dummyData1.map((item) => (
            <Section
              header={item.header}
              data={item.data}
            />
          ))}
        </div>

        <div className={classes.items}>
          {dummyData2.map((item) => (
            <Section
              header={item.header}
              data={item.data}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
