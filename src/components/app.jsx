import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { loadCountries ,countrySearch, africa, america, asia, europe, oceania} from '../store/slice'
import { store } from '../store/store'
import Header from './header'
import Country from './country'

function App() {
  const [data, setData] = useState([])
  const [countryDetail,setCountryDetail] = useState({
    flags:{
    svg:'',png:''
  },
  topLevelDomain:[],
  currencies:[{code:''}],
  languages:[{name:''}]
})

  const dispatch = useDispatch()
  
  useEffect(()=>{
    async function gg(){
      await dispatch(loadCountries()) 
      setData(store.getState().sliced.global)
    }
    gg()
  },[])


  useEffect(()=>{
    const section = document.getElementById('section')
    const country = document.querySelectorAll('#country')
    const countryDetail = document.getElementById('countryDetail')

    for(let i=0;i<country.length;i++){
      for(let j=0;j<country[i].children.length;j++){
        const children = country[i].children[j]
        children.addEventListener('click',()=>{
          setCountryDetail(data[i])
          section.style.display = 'none'
          countryDetail.style.display='block'
        })
      }
    }
  })

  function searchHandel(e){
    dispatch(countrySearch(e.target.value))
    setData(store.getState().sliced.search)
  }

  function filterButtonHandel(){
    const ul = document.querySelector('#filterUl')
    const svg = document.querySelector('#filterButton svg')

    if(ul.style.display === 'block'){
        ul.style.display = 'none'
        svg.style.rotate = '0deg'
    } else{
        ul.style.display = 'block'
        svg.style.rotate = '180deg'
    }
  }

  function africaFilter(){
    dispatch(africa());
    setData(store.getState().sliced.filter)
  }
  function americaFilter(){
    dispatch(america());
    setData(store.getState().sliced.filter)
  }
  function asiaFilter(){
    dispatch(asia());
    setData(store.getState().sliced.filter)
  }
  function europeFilter(){
    dispatch(europe());
    setData(store.getState().sliced.filter)
  }
  function oceaniaFilter(){
    dispatch(oceania());
    setData(store.getState().sliced.filter)
  }

  return (
    <>
    <Header/>
    <main className='px-14 py-7 max-sm:px-4'>
      <div className='flex justify-between flex-wrap gap-4'>
        <input onChange={searchHandel} id='search' placeholder='search for country...' type="search" className='w-[250px] bg-white dark:bg-[hsl(209,23%,22%)] px-2 py-1 rounded-lg max-sm:basis-full'/>
        <div>

        <button onClick={filterButtonHandel} id='filterButton' className="bg-white dark:bg-[hsl(209,23%,22%)] pl-5 pr-3 py-1 rounded-lg">
          Filter by region
          <svg className='inline-block w-[1.7rem] h-[0.55rem] px-2 stroke-[hsl(209,23%,22%)] dark:stroke-white' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="inherit" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        </button> 
        <ul id='filterUl' className='hidden w-[165.65px] bg-white dark:bg-[hsl(209,23%,22%)] mt-2 px-4 space-y-2 absolute z-50 py-2 border border-[hsl(209,23%,22%)] dark:border-white rounded-xl max-sm:relative max-sm:text-center max-sm:pl-0'>
            
            <li>
              <button onClick={africaFilter} className='w-fit px-2'>Africa</button>
            </li>

            <li>
              <button onClick={americaFilter} id='draftButton' className='w-fit px-2'>America</button>
            </li>

            <li>
              <button onClick={asiaFilter} id='draftButton' className='w-fit px-2'>Asia</button>
            </li>

            <li>
              <button onClick={europeFilter} id='draftButton' className='w-fit px-2'>Europe</button>
            </li>

            <li>
              <button onClick={oceaniaFilter} id='draftButton' className='w-fit px-2'>Oceania</button>
            </li>

        </ul>
        </div>
      </div>
      <section id='section' className='grid grid-cols-5 flex-wrap gap-5 py-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
        {
          data.map((country,id)=>{
            return(
          <div id='country' key={id} className='flex flex-col bg-white dark:bg-[hsl(209,23%,22%)] rounded-lg'>
            <img src={country.flags.png} alt={country.name} className='rounded-t-lg self-center aspect-video'/>
            <div className='px-4 py-2 space-y-1 text-sm'>
              <h2 className='text-xl font-medium mb-2'>{country.name}</h2>
              Population: <span className='text-gray-400 inline-block'> {country.population}</span><br/>
              Region: <span className='text-gray-400 inline-block'> {country.region}</span><br/>
              Capital: <span className='text-gray-400 inline-block'> {country.capital}</span>
            </div>
          </div>
              )
          })
        }
      </section>
      <Country countryDetail={countryDetail}/>
    </main>
    </>
  )
}

export default App