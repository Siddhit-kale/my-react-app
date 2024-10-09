import React, {useState, useeffect} from 'react'

const Hookcounter5 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useeffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked $(count) times`
    })
    return (
        <div>
            <input type="text" value = {name} onChange={e => setName(e.target.value)}></input>
            <button onClick={ () => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default Hookcounter5