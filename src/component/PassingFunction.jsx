import Hero1 from './Hero1';

const PassingFunction = () => {
    const BtnClick=()=>{
        alert("Say Hello!")
    }
    return (
        <div>
            <Hero1 ChildBtnClick={BtnClick}/>
        </div>
    );
};

export default PassingFunction;