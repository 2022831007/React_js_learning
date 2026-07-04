// const status = true;
const LoginStatus=(status)=>{
    if(status){
        return <button>Logout Btn</button>
    }
     else{
        return <button>Login Btn</button>
    }

}
const ConditionRendering = () => {
    // const status = true;
    // this is more complex,as it is repeative and need more VideoColorSpace,we should not use this
    // if(status){
    //     return (
    //     <div>
    //         <h1>Login Status</h1>
    //         <button>Logout</button>
    //     </div>
    // );
    // }
    // else{
    //     return (
    //     <div>
    //         <h1>Login status</h1>
    //         <button>Log in</button>
    //     </div>
    // );
    // }
    return (
        <div>
            <h1>Login status</h1>
            {LoginStatus(true)}
        </div>
     );
};

export default ConditionRendering;