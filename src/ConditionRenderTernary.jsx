
const ConditionRenderTernary = () => {
    let status=true;
    return (
        <div>
            {
                status?
                <button>Logout Btn</button>
                :
                <button>Login Btn</button>
            }
            
        </div>
    );
};

export default ConditionRenderTernary;