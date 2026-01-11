import Info from "./components/Info.jsx";
import Title from "./components/Title.jsx";

const App = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-ink-black rounded-lg p-8 border border-jet-black">
                    <Title/>
                    <Info/>
                </div>
            </div>
        </div>
    )
}

export default App;