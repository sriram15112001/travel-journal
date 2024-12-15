import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App(){
    const elements = data.map((d) => {
        return <Entry 
                key={d.id} 
                img={d.img} 
                title={d.title}
                country={d.country}
                googleMapsLink={d.googleMapsLink}
                dates={d.dates}
                text={d.text}
                />
    })
    return <div>
        <Header />
        {elements}
    </div>
}