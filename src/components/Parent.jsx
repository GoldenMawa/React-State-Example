import { useState } from 'react'
import SenderChild from "./SenderChild";
import ReceiverChild from './ReceiverChild';


function Parent() {
    const [state, setState] = useState("Hello");

    const updateState = data => setState(data);

    return (
        <div>
            <h2>This is my example of lifting state</h2>
            <SenderChild />
            <ReceiverChild />
        </div>
    )
}

export default Parent