import InputBox from "../../components/input-boxs/input-box.component";

const Home = () => {
    return (
        <div className="container-fluid h-100 d-flex  ">
            <div className="container px-lg-0 d-flex flex-column justify-content-center">
                <h1 className="text-center mb-5">welcome to todo app</h1>
                    <InputBox />
            </div>
        </div>
    )
}

export default Home