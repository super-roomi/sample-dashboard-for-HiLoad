import Card from '@mui/material/Card'

export default function Cards({ values, colors, description }) {
    return (
        <>
            <div className={`flex-1 p-2 bg-${colors} rounded-2xl border min-w-50`}>
                <div className='flex flex-row justify-between text-3xl'>
                    {values}
                    <img />

                </div>
                {description}

            </div >
        </>
    )
}
