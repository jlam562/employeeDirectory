import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card'

class App extends Component {
  state = {
    input: '',
    search: '',
    category: 'company_name',
    selected: ''
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  
}

function App() {
  return (
    <Navbar />
    <Form />
    <Card />
  );
}

export default App;
