import InputBox from "../../components/input-boxs/input-box.component";

const Home = () => {
    return (
        <div className="container-lg d-flex flex-column">
            <h1 className="text-center mb-5">welcome to todo app</h1>
            <div className="container justify-self-center">
                    <InputBox />
            </div>
        </div>
    )
}

export default Home