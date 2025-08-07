import { sum } from "../sum";

test('Sum function will returtn the sum of two numbers', () => { 
    
    const res = sum(1,5);
    expect(res).toBe(6);
 })