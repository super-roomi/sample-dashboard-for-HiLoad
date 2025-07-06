import BarChart from "./Barchart"
import Cards from "./Cards"


function Dashboard() {
    const cards = [<Cards />, <Cards />, <Cards />, <Cards />]

    return (
        <>
            {/* --Title */}
            <div className="flex md:flex-row mx-8 flex-col mt-5">
                <h1 className='text-2xl font-semibold '>Dashboard</h1>
            </div>

            {/* --Cards */}
            <div className="flex gap-x-4 md:flex-row mx-8 mt-2 flex-col gap-y-2  min-w-40">
                {cards.map(() => {
                    return <Cards key={crypto.randomUUID()} values={22} colors={"slate-300"} description={"item sold"} />
                })}
            </div>

            {/* Charts */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mx-8 mt-5">
                <div className="flex-1 min-w-[300px] md:max-w-[50%]">
                    <BarChart />
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 p-5">
                    <Cards values={312} description={'sales made'} colors={"emerald-600"} />
                    <Cards values={312} description={'sales made'} colors={"slate-400"} />
                    <Cards values={312} description={'sales made'} colors={"slate-400"} />
                    <Cards values={312} description={'sales made'} colors={"slate-400"} />
                </div>
            </div>

        </>
    )
}

export default Dashboard