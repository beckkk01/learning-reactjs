export default function TabButton({children, onSelect}){ // destructuring props.children

    function handleClick(){
        console.log('Hello World');
    }

    return(
        <>
            <li>
                <button onClick={onSelect}>{children}</button>

                {/* <button onClick={handleClick}>{children}</button> */}
                {/* we have to use handleClick as a value on the prop. 
                and it must not be executed. we must use that function as a value there.
                It should not be executed by us, it should be executed by react.
                If we execute there using () it will be executed when the that line executes.
                */}
            </li>
        </>
    )
}