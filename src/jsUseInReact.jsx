

const jsUseInReact = () => {
    let marks=80;
    return (
        <div>
            {/* how can we write  shorthand if else js condition on react */}
            {
            marks>80?<h1>Brilliant Result</h1>:<h1>Average Result</h1>
            }
            {/* immediately invoked functions */}
            {(
                ()=>{
                 if(marks>=80&&marks<100){
                    return <h1>A+</h1>
                 }
                else if(marks>=75&&marks<80){
                    return <h1>A</h1>
                 }
                else if(marks>=70&&marks<75){
                    return <h1>A-</h1>
                 }
                 else{
                    return <h1>F</h1>
                 }
                }
            )()}
        </div>
    );
};

export default jsUseInReact;