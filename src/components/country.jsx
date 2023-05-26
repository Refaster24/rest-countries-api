export default function Country({countryDetail}){
    function back(){
        const section = document.getElementById('section')
        const countryDetail = document.getElementById('countryDetail')
    
        section.style.display = 'grid'
        countryDetail.style.display='none'
      }

    return(
        <section id="countryDetail" className="hidden mt-6">
            <button onClick={back} className="bg-white dark:bg-[hsl(209,23%,22%)] shadow-sm shadow-black px-4 py-2">
            <svg className='inline-block rotate-90 w-[1.7rem] h-[0.55rem] pl-[6.6px] stroke-[hsl(209,23%,22%)] dark:stroke-white' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="inherit" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                Back</button>

            <div className="grid grid-cols-2 gap-16 mt-4 max-md:grid-cols-1 max-sm:grid-rows-[20em_14em] max-sm:gap-0">

                <img src={countryDetail.flags.svg} alt={countryDetail.name + ' flag'} className="h-full w-full" />

                <div>
                    <h2 className="dark:text-2xl font-bold mb-4">{countryDetail.name}</h2>
                    <div className="columns-2 space-y-1 text-sm font-medium">
                    Native Name: <span className="dark:text-gray-400 font-normal  inline-block">{countryDetail.nativeName}</span><br />
                    Population: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.population}</span><br />
                    Region: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.region}</span><br />
                    Sub Region: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.subregion}</span><br />
                    Capital: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.capital}</span><br />
                    Top Level Domain: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.topLevelDomain.join(' ')}</span><br />
                    Currencies: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.currencies.map(currency=>{return currency.code})}</span><br />
                    Languages: <span className="dark:text-gray-400 font-normal inline-block">{countryDetail.languages.map(language=>{return` ${language.name}`})}</span><br />
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </section>
    )
}