import './App.css';
import Directory from './components/directory/directory.component';

function App() {
  

    const categories = [
      {
        id: 1,
        title: "Hats",
      },
      {
        id: 2,
        title: "Jackets",
      },
      {
        id: 3,
        title: "Sneakers",
      },
      {
        id: 4,
        title: "Womens",
      },
      {
        id: 5,
        title: "Mens",
      },
    ]
  
    return (
      <div>
        <Directory categories={categories}/>
    </div>
    );
  }

  export default App;
  