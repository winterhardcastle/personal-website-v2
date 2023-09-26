const Fischer = () => {
    return (
        <div className="flex flex-col justify-center items-center">
        <div className="h-auto w-max-4/5">
            <img src="./images/fischer-homepage.png" alt='Fischer homepage' />
        </div>
        <div className="text-black">
            <h1 className="py-2 text-3xl font-bold">Fischer</h1> 
            <p>Fischer is a fact-checking webapp and chrome extension that integrates NLP 
                and user contributions to determine the truthiness of information on the web.
            </p>
        </div>
        </div>
    )
}

export default Fischer;
