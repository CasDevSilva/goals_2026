import Info from "./components/Info.jsx";
import Title from "./components/Title.jsx";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <div className="w-full max-w-7xl">
                <Title/>
                <Info/>
            </div>
        </div>
    )
}

export default App;