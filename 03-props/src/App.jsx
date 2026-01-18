import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card name='gaurav' age={29} img='https://images.unsplash.com/photo-1733151451051-d24d64467b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' des='gaurav is nice guy' />
      <Card name='rohini' age={28} img='https://images.unsplash.com/photo-1687371804876-0f70072af9aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' des='rohini is nice guy' />
      <Card name='shailesh' age={60} img='https://images.unsplash.com/photo-1765868241773-dfeae648b991?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' des='shailesh is nice guy' />
    </div>
  )
}

export default App
