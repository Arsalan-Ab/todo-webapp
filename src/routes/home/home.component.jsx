import InputBox from "../../components/input-boxs/input-box.component";

const Home = () => {
    return (
        <div className="container-fluid-lg wrapper d-flex flex-column justify-content-center">
            <div className="container-lg custom-container d-flex flex-column justify-content-center">
                <h1 className="text-center mb-5">welcome to todo app</h1>
                <InputBox />
            </div>
        </div>
    )
}

export default Home