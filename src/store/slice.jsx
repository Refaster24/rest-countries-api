import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
    'country/loadCountries',
    async () => {
        const api = await fetch('data.json')
        const apiData = await api.json()
        return apiData
    }
    )


const slice = createSlice({
    name:'country',
    initialState:{
        global:[],
        search:[],
        filter:[],
        load:false
    },
    reducers:{
        countrySearch(state,action){
            state.search = []
            if(state.filter.length === 0){
                for(let i=0;i<state.global.length;i++){
                    if(state.global[i].name.includes(action.payload)){
                        state.search.push(state.global[i])
                    }
                }
            } else{
                for(let i=0;i<state.filter.length;i++){
                    if(state.filter[i].name.includes(action.payload)){
                        state.search.push(state.filter[i])
                    }
                }
            }
        },
        africa(state){
            state.filter = []
            for(let i=0;i<state.global.length;i++){
                if(state.global[i].region === 'Africa'){
                    state.filter.push(state.global[i])
                }
            }
        },
        america(state){
            state.filter = []
            for(let i=0;i<state.global.length;i++){
                if(state.global[i].region === 'Americas'){
                    state.filter.push(state.global[i])
                }
            }
        },
        asia(state){
            state.filter = []
            for(let i=0;i<state.global.length;i++){
                if(state.global[i].region === 'Asia'){
                    state.filter.push(state.global[i])
                }
            }
        },
        europe(state){
            state.filter = []
            for(let i=0;i<state.global.length;i++){
                if(state.global[i].region === 'Europe'){
                    state.filter.push(state.global[i])
                }
            }
        },
        oceania(state){
            state.filter = []
            for(let i=0;i<state.global.length;i++){
                if(state.global[i].region === 'Oceania'){
                    state.filter.push(state.global[i])
                }
            }
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(loadCountries.pending,(state,{payload})=>{
            state.load = true
        })
        builder.addCase(loadCountries.fulfilled,(state,{payload})=>{
            state.global=payload
            state.load = false
        })
        builder.addCase(loadCountries.rejected,(state,{payload})=>{
            state.load = false
        })
    }
})


export const {countrySearch,africa,america,asia,europe,oceania} = slice.actions
export default slice.reducer
