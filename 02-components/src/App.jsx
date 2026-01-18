
import Card from './components/Card'
import Navbar from './components/Navbar';
const App = () => {

    const user = 'juwar';
    const age = 89

    return (
        <div>
            {/* <h1> Hello guys i am {user}</h1>
            <h1> im a {age} years old</h1> */}
            <Navbar />
            <Card />
        </div>
    )
}

export default App  
