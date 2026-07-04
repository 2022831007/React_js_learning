
const ConditionRendLogicalAnd = () => {
    let status=true;
    return (
        <div>
            <h1>Login Status</h1>
            {status&&<button>Logout Button</button>}
        </div>
    );
};

export default ConditionRendLogicalAnd;