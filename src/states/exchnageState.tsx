import { atom, selector } from "recoil";

// wonState의 타입은 number로 지정
export const wonState = atom<number>({
  key: "wonState",  
  default: 0,  
});

export const dollarState = selector<number>({
  key: "dollarState",  
  get: ({ get }) => {
    const won = get(wonState);  
    return won / 1400;  
  },
  set: ({ set }, dollar) => {
    const newWonValue = (dollar as number) * 1400; 
    set(wonState, newWonValue);  
  },
});
