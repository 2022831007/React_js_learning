import Hero from "./Hero";
const PassingObject = () => {
    const itemObj={
        name:'Fatema',
        age:22,
        city:'Mymenshing'

    }
    return (
        <div>
           <Hero item={itemObj}/>
        </div>
    );
};

export default PassingObject;