function Function_as_Props(props){
    return(
        <div>
            <h1>Hello React</h1>
           {/* <button onclick={()=>props.data()}>Click here to proceed</button> */}
           <button onclick={props.data}>Click here to proceed</button>
        </div>
    );
}
export default Function_as_Props;