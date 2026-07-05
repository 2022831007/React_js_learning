

const Hero = (props) => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYARBac0Yb0y0ZvahhvVXvFlve7CCs6f1yd_TL2vx5jg&s=10" alt="" />
            <h1>{props.title}</h1>
            <h1>{props.des}</h1>
            <ul>
                <li>Name:{props.item['name']}</li>
                <li>Age:{props.item['age']} </li>
                <li>City:{props.item['city']} </li>

            </ul>
            <button onClick={props.ChildBtnClick}>Submit</button>
        </div>
    );
};

export default Hero;