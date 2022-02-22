import create from "zustand";
import produce from "immer";


const useStore = create((set)=>({
    dollars:0,
    broke:false,
    increseDollars:()=>set((state)=>({dollars:state.dollars+1})),
    decreaseDollars:()=>set((state)=>({dollars:state.dollars-1})),
    setBroke:(input)=>set((state)=>({broke:input})),


}))

const unsubcribe = useStore.subscribe(
    (newValue, oldValue) => {
      console.log("previous value was:" + oldValue);
      console.log("New value: " + newValue);
    },
    (state) => state.dollars
  );
  

const useCountryStore = create((set)=>({
    country:"US"
}))

const limit = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
      if (get().euros > 10) {
        return set((state) => (state.euros = 10));
      }
      if (get().euros < 0) {
        return set((state) => (state.euros = 0));
      }
    },
    get,
    api
  );

// Turn the set method into an immer proxy
const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);


  const useEutoStore = create(
    limit(
      immer((set) => ({
        euros: 0,
        increaseEuros: () => set((state) => void (state.euros = state.euros + 1)),
        decreaseEuros: () => set((state) => void (state.euros = state.euros - 1))
      }))
    )
  );
export {useStore,useCountryStore,useEutoStore};